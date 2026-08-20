import { CodeScreenLineNumber } from './components/codeScreenLineNumber';
import { CodeScreenLineText } from './components/codeScreenLineText';
import { CodeScreenButton } from './components/codeScreenButton';
import { LinksButton } from './components/linkButtons';
import { ThemeContext } from "@/app/utils/context";
import { useContext } from "react";

function about() {
    const color = useContext(ThemeContext);
    const textColor = color?.themeMode;

    return (
        <section className="flex justify-evenly relative top-10">
            <section className="flex flex-col gap-3">
                <h1 className="font-[Manrope] text-3xl font-bold text-[#FF3B3B]">Olá, eu sou <br />
                <strong className={`text-6xl text-[${textColor}]`}>Lucas
                    <span className={`text-[${textColor === "black" ? "#FF3B3B" : textColor}]`}> Brasileiro</span>
                    </strong>
                </h1>
                <h2 className="font-[Manrope] text-2xl ">Desenvolvedor 
                    <span className="text-[#FF3B3B] font-bold"> Back-end & Full Stack</span>
                </h2>
                <p className="font-[Inter] text-lg max-w-128">
                    Graduado em Engenharia da Computação, com pós-graduação em Análise de Sistemas e MBA em Inteligência Artificial.
                    <span className="inline-block pt-4">
                        Desenvolvedor com foco em Java e Spring Boot, experiência prática no desenvolvimento de APIs Rest, autenticação com JWT, modelagem de bancos de dados relacionais, microsserviços e aplicações Full Stack com React e Angular.
                    </span>
                </p>
                <nav className="flex flex-wrap gap-3 max-w-70">
                    <LinksButton />
                </nav>
            </section>
            <aside className={`rounded-xl w-180 h-85 shadow-2xl ${textColor?.includes("black") ? "bg-white" : "bg-[#111827]"} `}>
                <section className="flex flex-col gap-3">
                    <header className="flex h-15 relative items-center justify-between pr-6 pl-6
                    after:border-b-2 after:absolute after:w-[94%] after:h-16 after:border-gray-300
                    ">
                        <CodeScreenButton />
                        <h1 className={`font-semibold text-sm`}>Java · Spring Boot</h1>
                    </header>
                    <main className="flex">
                        <ol className={`flex flex-col gap-[2.5px] pl-6 h-70 flex-wrap`}>
                            <CodeScreenLineNumber />
                            <CodeScreenLineText />
                        </ol>
                    </main>
                    <footer></footer>
                </section>
            </aside>
        </section>
    );
}

export default about;