'use client'
import Image from "next/image";
import { Header } from "./components/header/header";
import Main from "./components/main/main";
import ThemeProvider from "./utils/context";

export default function Home() {
    return (
        <body>
            <ThemeProvider>
                <Header />
                <Main />
            </ThemeProvider>
        </body>
    );
}
