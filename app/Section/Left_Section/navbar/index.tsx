import React from "react";

const Navbar = () => {
    return (
        <div className="flex flex-col gap-5 font-semibold">
            <div className="scroll-smooth"><a href="#profile">Profile</a></div>
            <div><a href="#project">Project</a></div>
            <div>Experience</div>
            <div>Certificate</div>
        </div>
    )
}

export default Navbar;