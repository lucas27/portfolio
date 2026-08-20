import whiteIconOpenNew from '@/public/open_in_new_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import whiteIconGithub from '@/public/icons8-github-white.svg';
import whiteIconLinkedin from '@/public/icons8-linkedin-white.svg';
import whiteIconEmail from '@/public/mail_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import blackIconGithub from '@/public/icons8-github-black.svg';
import blackIconLinkedin from '@/public/icons8-linkedin-black.svg';
import blackIconEmail from '@/public/mail_24dp_BLACK_FILL0_wght400_GRAD0_opsz24.svg';

import { ThemeContext } from "@/app/utils/context";
import { useContext } from "react";
import jsonFile from '../file/aboutExtraComponentText.json';

export function LinksButton() {
    const color = useContext(ThemeContext);
    const textColor = color?.themeMode;
    const linksButton = jsonFile.links;
    const textButton = jsonFile.textButton;

    const icon = [
        whiteIconOpenNew.src,
        null,
        textColor?.includes("black") ? blackIconGithub.src : whiteIconGithub.src,
        textColor?.includes("black") ? blackIconLinkedin.src : whiteIconLinkedin.src,
        textColor?.includes("black") ? blackIconEmail.src : whiteIconEmail.src,
    ];

    return linksButton.map((link, index) => (
        <a 
        key={index} 
        href={link} 
        className={`flex border-2 rounded-lg p-2 gap-1
            ${(textColor?.includes("black") && index !== 0) ? "text-black shadow-sm" : "text-[#FAFAFA]"}
            ${(index !== 1 && index !== 0 && textColor?.includes("black")) ? "border-none shadow-lg bg-white" : null}
            ${index !== 1 && index !== 0 ? "border-none bg-[#111827]" : null} 
            ${index === 0 ? `bg-[#FF3B3B] border-transparent text-[#FAFAFA]` : `border-[grey]`}`} 
        download
        >
            <img 
            src={ icon[index] }
            />
            {textButton[index]}</a>
    ));
}