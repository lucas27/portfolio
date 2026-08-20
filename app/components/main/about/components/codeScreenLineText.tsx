import styleModule from '../about.module.css'

export function CodeScreenLineText() {
     // Eu sei que não é legal dessa forma, mas de forma dinamica não deu muito bem. 
        return (
            <li className={`${styleModule.codeText}`}>
                <p className="leading-7">
                        <span style={{color: "#FF3038"}}>public class</span>
                        {" Developer {"}
                        <br /> 
                        <span style={{color:"#FF3038", paddingLeft: "28px"}}>private </span>
                        <span style={{color: "#ff89f3"}}> String </span>
                        foco =
                        <span style={{color: "#50c878"}}> "Resolver problemas" </span>;
                        <br />
                        <span style={{color:"#FF3038", paddingLeft: "28px"}}>private </span>
                        <span style={{color: "#ff89f3"}}>String</span>[ ]
                        {" stack = {"}
                        <span style={{color: "#50c878"}}> "java", "Spring Boot", "NextJs", "React", "Angular"</span>
                        {" };"}
                        <br />
                        <br />
                        <span style={{color: "#FF3038", paddingLeft: "28px"}}>public boolean </span>
                        <span>aprenderTodosOsDias</span>() {"{"}
                        <br />
                        <span style={{color: "#FF3038", paddingLeft: "3.4rem"}}>return </span> 
                        <span style={{color: "#8989ff"}}>true</span>;
                        <br />
                        <span style={{paddingLeft:"28px"}}>{"}"}</span>
                        <br />
                        <span style={{paddingLeft:"1px"}}>{"}"}</span>
                </p>
            </li>
        )      
}