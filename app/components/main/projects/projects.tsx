import Service from "@/app/service/Service";
import { ThemeContext } from "@/app/utils/context";
import { Suspense, use, useContext, useState } from "react";
import arrow from '@/public/icons8-arrow-right-24.png';
import arrowWhite from '@/public/icons8-arrow-right-24-white.png';

type Project = { 
    id: number; 
    name: string 
};
// const ProjectRepository = ({ request }: { request: Promise<Project[]> }) => {
//     const resp = use<Project[]>(request);

//     return resp.map(value => (
//         <a className="border-3 p-5" key={value.id}>{value.name}</a>
//     ));
// }
const ProjectRepository = ({theme}: {theme : string | undefined}) => {
    const [hover, setHover] = useState<number | null>(null);

    const resp = ["E-commece", "Projeto", "Soundboard"];
    const description = ["E-commece completo com front-end e back-end com angular e spring boot.", "portfolio pessoal com next.js, react e tailwind CSS.", "Replica do soundboard do discord com sistema de edição de audio e adicionar imagem."]
    
    return resp.map((name, index) => (
        <li 
        key={index}
        className="flex gap-4 border-1 border-transparent rounded-2xl shadow-xl p-5 h-45 justify-center" 
        style={{backgroundColor: theme?.includes("black") ? "white" : "#171B25"}}
        >
            {/* <img src="" /> */}
            <div className="border-3 border-[#FF3B3B] h-20 w-20"></div>
            <div className="flex relative flex-col w-120 ">
                <h1 className="font-[Inter] text-xl font-bold"
                style={{color: theme}}
                >{name}</h1>
                <p className="font-[Roboto] text-lg">{description[index]}</p>
                <a 
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}
                style={{
                    backgroundColor: hover === index ? "#FF3B3B" : "transparent", 
                    color: hover === index ? "white" : 
                    theme?.includes("black") ? "#FF3B3B" : theme, 
                    borderColor: theme?.includes("black") ? "#FF3B3B" : hover !== index ? "gray" : "transparent"
                }}
                className="flex absolute bottom-[-5px] border-1 font-[Roboto] text-lg w-40 h-12 justify-center items-center gap-3 rounded-xl select-none cursor-pointer">
                    {"Ver projetos"}
                    <img src={
                        theme?.includes("black") && hover !== index ?
                        arrow.src
                        :
                        arrowWhite.src
                        } /> 
                </a>
            </div>
        </li>
    ));
}

function Projects() {
    const color = useContext(ThemeContext);
    const textColor = color?.themeMode;  
    // const service = new Service().getRequest() as unknown as Promise<Project[]>;
    
    return (
        <nav id="projetos" className="flex flex-col relative pl-105 gap-10 h-100">
            <h3 className="flex text-4xl font-[Inter] after:absolute after:border-b-2 after:border-[#FF3B3B] after:w-19 after:h-12"
            style={{color: textColor}}
            >Projetos</h3>
            <ul className="flex flex-row flex-wrap gap-3">
                <Suspense >
                    {/* <ProjectRepository request={service}/> */}
                    <ProjectRepository theme={textColor}/>
                </Suspense>
            </ul>            
        </nav>
    );
}

export default Projects;