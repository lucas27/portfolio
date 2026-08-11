'use client'
import Image from "next/image";
import { Header } from "./components/header/header";
import Main from "./components/main/main";

export default function Home() {
    return (
        <body>
            <Header />
            <Main />
        </body>
    );
}
