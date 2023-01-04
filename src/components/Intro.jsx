import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {FloatingModel} from "../assets/3dModels/FloatingModel";
import {WaitingModel} from "../assets/3dModels/WaitingModel.jsx";
import {OrbitControls} from "@react-three/drei";
import {Button, ThemeProvider} from "@mui/material";
import {Link} from "react-scroll";


const Into = () => {

    return (
        <div name={"intro"} className={"flex items-center justify-center flex-col text-center pt-2 pb-6 h-screen"}>
            <Canvas
                style={{
                    height: '500px',
                    width: '300px'
                }}
                camera={{position: [0.7, 0.5, 1.55]}}
            >
                <OrbitControls/>
                <ambientLight intensity={0.3}/>
                <ambientLight intensity={0.1}/>
                <directionalLight intensity={0.4}/>
                <Suspense fallback={null}>
                    <WaitingModel position={[0.025, -1.2, 0]}/>
                </Suspense>
            </Canvas>
            <br/>
            <h1 className={"text-4xl md:text-7xl mb-1 md:mb-3 font-bold"}>Finn</h1>
            <p className={"text-base md:text-xl mb-3 font-medium"}>Software Engineer, Lighting Tech / DJ & Student</p>
            <p className={"text-sm max-w-xl mb-6"}>2nd year Computer Science Student at the University of Glasgow,
                part-time programmer, lighting / sound tech & DJ. I have experience working on large scale programming
                projects and integrating new and custom software with existing systems. My current employer is the International School of Aberdeen,
                where I write custom plugins and SQL for Powerschool and Oracle DB.
            </p>
            <Link
                to="portfolio" spy={true} smooth={true} offset={50} duration={500}
                href="#"
            >
                <Button variant={"contained"} color={"blue"}>
                    View Portfolio
                </Button>
            </Link>
        </div>
    );
}

export default Into;