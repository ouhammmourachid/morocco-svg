import React, { useState } from "react";
import paths from './map';

export function Morocco() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index: any) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return(
        <svg width="541" height="541" viewBox="0 0 541 541" fill="none" xmlns="http://www.w3.org/2000/svg">
            {paths.map((path, index) =>{
                return(path.fill && (
                    <path
                        key={index}
                        d={path.d}
                        fill={hoveredIndex === index ? "#FF0000" : path.fill}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        stroke="white"
                        strokeWidth="1.01438"
                        stroke-linejoin="round"
                    />)
                );
            })}
        </svg>
    )
}