import { Contact } from "./components/contact";
import { LinkContact } from "./components/linkContact";

function Footer() {
    return (
        <footer id="contato" className="relative border-t-3 h-150 top-10">
            <div className="flex justify-center gap-30">
                <Contact />
                <LinkContact />            
            </div>
        </footer>
    );
}

export default Footer;