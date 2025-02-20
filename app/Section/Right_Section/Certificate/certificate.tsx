import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Certificate = () => {

    return (
        <div>
            {/* Title */}
            <h2 className="text-2xl font-bold py-1">Blog</h2>

            {/* Project Section */}
            <div className="grid grid-cols-[auto_1fr] gap-x-6 items-start px-3 py-7 rounded-md transition duration-300 hover:bg-gray-700 group">
                {/* Project Left Section */}
                <div className="flex flex-col items-start">
                    <div>
                        <img src="/me.jpeg" className="w-full max-w-[9rem] h-24 rounded-md" />
                    </div>
                </div>

                {/* Project Right Section */}
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold transition duration-300 text-gray-400 group-hover:text-white">
                        Fourier อยู่รอบตัวเรา
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 ml-2 inline-block -mt-1 transform transition-all duration-1000 ease-in-out animate-bounce " />
                    </h3>

                    {/* Social Icons */}
                    <div className="flex gap-3">
                        <a href="https://medium.com/@thanakritcharoenchinnapat/%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9F%E0%B8%B9%E0%B8%A3%E0%B8%B4%E0%B9%80%E0%B8%A2%E0%B8%A3%E0%B9%8C%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%86%E0%B9%80%E0%B8%A3%E0%B8%B2-03f4b69e2642" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faMedium} className="w-8 h-8 text-gray-400 transition duration-200 group-hover:text-white" />
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 transition duration-300 group-hover:text-gray-200">
                        นี่คือ blog แรกของผมเลย แรงบันดาลใจในการอยากแชร์เรื่องนี้ต่อเพราะมีความน่าสนใจมาก
                        <br />
                        แรงบันดาลใจในการเขียนเรื่องนี้ <b>Credit By 9 arm</b>
                    </p>

                    {/* Tech Stack */}
                    <div className="flex gap-3 text-sm font-medium">
                        <span className="px-2 py-1 text-gray-400 border border-gray-400 rounded transition duration-300 group-hover:text-blue-500 group-hover:border-blue-500">
                            Medium
                        </span>
                        <span className="px-2 py-1 text-gray-400 border border-gray-400 rounded transition duration-300 group-hover:text-green-500 group-hover:border-green-500">
                            Blog
                        </span>
                    </div>
                </div>
            </div>

            {/* Project Section */}
            <div className="grid grid-cols-[auto_1fr] gap-x-6 items-start px-3 py-7 rounded-md transition duration-300 hover:bg-gray-700 group">
                {/* Project Left Section */}
                <div className="flex flex-col items-start">
                    <div className="text-lg font-semibold transition duration-300 text-gray-400 group-hover:text-white">
                        2000-2200
                    </div>
                    <div>
                        <img src="/screen.png" className="w-full max-w-[9rem] h-24 rounded-md" />
                    </div>
                </div>

                {/* Project Right Section */}
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold transition duration-300 group-hover:text-white">
                        โปรเจกต์ของฉัน
                    </h3>

                    {/* Social Icons */}
                    <div className="flex gap-3">
                        <a href="https://github.com/MrThanakritt" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="w-8 h-8 text-gray-400 transition duration-200 group-hover:text-white" />
                        </a>
                        <a href="https://www.youtube.com/@thanakritcharoenchinnapat7498" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} className="w-8 h-8 text-gray-400 transition duration-200 group-hover:text-red-500" />
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 transition duration-300 group-hover:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, repudiandae?
                    </p>

                    {/* Tech Stack */}
                    <div className="flex gap-3 text-sm font-medium">
                        <span className="px-2 py-1 text-gray-400 border border-gray-400 rounded transition duration-300 group-hover:text-blue-500 group-hover:border-blue-500">
                            React
                        </span>
                        <span className="px-2 py-1 text-gray-400 border border-gray-400 rounded transition duration-300 group-hover:text-green-500 group-hover:border-green-500">
                            Tailwind CSS
                        </span>
                    </div>
                </div>
            </div>

            {/* Project Section */}
            <div className="grid grid-cols-[auto_1fr] gap-x-6 items-start px-3 py-7 rounded-md transition duration-300 hover:bg-gray-700 group">
                {/* Project Left Section */}
                <div className="flex flex-col items-start">
                    <div className="text-lg font-semibold transition duration-300 text-gray-400 group-hover:text-white">
                        2000-2200
                    </div>
                    <div>
                        <img src="/screen.png" className="w-full max-w-[9rem] h-24 rounded-md" />
                    </div>
                </div>

                {/* Project Right Section */}
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold transition duration-300 group-hover:text-white">
                        โปรเจกต์ของฉัน
                    </h3>

                    {/* Social Icons */}
                    <div className="flex gap-3">
                        <a href="https://github.com/MrThanakritt" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="w-8 h-8 text-gray-400 transition duration-200 group-hover:text-white" />
                        </a>
                        <a href="https://www.youtube.com/@thanakritcharoenchinnapat7498" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} className="w-8 h-8 text-gray-400 transition duration-200 group-hover:text-red-500" />
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 transition duration-300 group-hover:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, repudiandae?
                    </p>

                    {/* Tech Stack */}
                    <div className="flex gap-3 text-sm font-medium">
                        <span className="px-2 py-1 text-gray-400 border border-gray-400 rounded transition duration-300 group-hover:text-blue-500 group-hover:border-blue-500">
                            React
                        </span>
                        <span className="px-2 py-1 text-gray-400 border border-gray-400 rounded transition duration-300 group-hover:text-green-500 group-hover:border-green-500">
                            Tailwind CSS
                        </span>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Certificate;
