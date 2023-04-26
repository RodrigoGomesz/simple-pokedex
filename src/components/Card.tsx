import TypeContainer from "./TypeContainer";

type Props = {
    number: string,
    name: string,
    imgSrc: string,
    type1: string,
    type2?: string
}

function Card({ number, name, imgSrc, type1, type2='grass' }:Props) {
	return (
		<li className=' bg-gray-200 px-7 py-4 w-full rounded-lg shadow-sm shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 select-none '>
			<div className=' flex justify-between '>
				<div>Nº { number }</div>
				<div> { name } </div>
			</div>
			<div>
				<img src={ imgSrc } className=' select-none '/>
			</div>
			<div className=' flex justify-end gap-1  '>
				<TypeContainer type={ type1 }/>
				{ type2 ? <TypeContainer type={ type2 }/> : <></> }
			</div>
		</li>
	)
}

export default Card;