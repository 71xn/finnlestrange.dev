import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Navbar = ({handleThemeChange, themeState}) => {
    return (
        <nav className="bg-[#F1F4F5] border-gray-200 px-1 sm:px-4 py-2.5 rounded-2xl dark:bg-[#242424] w-11/12">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center">
                    <span
                        className="self-center text-xl font-semibold font-mono hover:text-[#2A9D8F] dark:hover:text-[#2A9D8F] whitespace-nowrap dark:text-white">finnlestrange.dev</span>
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                            <Link
                                to="intro" spy={true} smooth={true} offset={50} duration={500}
                                href=""
                               className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#2A9D8F] md:p-0 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Home</Link>
                        </li>
                        <li>
                            <Link
                                to="portfolio" spy={true} smooth={true} offset={50} duration={500}
                                href=""
                               className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#2A9D8F] md:p-0 dark:text-gray-400 e dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Portfolio</Link>
                        </li>
                        <li>
                            <Link
                                to="contact" spy={true} smooth={true} offset={50} duration={500}
                                href={""}
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#2A9D8F] md:p-0 dark:text-gray-400 e dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Contact</Link>
                        </li>
                        <li>
                            <a href="https://github.com/71xn/71xn.github.io/raw/master/assets/files/CV.pdf" target={"_blank"}
                               className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#2A9D8F] md:p-0 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">CV</a>
                        </li>
                        <button
                            onClick={handleThemeChange}
                            className="block py-2 pl-3 pr-4 min-w-20 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#895EA6] dark:hover:text-[#FFB805] md:p-0 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                            {themeState === 'dark' ? <FontAwesomeIcon icon={faSun} size={"lg"} />: <FontAwesomeIcon icon={faMoon} size={"lg"} />}
                        </button>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;