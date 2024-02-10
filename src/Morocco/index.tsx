import React, { useState } from "react";
// import paths from './map';

export function Morocco() {
    const [isHovered, setIsHovered] = useState(false);
    // load the paths from the map.json
    const paths = [
        {
            "name": "pole_1",
            "d": "M97.5 55C124.3 102.6 152.667 82.8333 163.5 67L157.5 33.5L97.5 55Z",
            "fill": "#CE1DB2"
        },
        {
            "name": "pole_2",
            "d": "M96.5 216L105 153L232.719 182.094L249 216L234.5 233.5L96.5 216Z",
            "fill": "#2B299B"
        }
    ];

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return(
        <svg width="316" height="285" viewBox="0 0 316 285" fill="none" xmlns="http://www.w3.org/2000/svg">
            {paths.map((path, index) => (
                <path d={path.d} fill={path.fill} />
            ))}
        </svg>
    )
}
