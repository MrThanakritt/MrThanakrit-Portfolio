"use client";

import React from "react";

const Navbar = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: id === "Project-section" ? "start" : "center"
            });
        } else {
            console.warn(`Element with ID '${id}' not found`);
        }
    };

    return (
        <div className="hidden lg:flex flex-col gap-4 font-semibold cursor-pointer">
            <div
                onClick={() => scrollToSection("Profile-section")}
                className="transition duration-300 ease-in-out hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 p-2"
            >
                Profile
            </div>
            <div
                onClick={() => scrollToSection("Project-section")}
                className="transition duration-300 ease-in-out hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 p-2"
            >
                Project
            </div>
            <div
                onClick={() => scrollToSection("Experience-section")}
                className="transition duration-300 ease-in-out hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 p-2"
            >
                Experience
            </div>
            <div
                onClick={() => scrollToSection("Blog-section")}
                className="transition duration-300 ease-in-out hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 p-2"
            >
                Blog
            </div>
        </div>
    );
};

export default Navbar;
