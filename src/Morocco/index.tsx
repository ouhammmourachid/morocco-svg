import React, { useState } from "react";
import paths from './map';

export function Morocco() {
    const [isHovered, setIsHovered] = useState(false);
    // load the paths from the map.json
    

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return(
        <svg width="316" height="285" viewBox="0 0 316 285" fill="none" xmlns="http://www.w3.org/2000/svg">
            {paths.map((path, index) => (
                <path d={path.path} fill={path.fill} />
            ))}
        </svg>
    )
}
