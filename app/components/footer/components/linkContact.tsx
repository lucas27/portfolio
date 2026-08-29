import messageWhiteIcon from '@/public/icons8-message-white-24.png';
import messageBlackIcon from '@/public/icons8-message-black-24.png';

import { ThemeContext } from "@/app/utils/context";
import { Suspense, useContext } from "react";
import { RedirectLink } from "./redirectLink";

export function LinkContact() {
    const color = useContext(ThemeContext);
    const textColor = color?.themeMode;

    return (
        <section className="flex flex-col p-12 rounded-2xl"
        // style={{backgroundColor: textColor?.includes("black") ? "transparent" : "rgb(11, 17, 27)"}}
        >
            <div className="relative top-15">
                <h1 
                className="text-3xl font-bold font-[Inter]"
                style={{color: textColor}}
                >
                    Outras formas de contato
                </h1>
                <p
                className="text-lg font-[Reboto]"
                >Escolha a melhor forma para entrar em contato ou acompanhar meu trabalho.</p>
                <ul className="flex gap-10 relative top-8">
                    <Suspense>
                        <RedirectLink textColor={textColor} />
                    </Suspense>
                </ul>
                <div className="flex relative top-20 p-3 rounded-lg gap-4"
                style={{backgroundColor: textColor?.includes("black") ? "white" : "#171b25"}}
                >
                    <img src={textColor?.includes("black") ? messageBlackIcon.src : messageWhiteIcon.src} />
                    <p className="flex gap-1 font-[Reboto] font-bold">
                        Aberto a oportunidades 
                        <span className="text-red-500">
                            Full Stack, Back-end
                        </span> 
                        e projetos desafiadores.
                    </p>
                </div>
            </div>
        </section>
    );
}