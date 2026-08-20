export function CodeScreenLineNumber() {
    const lines = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
 
    return lines.map((number, index) => (
        <li className="text-[gray] font-normal pt-[1.8px]" key={index}>
            {number}
        </li>    
    ));
}