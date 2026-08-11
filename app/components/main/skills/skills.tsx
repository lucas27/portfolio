'use client'
import style from './skills.module.css'
function Skills() {
    return (
        <nav className="flex flex-col items-center text-center gap-5">
            <h2 className="text-2xl font-[Roboto]">Habilidades & Tecnologias</h2>
            <fieldset className="flex gap-3 flex-wrap w-220">
                <a className={style.skillLink} href="https://www.w3schools.com/java/java_getstarted.asp">Java</a>
                <a className={style.skillLink} href="https://spring.io">Spring Boot</a>
                <a className={style.skillLink} href="https://www.typescriptlang.org">Typescript</a>
                <a className={style.skillLink} href="https://angular.dev/overview">AngularJs</a>
                <a className={style.skillLink} href="https://react.dev/learn">ReactJs</a>
                <a className={style.skillLink} href="https://nextjs.org/docs/app/getting-started">NextJs</a>
                <a className={style.skillLink} href="https://tailwindcss.com">Tailwindcss</a>
            </fieldset>
        </nav>
    );
}

export default Skills;