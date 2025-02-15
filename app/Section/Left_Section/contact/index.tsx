import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
    return (
        <div className="flex gap-8 items-end text-xl">
            <div>
                <a href="https://github.com/MrThanakritt" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="w-8 h-8 hover:scale-110 hover:animate-pulse space-x-20 duration-200" />
                </a>
            </div>
            <div>
                <a href="mailto:thanakritcharoenchinnapat@gmail.com?subject=สวัสดีคุณธนกฤต&body=ฉันต้องการติดต่อคุณเรื่อง..." target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8 hover:scale-110 hover:animate-pulse space-x-20 duration-200" />
                </a>
            </div>
            <div>
                <a href="https://www.youtube.com/@thanakritcharoenchinnapat7498" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} className="w-8 h-8 hover:scale-110 hover:animate-pulse space-x-20 duration-200" />
                </a>
            </div>
        </div>
    )
}
export default Contact;