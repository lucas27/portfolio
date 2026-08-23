import java from '@/public/icons8-java.svg';
import spring from '@/public/icons8-spring-boot.svg';
import react from '@/public/icons8-react-24.png';
import angular from '@/public/icons8-angularjs.svg';
import postgres from '@/public/icons8-postgresql.svg';
import rabbit from '@/public/rabbitmq-logo-svgrepo-com.svg';
import docker from '@/public/icons8-docker-24.png';

import { ThemeContext } from "@/app/utils/context";
import { useContext } from "react";

export function MainBoxTechnologie() {
    const color = useContext(ThemeContext);
    const textColor = color?.themeMode;
    const boxIcons = [
        java.src,
        spring.src,
        react.src,
        angular.src,
        postgres.src,
        rabbit.src,
        docker.src
    ];

    return boxIcons.map((icon ,index) => (
        <li 
        key={index}
        className="border-3 border-none rounded-xl shadow-lg p-3"
        style={ textColor?.includes("black") ? {backgroundColor: "white"} : {backgroundColor: "#11182783"}}
        >
           <img src={icon} 
           className="size-8"
           /> 
        </li>
    ));
}