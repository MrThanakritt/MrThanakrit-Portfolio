import { FC } from "react";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Blog: FC = () => {
    const blogs = [
        {
            imageSrc: "/me.jpeg",
            altText: "Image of me",
            title: "Fourier อยู่รอบตัวเรา",
            description: "นี่คือ blog แรกของผม",
            techStack: ["Medium", "Blog", "Fourier"],
            medium: "https://medium.com/@thanakritcharoenchinnapat/กรรมการฟูริเยร์อยู่ข้างๆเรา-03f4b69e2642",

        },
        {
            imageSrc: "/me.jpeg",
            altText: "Project Screenshot",
            title: "โปรเจกต์ของฉัน",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, repudiandae?",
            techStack: ["Medium", "Blog", "Flutter"],
            medium: "https://medium.com/@thanakritcharoenchinnapat/flutter-มีอะไรดี-bc74a116c53c",
        }
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold py-1">Blog</h2>
            {blogs.map((blog, index) => (
                <div key={index} className="grid grid-cols-[auto_1fr] gap-x-6 items-start px-3 py-7 rounded-md transition duration-300 hover:bg-gray-700 group">
                    <div className="flex flex-col items-start" id="Blog-section">
                        <img src={blog.imageSrc} alt={blog.altText} className="w-full max-w-[9rem] h-24 rounded-md" />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold transition duration-300 text-gray-400 group-hover:text-white">
                            {blog.title}
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 ml-2 inline-block -mt-1 transform transition-all duration-1000 ease-in-out animate-bounce" />
                        </h3>

                        <div className="flex gap-3">
                            {blog.medium &&
                                <a href={blog.medium} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        icon={faMedium}
                                        className="w-8 h-8 text-gray-400 transition duration-200 group-hover:text-white"
                                    />
                                </a>
                            }
                        </div>

                        <p className="text-base text-gray-400 transition duration-300 group-hover:text-gray-200">
                            แรงบันดาลใจในการเขียนเรื่องนี้ <b>Credit By 9 arm</b>
                        </p>

                        <div className="flex gap-3 text-sm font-medium">
                            {blog.techStack.map((tech, index) => (
                                <span key={index} className="px-2 py-1 text-gray-400 border border-gray-400 rounded transition duration-300 group-hover:text-white group-hover:border-white">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blog;
