"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// โลโก้ที่ใช้ในแอนิเมชัน
const scrollLogos = [
    "/css.png",
    "/html.png",
    "/js.png",
    "/React.png",
    "/Typescript.png",
    "/Vitejs.png",
    "/Vue.js.png",
    "/dart.png",
];

const Profile: FC = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4" id="Profile-section">
            {/* Profile Image */}
            <div className="w-40 h-40 sm:w-44 sm:h-44 flex justify-center items-center mb-3">
                <img
                    src="/Thanakrit01.jpg"
                    alt="Profile picture of Thanakrit Charoenchinnapat"
                    className="w-full h-full object-cover rounded-full ring-4 ring-white ring-opacity-60 shadow-lg transition-all duration-300 ease-in-out hover:ring-8 hover:ring-pink-500 hover:scale-110 hover:shadow-2xl"
                />
            </div>

            {/* Profile Name */}
            <div className="text-center">
                <h1 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                    นาย ธนกฤต เจริญชินภัทร
                </h1>
            </div>

            {/* Profile Bio */}
            <div className="text-center max-w-sm text-sm sm:text-base text-gray-600 dark:text-gray-300">
                "ไม่ต้องเก่งตั้งแต่เริ่มต้น แต่เริ่มต้นแล้วต้องเก่งขึ้นเรื่อยๆ"
            </div>

            {/* Infinite Scroll Animation with Logos */}
            <div className="relative w-full max-w-[400px] sm:max-w-[500px] overflow-hidden py-2 rounded-lg">
                <motion.div
                    className="flex space-x-10 justify-center whitespace-nowrap"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 6, // เร็วขึ้นเล็กน้อย
                        ease: "linear",
                    }}
                >
                    {[...scrollLogos, ...scrollLogos, ...scrollLogos].map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt={`Logo ${index}`}
                            width={50}
                            height={50}
                            className="h-12 w-12 object-contain"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Profile;
