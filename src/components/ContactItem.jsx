import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ContactItem = (props) => {

    const colors = {
        "soundcloud" : {
            "light" : "hover:text-[#FF2500]",
        },
        "instagram" : {
            "light" : "hover:text-[#E402CA]",
        },
        "facebook" : {
            "light" : "hover:text-[#0974E7]"
        },
        "github" : {
            "light" : "hover:text-[#FFFFFF]"
        }
    }

    return (
        <>
            <div className={"text-xl font-mono inline-block justify-center items-center"}>
                <a className={`${colors[props.color].light}`} href={props.link} target={"_blank"}>
                    <FontAwesomeIcon icon={props.icon} /> {props.text}
                </a>
            </div>
            <br />
        </>
    );
};

export default ContactItem;