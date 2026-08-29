'use client'
import Sobre from "./about/about";
import Projects from "./projects/projects";
import Skills from "./skills/skills";

function Main() {
    return (
        <main className="flex flex-col gap-30 relative top-25">
            <Sobre />
            <Skills />
            <Projects />
        </main>
    );
}

export default Main;