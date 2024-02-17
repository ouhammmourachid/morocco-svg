import React, { useState } from "react";
import paths from './map';

export function Morocco() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [tooltip, setTooltip] = useState<{x: number, y: number, name: string} | null>(null);
    const [zoomLevel, setZoomLevel] = useState<number>(1);
    
    const handleMouseEnter = (index: number, event: React.MouseEvent<SVGPathElement>, name: string) => {
        setHoveredIndex(index);
        setTooltip({x: event.clientX, y: event.clientY, name: name});
    };

    const handleMouseMove = (event: React.MouseEvent<SVGPathElement>) => {
        if (tooltip) {
            setTooltip({x: event.clientX, y: event.clientY, name: tooltip.name});
        }
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setTooltip(null);
    };

    const handleZoomIn = () => {
        setZoomLevel(zoomLevel + 0.1);
    };

    const handleZoomOut = () => {
        setZoomLevel(zoomLevel - 0.1);
    };

    return(
        <div>
            <button onClick={handleZoomIn}>+</button>
            <button onClick={handleZoomOut}>-</button>
            <svg
                width={541 * zoomLevel}
                height={541 * zoomLevel}
                viewBox={`0 0 ${541 * zoomLevel} ${541 * zoomLevel}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {paths.map((path, index) =>{
                    return(path.fill && (
                        <path
                            key={index}
                            d={path.d}
                            fill={hoveredIndex === index ? "#FF0000" : path.fill}
                            onMouseEnter={(event) => handleMouseEnter(index, event, path.name)}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            stroke="white"
                            transform={`scale(${zoomLevel})`}
                        />)
                    );
                })}
            </svg>
            {tooltip && (
                <div style={
                    {
                        position: 'absolute', 
                        top: tooltip.y-15, 
                        left: tooltip.x-20,
                        backgroundColor: 'purple',
                        color: 'white',
                        fontSize: '12px'
                    }
                }>
                    {tooltip.name}
                </div>
            )}
        </div>
    )
}
