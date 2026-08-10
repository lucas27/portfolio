import React, { useReducer, useState } from 'react';
import './header.css';

export function Header() {
    const [isActive, setIsActive] = useState<boolean>(false)
    
    const handleSwitch = () => {
        setIsActive(value => !value);
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
                <li className="flex w-12 text-center">{isActive ? "Escuro" : "Claro"}</li>
                <li>Sobre</li>
                <li>Habilidades</li>
                <li>Projetos</li>
                <li>Contato</li>
            </ul>
        </header>
    );
}

