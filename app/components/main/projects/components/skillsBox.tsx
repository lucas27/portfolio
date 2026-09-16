import { useEffect } from "react";
import { coordinates } from "./projectRepository";

export function SkillsBox(coordinates: coordinates) {
    // const handlePosition = () => {
    //     // console.log(coordinates.x / 2, coordinates.y / 2)
    //     console.log(coordinates.width)
    //     console.log(((coordinates.x - coordinates.width / 2)))
    // }
    
    // handlePosition()
    return (
        <div className="flex h-50 w-50 bg-red-500 absolute z-2"
        // style={{top: `${coordinates.y - 450}px`, left: (coordinates.width / 2 < coordinates.x) ? `${coordinates.x - 400}px` : `${coordinates.x - 1000}px`}}>
        style={{top: `${coordinates.y - 450}px`, left: `${coordinates.x - 400}px`}}>
            {coordinates.y}
            <br />
            {coordinates.x}
        </div>
    );
}