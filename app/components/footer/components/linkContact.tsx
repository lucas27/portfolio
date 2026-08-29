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
            </div>
        </section>
    );
}