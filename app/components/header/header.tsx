import { useState } from 'react';
import './header.css';

export function Header() {
    const [isActive, setIsActive] = useState<boolean>(false)
    
    const handleSwitch = () => {
        setIsActive(value => !value);
        if(!isActive) {
            document.body.style.backgroundColor = "black";    
            document.body.style.color = "white";    
        }else {
            document.body.style.backgroundColor = "white";    
            document.body.style.color = "black";    
        }
    };

    return (
        <header className="relative bg-red-500 h-20 content-center border-b-2 border-black">
            <ul className="flex static justify-center gap-3">
                <li>
                    <label className="switch">
                        <input type="checkbox"
                        onClick={handleSwitch}/>
                        <span className="slider"></span>
                    </label>
                </li>
                <li className="flex w-12 justify-center">{isActive ? "Escuro" : "Claro"}</li>
                <li><a href="#sobre">Sobre</a></li>
                <li>Habilidades</li>
                <li>Projetos</li>
                <li>Contato</li>
            </ul>
        </header>
    );
}

