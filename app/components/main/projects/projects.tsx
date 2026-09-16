import Service from "@/app/service/Service";

import { ThemeContext } from "@/app/utils/context";
import { Suspense, useContext, useEffect, useState } from "react";
import { ProjectRepository } from "./components/projectRepository";
import { CacheSession } from "./components/cache";

export type Project = { 
    name: string; 
    clone_url: string; 
};

function Projects() {
    const [projects, setProjects] = useState<Project[]>([]); 
    const color = useContext(ThemeContext);
    const textColor = color?.themeMode; 
    
    useEffect(() => {
        const load = async () => {
            const service = new Service().getRequest() as unknown as Promise<Project[]>;
            const resp = await CacheSession(service);
            setProjects(resp);
        }
        load()

    }, [])

    return (
        <nav id="projetos" className="flex flex-col relative pl-105 gap-10 h-100 scroll-m-30">
            <h3 className="flex text-4xl font-[Inter] after:absolute after:border-b-2 after:border-[#FF3B3B] after:w-19 after:h-12"
            style={{color: textColor}}
            >Projetos</h3>
            <ul className="flex flex-row flex-wrap gap-3 relative">
                <Suspense >
                    <ProjectRepository theme={textColor} resp={projects}/>
                </Suspense>
            </ul>            
        </nav>
    );
}

export default Projects;