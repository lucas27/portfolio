import { Suspense, useContext, useState } from 'react';
import style from './header.module.css';
import { ThemeContext } from '@/app/utils/context';

export function Header() {
    const [isActive, setIsActive] = useState<boolean>(false);
    const themeMode = useContext(ThemeContext);

    const handleSwitch = () => {
        setIsActive(value => !value);
        if(!isActive) {
            document.body.style.backgroundColor = "#0B111B";    
            document.body.style.color = "#f3f4f6d3";
            themeMode?.setThemeMode("#F3F4F6");
        }else {
            document.body.style.backgroundColor = "#FAFAFA";    
            document.body.style.color = "black";
            themeMode?.setThemeMode("black"); 
        }
    };

    const handleScrollSection = (sectionId: string) => {
        console.log(sectionId);
        const section = document.querySelector(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    const CreateSection = () => {
        const sectionId = new Set([
            "#início",
            "#sobre",
            "#habilidades",
            "#projetos",
            "#contato"
        ]);
        const arrayId = Array.from(sectionId);

        return arrayId.map((section, index) => (
            <a
            className={style.textSection} 
            key={index} 
            onClick={() => handleScrollSection(section)}>{section.replace('#', '').charAt(0).toUpperCase() + section.replace('#', '').substring(1)}</a>
        ));
    }

    return (
        <header className={`flex relative 
        ${isActive ? "bg-[#0B111B] text-[#F3F4F6] " : "bg-[#FAFAFA] text-[#111827] border-[#E5E7EB] shadow-lg"}  
        h-20 items-center justify-around border-b-2 
        font-[Manrope] font-bold gap-10`}>
            <h1 className={"select-none"}>Lucas Brasileiro</h1>
            <nav className="flex static gap-6">
                <Suspense>
                    <CreateSection />
                </Suspense>
            </nav>
            <label className={style.switch}>
                <input type="checkbox"
                onClick={handleSwitch}/>
                <span className={style.slider}></span>
            </label>
        </header>
    );
}

