import arrow from '@/public/icons8-arrow-right-24.png';
import arrowWhite from '@/public/icons8-arrow-right-24-white.png';
import cartAnimationIcon from '@/public/icons8-cart.gif';
import avatarIcon from '@/public/icons8-profile-avatar-50.png';
import soundAnimationIcon from '@/public/icons8-sound.gif';
import fileIcon from '@/public/icons8-file.gif';
import cardIcon from '@/public/icons8-card-exchange.gif';

import { MouseEventHandler, useRef, useState } from "react";
import { project_description }from '../description.json';
import { Project } from '../projects';
import { SkillsBox } from './skillsBox';

export type coordinates = {
    x: number,
    y: number,
    width: number | undefined,
    height: number | undefined
};

export function ProjectRepository({theme, resp }: {theme : string | undefined, resp: Project[]}) {
    const [buttonHover, setButtonHover] = useState<number | null>(null);
    const [boxHover, setBoxHover] = useState<number | null>(null);
    const [ coordinates, setCoordinates ] = useState<coordinates>({x: 0, y: 0, width: 0, height: 0});
    const ref =  useRef<HTMLLIElement | null>(null);

    const icons = [
        fileIcon.src,
        cartAnimationIcon.src,
        cardIcon.src,
        avatarIcon.src,
        soundAnimationIcon.src
    ]

    const handleMouseMove: MouseEventHandler<HTMLLIElement> = (event)  => {
        event.defaultPrevented;
        const rect = ref.current?.getBoundingClientRect() as DOMRect ;
        
        setCoordinates({
            x: event.pageX,
            y: event.pageY,
            width: Number(rect.width),
            height: Number(rect.height)
        })
        // console.log(coordinates, event.currentTarget.offsetLeft)
    }

    return resp.map((projects, index) => (
        <li 
        key={index}
        id={`box-${index}`}
        className="flex gap-4 border-1 border-transparent rounded-2xl shadow-xl p-5 h-45 justify-center" 
        style={{backgroundColor: theme?.includes("black") ? "white" : "#171B25"}}
        onMouseEnter={() => setBoxHover(index)}
        onMouseLeave={() => setBoxHover(null)}
        onMouseMove={handleMouseMove}
        ref={ref}
        >
            {boxHover === index ? <SkillsBox index={index} coordinates={coordinates} /> : null}
            <img className="border-1 rounded-xl bg-white border-transparent shadow-[0_0_15px_rgba(0,0,0,0.3)] h-15 w-15 p-3" src={icons[index]} />
            <div className="flex relative flex-col w-120 ">
                <h1 className="font-[Inter] text-xl font-bold"
                style={{color: theme}}
                >{projects.name.charAt(0).toUpperCase() + projects.name.substring(1)}</h1>
                <p className="font-[Roboto] text-lg">{project_description[index]}</p>
                <a href={projects.clone_url} target="_blank"
                onMouseEnter={() => {return setButtonHover(index), setBoxHover(null)}}
                onMouseLeave={() => {return setButtonHover(null), setBoxHover(index)}}
                style={{
                    backgroundColor: buttonHover === index ? "#FF3B3B" : "transparent", 
                    color: buttonHover === index ? "white" : 
                    theme?.includes("black") ? "#FF3B3B" : theme, 
                    borderColor: theme?.includes("black") ? "#FF3B3B" : buttonHover !== index ? "gray" : "transparent"
                }}
                className="flex absolute bottom-[-5px] border-1 font-[Roboto] text-lg w-40 h-12 justify-center items-center gap-3 rounded-xl select-none cursor-pointer">
                    {"Ver projetos"}
                    <img src={
                        theme?.includes("black") && buttonHover !== index ?
                        arrow.src
                        :
                        arrowWhite.src
                        } /> 
                </a>
            </div>
        </li>
    ));
}