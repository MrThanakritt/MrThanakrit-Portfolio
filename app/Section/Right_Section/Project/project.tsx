import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { div } from "framer-motion/m";

const projects = [
    {
        year: "2000-2200",
        img: "/screen.png",
        title: "โปรเจกต์ของฉัน",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, repudiandae?",
        github: "https://github.com/MrThanakritt",
        youtube: "https://www.youtube.com/@thanakritcharoenchinnapat7498",
        techs: [
            { name: "React", color: "text-blue-500 group-hover:border-blue-500" },
            { name: "Tailwind CSS", color: "text-green-500 group-hover:border-green-500" },
        ],
    },
    {
        year: "2000-2200",
        img: "/screen.png",
        title: "โปรเจกต์ของฉัน",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, repudiandae?",
        github: "https://github.com/MrThanakritt",
        youtube: "https://www.youtube.com/@thanakritcharoenchinnapat7498",
        techs: [
            { name: "React", color: "text-blue-500 group-hover:border-blue-500" },
            { name: "Tailwind CSS", color: "text-green-500 group-hover:border-green-500" },
        ],
    },
    {
        year: "2000-2200",
        img: "/screen.png",
        title: "โปรเจกต์ของฉัน",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, repudiandae?",
        github: "https://github.com/MrThanakritt",
        youtube: "https://www.youtube.com/@thanakritcharoenchinnapat7498",
        techs: [
            { name: "React", color: "text-blue-500 group-hover:border-blue-500" },
            { name: "Tailwind CSS", color: "text-green-500 group-hover:border-green-500" },
        ],
    },
];

export default function Project() {
    return (
        <div>
            {/* Title */}
            <h2 className="text-2xl font-bold py-1">Project</h2>
            <div className="space-y-6">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="grid grid-cols-[auto_1fr] gap-6 items-start px-5 py-6 rounded-lg transition duration-300 hover:bg-gray-700 group"
                    >
                        {/* Left Section */}
                        <div className="flex flex-col items-center min-w-[10rem]">
                            <div className="text-lg font-semibold text-gray-400 transition duration-300 group-hover:text-white">
                                {project.year}
                            </div>
                            <img src={project.img} className="w-full max-w-[10rem] h-24 rounded-md object-cover" alt="Project" />
                        </div>

                        {/* Right Section */}
                        <div className="flex-grow space-y-3">
                            <h3 className="text-lg font-semibold text-gray-400 transition duration-300 group-hover:text-white">
                                {project.title}
                                <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}
                                    className="w-3 h-3 ml-2 inline-block -mt-1 transform transition-all duration-1000 ease-in-out animate-bounce"
                                />
                            </h3>

                            {/* Social Icons */}
                            <div className="flex gap-3">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="w-8 h-8 text-gray-400 transition duration-200 group-hover:text-white"
                                    />
                                </a>
                                <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        icon={faYoutube}
                                        className="w-8 h-8 text-gray-400 transition duration-200 group-hover:text-red-500"
                                    />
                                </a>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-400 transition duration-300 group-hover:text-gray-200">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-3 text-sm font-medium">
                                {project.techs.map((tech, i) => (
                                    <span
                                        key={i}
                                        className={`px-2 py-1 text-gray-400 border border-gray-400 rounded transition duration-300 group-hover:${tech.color}`}
                                    >
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
