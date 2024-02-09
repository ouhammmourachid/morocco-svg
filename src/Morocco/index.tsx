import React, { useState } from "react";
import "./Morocco.css"; // Import CSS file with styles

export function Morocco() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return(
        <svg
            width="159"
            height="199"
            viewBox="0 0 159 199"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className={isHovered ? "hovered" : "normal"} // Apply class based on hover state
                d="M121.408 196.842C120.799 199.074 117.957 199.886 118.769 196.233C119.581 192.58 137.645 126.222 144.748 84.6217C151.852 42.8182 158.144 5.68204 150.837 5.68204C143.733 5.68204 123.64 21.5106 91.7752 64.9375C59.9102 108.77 51.1829 129.469 46.3118 129.469C37.5844 129.469 44.0792 106.335 46.3118 78.3309C48.3414 53.5735 53.0095 22.9311 45.297 22.9311C38.5993 22.9311 19.9268 47.6885 10.7935 83.81C2.67502 116.482 1.66021 144.08 6.73425 149.762C10.1846 153.821 7.34314 155.241 4.29871 151.589C-2.19607 143.268 -1.18126 110.8 6.32833 82.3895C14.4468 52.9647 33.1193 18.8725 44.6881 18.8725C57.2717 18.8725 51.3858 64.1258 49.9651 78.3309C48.3414 94.5653 42.2526 125.005 46.5148 125.005C46.9207 125.005 64.3754 92.9419 87.513 62.7053C110.651 32.0629 137.239 0 150.634 0C162.812 0 159.159 32.2658 150.025 84.6217C141.298 135.354 125.467 182.231 121.408 196.842Z"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </svg>
    )
}
