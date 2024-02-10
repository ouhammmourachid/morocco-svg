import React, { useState } from "react";
import paths from './map';

export function Morocco() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return(
        <svg width="541" height="541" viewBox="0 0 541 541" fill="none" xmlns="http://www.w3.org/2000/svg">
            {paths.map((path, index) =>{
                return(path.fill && (
                    <path
                        key={index}
                        d={path.d}
                        fill={isHovered ? "#FF0000" : "#000000"}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />)
                )
            }
            )}
        </svg>
    )
}
