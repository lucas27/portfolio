import emailIcon from '@/public/mail_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import linkedinIcon from '@/public/icons8-linkedin-white.svg';
import githubIcon from '@/public/icons8-github-white.svg';
import locationIcon from '@/public/icons8-location-24.png';

export function ContactAddress({textColor} : {textColor : string | undefined}) {
    const textLink = ["E-mail", "Linkedin", "Github", "localização"];
    
    const links = ["lucasBrasileiro671@gmail.com", "linkedin.com/in/lucas-fernandes-brasileiro/", "github.com/lucas27", "Belém/PA, Brasil."];

    const icons = [
        emailIcon.src, linkedinIcon.src, githubIcon.src, locationIcon.src 
    ]

    return textLink.map((text, index) => (
        <li key={index}>
            <div className="flex items-center gap-2">
                <img
                className="p-2 rounded-4xl select-none" 
                style={{backgroundColor: "red"}}
                src={icons[index]} />
                <div className="flex flex-col ">
                    <h1
                    className="font-bold"
                    style={{color: textColor}}
                    >
                        {text}
                    </h1>
                    <h2 className="text-sm font-semibold">
                        {links[index]}
                    </h2>
                </div>
            </div>
        </li>
    ));
};
