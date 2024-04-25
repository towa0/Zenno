import React from "react";
import clsx from "clsx";

const BackgroundCircles = ({ circles }) => {
  return (
    <div className=" h-full z-[-10] absolute min-h-screen w-auto ">
      {circles.map((circle, index) => (
        <div
          key={index}
          className={clsx(
            "circle-animation",
            "absolute",
            "mix-blend-multiply",
            "filter",
            "blur-3xl",
            "rounded-full",
            circle.color
          )}
          style={{
            top: `${circle.top}`,
            left: `${circle.left}`,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            animationDuration: `${4 + Math.random() * 2}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundCircles;
