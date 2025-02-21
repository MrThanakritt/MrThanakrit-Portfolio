import React from "react";
import Header from "./header";
import Navbar from "./navbar";
import Contact from "./contact";

const LeftSection = () => {
    return (
        <div className="px-5 mb-16 lg:mb-0">
            <div className="sticky top-14 grid gap-y-5 lg:grid-rows-[35%_45%_20%] lg:h-[90vh]">
                <Header />
                <Navbar />
                <Contact />
            </div>
        </div>
    )
}

export default LeftSection;