import React from "react";
import Profile from "./Profile/profile";
import Project from "./Project/project";
import Experience from "./Experience/experience";
import Certificate from "./Blog/blog";
import Blog from "./Blog/blog";

const RightSection = () => {
    return (
        <div className="grid gap-y-5 lg:gap-y-40 px-5">
            <div><Profile /></div>
            <div><Project /></div>
            <div><Experience /></div>
            <div><Blog/></div>
        </div>
    )
}

export default RightSection;