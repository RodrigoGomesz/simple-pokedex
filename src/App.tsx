import Navbar from './components/Navbar';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Data {
	data: {
		id: number,
		name: string,
		types: { 
			0: { type: { name: string } }, 
			1?: { type: { name: string } } 
		},
		sprites: { other: { 'official-artwork': { front_default: string } } }
	}
}

export default function Home() {
	const [data, setData] = useState<Array<Data>>([]);
	const [limit, setLimit] = useState<number>(15);
	const [offset, setOffset] = useState<number>(0);
	const showMoreLimit: number = 10;

	useEffect(() => {
		getPokemon();
	}, [limit])

	function getPokemon() {
		let endpoints: Array<string> = [];

		if(data.length == 0) {
			setOffset(0);
		}

		for (let index = offset + 1; index <= limit; index++) {
			endpoints.push(`https://pokeapi.co/api/v2/pokemon/${index}`)
			setOffset(index);
		}

		let response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
			.then((res) => {
				if(data && data.length > 0 && data.length < limit){
					res.map((e) => setData(data => [...data, e]))
				}
				else setData(res)
			})
			.catch((err) => console.log(err))
		return response;
	}
	
	const mainContent = (
		data && data.length > 0 
		?  data.map((element, index: number) => (
				<Card 
					key={index} 
					number={putZerosInFront(element.data.id)} 
					name={upperCaseFirstLetter(element.data.name)}
					type1={element.data.types[0].type.name} 
					type2={element.data.types[1] ? element.data.types[1].type.name : ''} 
					imgSrc={element.data.sprites.other['official-artwork'].front_default}
				/>
			))
		: 'no data'
	)
	
  	return (
		<>
			<Navbar/>
			<main>
				<ul className=' grid grid-cols-[repeat(auto-fit,minmax(15rem,20rem))] gap-3 justify-center m-5 '>
					{ mainContent }
				</ul>
				<div className=' flex items-center '>
					<button className=' bg-gray-500 text-white mx-auto px-3 py-2 m-4 rounded ' onClick={() => {
						setLimit(limit + showMoreLimit)
					}}>Show More</button>
				</div>
			</main>
			
		</>
	)
}

function upperCaseFirstLetter(str: string): string {
	let newStr: string = str.charAt(0).toUpperCase() + str.slice(1);
	return newStr;
}

function putZerosInFront(number: number): string {
	let newNumber: string;

	if(number < 9) newNumber = '000' + number;
	else if(number < 99) newNumber = '00' + number;
	else if(number < 999) newNumber = '0' + number;
	else newNumber = number.toString();

	return newNumber;
}