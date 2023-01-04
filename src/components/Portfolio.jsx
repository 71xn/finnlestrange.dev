import React from "react";
import PortfolioTimeline from"./PortfolioTimeline.jsx";

const Portfolio = () => {
    return (
        <div name={"portfolio"} className={"flex items-center justify-center flex-row text-center pt-20 pb-6 h-screen"}>
            <div className={"flex flex-col flex-1 text-right pr-5"}>
                <h1 className={"text-4xl md:text-7xl mb-1 md:mb-3 font-bold"}>Portfolio</h1>
                <p className={"text-base md:text-xl mb-3 font-medium"}>Employment & Projects</p>
                <p className={"text-base md:text-l mb-3 font-mono hover:text-[#2A9D8F]"}><a href={"https://github.com/71xn/71xn.github.io/raw/master/assets/files/CV.pdf"}>CV / Resume</a></p>
            </div>
            <div className={"flex flex-col flex-1 text-left pl-5"}>
                <PortfolioTimeline />
            </div>
        </div>
    );
}

export default Portfolio;