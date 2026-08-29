import { ThemeContext } from "@/app/utils/context";
import { Suspense, useContext } from "react";
import { ContactAddress } from "./contactAddress";

export function Contact() {
    const color = useContext(ThemeContext);
    const textColor = color?.themeMode;
    
    return (
        <section className="flex flex-col gap-5 p-12 rounded-2xl"
        // style={{backgroundColor: textColor?.includes("black") ? "white" : "rgb(11, 17, 27)"}}
        >
            <h1
            className="flex relative text-4xl font-[Inter] after:absolute after:w-22 after:border-b-3 after:h-12 after:border-[#FF3B3B]"
            style={{color: textColor}}
            >
                Contato
            </h1>
            <h2 className="text-5xl"
            style={{color: textColor}}
            >
                Vamos conversar?
            </h2>
            <p className="font-[Reboto] text-lg w-80">
                Estou sempre aberto a novas oportunidades, projetos e parcerias. 
                <br />
                <span>
                    Entre em contato comigo!
                </span>
            </p>
            <ul className="flex flex-col gap-3">
                <Suspense>
                    <ContactAddress textColor={textColor} />
                </Suspense>
            </ul>
        </section>
    );
}