import { coordinates } from "./projectRepository";
import { skills_projects } from '../description.json'

export function SkillsBox({coordinates, index}: {coordinates : coordinates, index : number}  ) {
    const handleSkills = () => {
        const project = [
            "api_armazenamento",
            "e-commerce",
            "flashCard",
            "portfolio",
            "soundboard"
        ];
        const keyWord = project[index] as keyof typeof skills_projects;
        return skills_projects[keyWord];
    }
    
    return (
        <div className="flex flex-col h-70 w-60 bg-red-500 absolute z-2 text-center rounded-xl font-[Inter] font-semibold"
        style={{top: `${coordinates.y - 1460}px`, left: `${coordinates.x - 400}px`, backgroundColor: "rgba(255, 255, 255, 0.9)",
            fontSize: 13, color: "black"
        }}>
            <h1
            style={{paddingTop: 10}}
            >Tecnológias usadas:</h1>
            {
                handleSkills().tecnologies.map((e, key) => (
                    <p 
                    key={key}
                    >{e}</p>
                ))
            }
            <h2
            style={{paddingTop: 10}}
            >Arquiterura:</h2>
            {
                handleSkills().architecture.map((e, key) => (
                    <p 
                    key={key}
                    >{e}</p>
                ))
            }
        </div>
    );
}