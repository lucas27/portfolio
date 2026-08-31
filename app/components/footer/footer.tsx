import { Contact } from "./components/contact";
import { LinkContact } from "./components/linkContact";

function Footer() {
    return (
        <footer id="contato" className="flex relative h-170 scroll-m-30 top-110 xl:top-0 left-93 max-w-150">
            <div className="flex justify-center flex-col xl:flex-row gap-0 xl:gap-30">
                <Contact />
                <LinkContact />            
            </div>
        </footer>
    );
}

export default Footer;