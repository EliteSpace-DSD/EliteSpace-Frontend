import React from "react";

interface StarProps {
    top: number;
    left: number;
    size: number;
    duration: number;
}

const Star: React.FC<StarProps> = ({ top, left, size, duration }) => {
    return (
        <div
            className="star"
            style={{
                top: top + "px",
                left: left + "px",
                width: size + "px", // Sizes between 0.5px and 3.5px
                height: size + "px", // Sizes between 0.5px and 3.5px
                animationDuration: duration + "s", // Animation duration between 2s and 5s
            }}
        ></div>
    );
};

export default Star;