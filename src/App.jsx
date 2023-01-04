import React, {useEffect, useState} from 'react'
import Intro from "./components/Intro.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Contact from "./components/Contact.jsx";
import {createTheme, ThemeProvider} from "@mui/material";


const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const muiTheme = createTheme({
    palette: {
        green: createColor('#2A9D8F'),
        blue: createColor('#209EBC'),
        yellow: createColor('#FFB805'),
        orange: createColor('#FB8501'),
    },
});

function App() {

    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    const handleThemeChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <>
            <ThemeProvider theme={muiTheme}>
                <div className={"bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter"}>
                    <div className={"flex justify-center items-center flex-col pt-3 fixed min-w-full"}>
                        <Navbar handleThemeChange={handleThemeChange} themeState={theme} />
                    </div>
                    <div className={"max-w-5xl w-11/12 mx-auto"}>
                        <Intro/>
                        <Portfolio/>
                        <Contact />
                    </div>
                    <div className={"flex flex-col justify-center items-center pt-15 pb-3"}>
                        <Footer/>
                    </div>
                </div>
            </ThemeProvider>
        </>
    )
}

export default App
