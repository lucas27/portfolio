import whiteIconOpenNew from '@/public/open_in_new_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import whiteIconGithub from '@/public/icons8-github-white.svg';
import whiteIconLinkedin from '@/public/icons8-linkedin-white.svg';
import whiteIconEmail from '@/public/mail_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import blackIconGithub from '@/public/icons8-github-black.svg';
import blackIconLinkedin from '@/public/icons8-linkedin-black.svg';
import blackIconEmail from '@/public/mail_24dp_BLACK_FILL0_wght400_GRAD0_opsz24.svg';

import { ThemeContext } from "@/app/utils/context";
import { useContext, useState } from "react";
import jsonFile from '../file/aboutExtraComponentText.json';

export function LinksButton() {
    const [isHover, setIsHover] = useState<number | null>(null);
    const color = useContext(ThemeContext);
    const textColor = color?.themeMode;
    const linksButton = jsonFile.links;
    const textButton = jsonFile.textButton;

    const icon = [
        whiteIconOpenNew.src,
        textColor?.includes("black") ? blackIconEmail.src : whiteIconEmail.src,
        textColor?.includes("black") ? blackIconGithub.src : whiteIconGithub.src,
        textColor?.includes("black") ? blackIconLinkedin.src : whiteIconLinkedin.src,
        textColor?.includes("black") ? blackIconEmail.src : whiteIconEmail.src,
    ];

    const handleScrollSection = (sectionId: string) => {
        if(!sectionId.includes("#") ) {
            window.open(sectionId, "_blank")
        }else {
            const section = document.querySelector(sectionId);
            section?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return linksButton.map((link, index) => (
        <a 
        key={index} 
        onClick={() => handleScrollSection(link)}
        onMouseEnter={() => setIsHover(index)}
        onMouseLeave={() => setIsHover(null)} 
        className={`flex border-2 rounded-lg p-2 gap-1 select-none
            ${(textColor?.includes("black") && index !== 0) ? " text-black shadow-sm" : "text-[#FAFAFA]"}
            ${index !== 1 && index !== 0 ? " bg-[#171b25]" : null} 
            ${(index !== 1 && index !== 0 && textColor?.includes("black")) ? `shadow-[0_0_15px_rgba(0,0,0,0.3)]
            // não é bonito, mas foi um jeito de manter a gambiarra 
            ${(isHover !== 0 && isHover !== 1 && isHover === index) ?  "cursor-pointer border-red-500 shadow-red-500 shadow-lg bg-white" : "bg-white border-transparent "}
            ` 
            : (isHover !== 0  && isHover === index) ?  "border-red-500 shadow-[red] shadow-sm cursor-pointer" 
            : index === 1 ? " border-[grey]" : "border-transparent"}
            ${index === 0 ? `cursor-pointer bg-[#FF3B3B] border-transparent text-[#FAFAFA]` : `border-[grey]`}     
            `}
            
            // download
        >
            <img 
            src={ icon[index] }
            />
            {textButton[index]}</a>
    ));
}