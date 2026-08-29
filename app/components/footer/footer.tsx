import { Contact } from "./components/contact";
import { LinkContact } from "./components/linkContact";

function Footer() {
    return (
        <footer id="contato" className="relative h-170 top-10 scroll-m-30">
            <div className="flex justify-center gap-30">
                <Contact />
                <LinkContact />            
            </div>
        </footer>
    );
}

export default Footer;