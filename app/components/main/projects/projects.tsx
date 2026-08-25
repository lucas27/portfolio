import arrow from '@/public/icons8-arrow-right-24.png';
import arrowWhite from '@/public/icons8-arrow-right-24-white.png';
import cartAnimationIcon from '@/public/icons8-cart.gif';
import avatarIcon from '@/public/icons8-profile-avatar-50.png';
import soundAnimationIcon from '@/public/icons8-sound.gif';

import Service from "@/app/service/Service";
import description from './description.json';

import { ThemeContext } from "@/app/utils/context";
import { Suspense, use, useContext, useState } from "react";

type Project = { 
    name: string; 
    clone_url: string; 
};

const ProjectRepository = ({theme, request }: {theme : string | undefined, request: Promise<Project[]>}) => {
    const [hover, setHover] = useState<number | null>(null);

    try {
        const resp = use<Project[]>(request);

    }catch (err) {
        console.error(err);
    }
    const icons = [
        cartAnimationIcon.src,
        avatarIcon.src,
        soundAnimationIcon.src
    ]

    return resp.map((projects, index) => (
        <li 
        key={index}
        className="flex gap-4 border-1 border-transparent rounded-2xl shadow-xl p-5 h-45 justify-center" 
        style={{backgroundColor: theme?.includes("black") ? "white" : "#171B25"}}
        >
            {/* <img src="" /> */}
            <img className="border-1 rounded-xl bg-white border-transparent shadow-[0_0_15px_rgba(0,0,0,0.3)] h-15 w-15 p-3" src={icons[index]} />
            <div className="flex relative flex-col w-120 ">
                <h1 className="font-[Inter] text-xl font-bold"
                style={{color: theme}}
                >{projects.name.charAt(0).toUpperCase() + projects.name.substring(1)}</h1>
                <p className="font-[Roboto] text-lg">{description[index]}</p>
                <a href={projects.clone_url} target="_blank"
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}
                style={{
                    backgroundColor: hover === index ? "#FF3B3B" : "transparent", 
                    color: hover === index ? "white" : 
                    theme?.includes("black") ? "#FF3B3B" : theme, 
                    borderColor: theme?.includes("black") ? "#FF3B3B" : hover !== index ? "gray" : "transparent"
                }}
                className="flex absolute bottom-[-5px] border-1 font-[Roboto] text-lg w-40 h-12 justify-center items-center gap-3 rounded-xl select-none cursor-pointer">
                    {"Ver projetos"}
                    <img src={
                        theme?.includes("black") && hover !== index ?
                        arrow.src
                        :
                        arrowWhite.src
                        } /> 
                </a>
            </div>
        </li>
    ));
}

function Projects() {
    const color = useContext(ThemeContext);
    const textColor = color?.themeMode;  
    const service = new Service().getRequest() as unknown as Promise<Project[]>;
    
    return (
        <nav id="projetos" className="flex flex-col relative pl-105 gap-10 h-100">
            <h3 className="flex text-4xl font-[Inter] after:absolute after:border-b-2 after:border-[#FF3B3B] after:w-19 after:h-12"
            style={{color: textColor}}
            >Projetos</h3>
            <ul className="flex flex-row flex-wrap gap-3">
                <Suspense >
                    <ProjectRepository theme={textColor} request={service}/>
                </Suspense>
            </ul>            
        </nav>
    );
}

export default Projects;