'use client'
import Image from "next/image";
import { Header } from "./components/header/header";
import Main from "./components/main/main";
import ThemeProvider from "./utils/context";
import Footer from "./components/footer/footer";

export default function Home() {
    return (
        <body id="início" className="flex flex-col gap-80">
            <ThemeProvider>
                <Header />
                <Main />
                <Footer />
            </ThemeProvider>
        </body>
    );
}
