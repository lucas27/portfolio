import emailIcon from '@/public/mail_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import linkedinIcon from '@/public/icons8-linkedin-white.svg';
import githubIcon from '@/public/icons8-github-white.svg';
import fileIcon from '@/public/icons8-file.svg';
import arrowIcon from '@/public/icons8-arrow-right-24-white.png';
import redArrowIcon from '@/public/icons8-red-arrow-right-24.png';
import downloadIcon from '@/public/icons8-download-24.png';
import downloadWhiteIcon from '@/public/icons8-download-24-white.png';

import { useState } from 'react';

export function RedirectLink({textColor}: {textColor : string | undefined}) {
    const [hover, setHover] = useState<number | null>(null);

    const text = ["E-mail", "Linkedin", "Github", "Currículo"];

    const message = ["Envie um e-mail diretamente para mim.", "Vamos nos conectar no Linkedin.", "Confira meus projetos e contribuições.", "Baixe meu currículo em PDF."];

    const icons = [
        emailIcon.src, linkedinIcon.src, githubIcon.src, fileIcon.src
    ];

    const buttonText = [
        "Enviar E-mail",
        "Conectar",
        "Ver perfil",
        "Download"
    ]

    return text.map((text, index) => (
        <li 
        key={index}
        className="flex flex-col h-80 w-60 justify-center items-center text-center rounded-xl"
        style={{backgroundColor: textColor?.includes("black") ? "white" : "rgb(23, 27, 37)"}}
        >
            <img
            className="bg-[#FF3B3B] p-3 rounded-4xl h-15 w-15" 
            src={icons[index]} />
            <h1 className="font-[Inter] text-xl font-bold pt-3"
            style={{color: textColor}}
            >{text}</h1>
            <p className="font-[Roboto] text-lg w-41">{message[index]}</p>
            <button
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
            className="p-2 pr-8 pl-8 relative top-5 flex gap-2 rounded-lg items-center font-[Reboto] font-bold"
            style={{backgroundColor: hover === index ? "#FF3B3B" : "", border: hover !== index ? "1px solid red" : "1px solid transparent", color: hover !== index ? "#FF3B3B" : "white", cursor: "pointer"}}
            >
                {buttonText[index]}
                <img src={hover === index ? (hover === 3 ? downloadWhiteIcon.src :  arrowIcon.src) : (index !== 3 ? redArrowIcon.src : downloadIcon.src)} /> 
            </button>
        </li>
    ));
}