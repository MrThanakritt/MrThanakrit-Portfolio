import React from "react";
import Profile from "./Profile/profile";
import Project from "./Project/project";
import Experience from "./Experience/experience";
import Certificate from "./Certificate/certificate";

const RightSection = () => {
    return (
        <div className="grid gap-y-32 px-5">
            <div id="profile"><Profile /></div>
            <div id="project"><Project /></div>
            <div id="experience"><Experience /></div>
            <div><Certificate/></div>
        </div>
    )
}

export default RightSection;