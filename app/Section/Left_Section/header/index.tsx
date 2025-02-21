import { data } from "@/app/Contents/header";


import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Header = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="text-3xl font-semibold text-purple-400"> {data.name} </div>
            <div className="text-xl font-medium text-green-600"> {data.enducation} </div>
            <div className="text-base text-gray-400 w-4/5"> {data.about} </div>
            <div className="mt-5">
                <a href={data.link}
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="flex items-center gap-1 bg-purple-400 text-black py-3 px-5 rounded-md hover:bg-purple-500 transition-all duration-300 ease-in-out active:scale-105 hover:scale-95">
                        {data.btnText}
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4 inline-block mt-1 transform transition-all duration-300 ease-in-out animate-bounce" />
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Header;
