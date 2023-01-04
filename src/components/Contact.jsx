import React from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import ContactItem from "./ContactItem.jsx";

const Contact = () => {
    return (
        <div name={"contact"} className={"flex items-center justify-center flex-row text-center pt-20 pb-6 h-screen"}>
            <div className={"flex flex-col flex-1 text-right pr-5"}>
                <h1 className={"text-4xl md:text-7xl mb-1 md:mb-3 font-bold"}>Links & Contact Info</h1>
            </div>
            <div className={"flex flex-col flex-1 text-left pl-5"}>
                <ContactItem icon={faInstagram} link={"https://instagram.com/finn.lestrange"} text={"finn.lestrange"} color={"instagram"} />
                <ContactItem icon={faFacebook} link={"https://facebook.com/finnlestrange"} text={"finnlestrange"} color={"facebook"} />
                <ContactItem icon={faGithub} link={"https://github.com/71xn"} text={"github/71xn"} color={"github"} />
                <ContactItem icon={faSoundcloud} link={"https://soundcloud.com/finnlestrange"} text={"finnlestrange"} color={"soundcloud"} />
                <ContactItem icon={faEnvelope} link={"mailto:finn.lestrange@gmail.com"} text={"finn.lestrange [at] gmail.com"} color={"github"} />
            </div>
        </div>
    );
}

export default Contact;