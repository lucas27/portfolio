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

import { Suspense } from 'react';
function Skills() {
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
            className="flex w-60 h-12 justify-center items-center gap-2 font-[Roboto] text-lg font-[600] border-2 border-[gray] rounded-xl"
            >
                <img src={icon} 
                className="size-8"
                />
                {textIcons[index]}
            </li>
        ));
    };

    return (
        <section className="flex flex-col gap-10 pb-10 pl-105 relative max-w-500 select-none">
            <h2 id="habilidades" 
            className="flex text-4xl font-[Roboto] after:border-b-2 after:absolute after:w-22 after:h-11 after:border-red-500"
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