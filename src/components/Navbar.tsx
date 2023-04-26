import { GoSearch } from 'react-icons/Go';

function Navbar() {

    return (
        <nav className=' bg-gray-600 text-emerald-50 text-xl px-10 py-2 flex items-center justify-center md:justify-between '>
            <div className=' text-2xl hidden md:block '>O_O</div>
            <div className=' flex flex-row items-center bg-gray-500 p-2 rounded-full group ' 
                    onClick={() => {
                        let screenWidth = window.screen.width;
                        let element = document.getElementById('search-input') as HTMLElement;
                        if(screenWidth >= 768) {
                            element.focus();
                        }
                    }
                }>
            <input id='search-input' className={ `bg-transparent w-56 md:w-0 p-0 ml-3 mr-1 my-0 text-base ease-out duration-500 md:focus:block md:group-hover:block focus:w-56 focus:outline-none group-hover:w-56 md:mx-0 md:focus:ml-3 md:focus:mr-1 group-hover:ml-3 group-hover:mr-1 ` }/>
            <button className=' p-1 '>
                    <GoSearch className=' text-md w-5 h-5 '/>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;