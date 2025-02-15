import React from "react";
import Profile from "./Profile/profile";
import Project from "./Project/project";

const RightSection = () => {
    return (
        <div className="grid gap-y-40 px-5">
            <div id="profile"><Profile /></div>
            <div id="project"><Project /></div>
            <div className="mb-96">Experience</div>
            <div className="mb-96">Certificate</div>
        </div>
    )
}

export default RightSection;