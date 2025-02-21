"use client";

import React from "react";

const Navbar = () => {
    const scrollToSection = (id: string) => {
        if (id === "Blog-section") {
            // เลื่อนไปที่ด้านล่างสุดของหน้า
            window.scrollTo({
                top: document.body.scrollHeight,  // ใช้ document.body.scrollHeight เพื่อให้แน่ใจว่าเลื่อนไปที่ด้านล่างสุด
                behavior: "smooth",
            });
        } else {
            const element = document.getElementById(id);
            if (element) {
                // ใช้ scrollIntoView สำหรับส่วนอื่นๆ
                element.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }
    };

    return (
        <div className="hidden lg:flex flex-col gap-4 font-semibold cursor-pointer">
            <div
                id="Profile-section"
                onClick={() => scrollToSection("profile")}
                className="transition duration-300 ease-in-out hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 p-2"
            >
                Profile
            </div>
            <div
                id="Project-section"
                onClick={() => scrollToSection("project")}
                className="transition duration-300 ease-in-out hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 p-2"
            >
                Project
            </div>
            <div
                id="Experience-section"
                onClick={() => scrollToSection("experience")}
                className="transition duration-300 ease-in-out hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 p-2"
            >
                Experience
            </div>
            <div
                id="Blog-section"
                onClick={() => scrollToSection("Blog-section")}
                className="transition duration-300 ease-in-out hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 p-2"
            >
                Blog
            </div>
        </div>
    );
};

export default Navbar;
