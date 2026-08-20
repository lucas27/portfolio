import Service from "@/app/service/Service";
import { Suspense, use } from "react";

type Project = { 
    id: number; 
    name: string 
};

const ProjectRepository = ({ request }: { request: Promise<Project[]> }) => {
    const resp = use<Project[]>(request);

    return resp.map(value => (
        <a className="border-3 p-5" key={value.id}>{value.name}</a>
    ));
}
function Projects() {
    // const service = new Service().getRequest() as unknown as Promise<Project[]>;
    
    return (
        <nav className="flex flex-col items-center" id="projetos">
            <h3 className="text-2xl font-[Roboto]">Projetos</h3>
            <div className="flex flex-row flex-wrap gap-3">
                <Suspense fallback={<div>ola mundo</div>}>
                    {/* <ProjectRepository request={service}/> */}
                </Suspense>
            </div>            
        </nav>
    );
}

export default Projects;