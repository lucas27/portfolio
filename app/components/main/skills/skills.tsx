import java from '@/public/icons8-java.svg';
import spring from '@/public/icons8-spring-boot.svg';
import typescript from '@/public/icons8-typescript.svg';
import javascript from '@/public/icons8-javascript.svg';
import react from '@/public/icons8-react-24.png';
import angular from '@/public/icons8-angularjs.svg';
import next from '@/public/icons8-nextjs.svg';
import tailwind from '@/public/icons8-tailwind-css.svg';
import sass from '@/public/icons8-sass-24.png';
import git from '@/public/icons8-git.svg';
import postgres from '@/public/icons8-postgresql.svg';
import rabbit from '@/public/rabbitmq-logo-svgrepo-com.svg';
import docker from '@/public/icons8-docker-24.png';

import { Suspense, useContext, useState } from 'react';
import { ThemeContext } from '@/app/utils/context';

function Skills() {
    const [hover, setHover] = useState<number | null>(null);
    const color = useContext(ThemeContext);
    const textColor = color?.themeMode;
    
    const BoxTechnologie = () => {
        const technologieIcons = [
            java.src,
            spring.src,
            javascript.src,
            typescript.src,
            angular.src,
            react.src,
            next.src,
            tailwind.src,
            sass.src,
            postgres.src,
            git.src,
            rabbit.src,
            docker.src
        ];
        const textIcons = [
            "Java",
            "Spring Boot",
            "Javascript",
            "Typescript",
            "Angular",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Sass",
            "PostgresSQL",
            "Git",
            "RabbitMQ",
            "Docker"
        ]
        
        return technologieIcons.map((icon, index) => (
            <li key={index}
            onMouseEnter={() => setHover(index)} 
            onMouseLeave={() => setHover(null)} 
            className="flex w-60 h-12 justify-center items-center gap-2 font-[Roboto] text-lg font-[600] border-2 rounded-xl border-transparent select-none"
            style={textColor?.includes("black") ? {backgroundColor: "white", 
                color: textColor, cursor: "pointer", 
                boxShadow: hover === index ? "0 0 2px 2px red" : "0 0 1px 1px gray"} 
                : 
                {backgroundColor: "#171B25", color: textColor, 
                    boxShadow: hover === index ? "0 0 2px 2px red" : "", cursor: "pointer"} 
                }
            
            >
                <img src={icon} 
                className="size-8"
                />
                {textIcons[index]}
            </li>
        ));
    };

    return (
        <section  
        id="habilidades"
        className="flex flex-col gap-10 pb-10 pl-105 relative max-w-500 scroll-m-30">
            <h2 
            className="flex text-4xl font-[Inter] after:border-b-2 after:absolute after:w-22 after:h-13 after:border-red-500"
            style={textColor?.includes("black") ? {color: textColor} : {color: textColor}}
            >Habilidades & Tecnologias</h2>
            <ul className="flex gap-5 flex-wrap">
                <Suspense>
                    <BoxTechnologie />
                </Suspense>
            </ul>
        </section>
    );
}

export default Skills;