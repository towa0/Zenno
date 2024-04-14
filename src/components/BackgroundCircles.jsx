import React from "react";
import clsx from "clsx";

const BackgroundCircles = ({ circles }) => {
  return (
    <div className=" h-full z-[-10] absolute min-h-screen w-auto ">
      {circles.map((circle, index) => (
        <div
          key={index}
          className={clsx(
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
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundCircles;
