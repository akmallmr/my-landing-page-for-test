"use client";

import React, { useEffect, useState } from "react";

interface XYProps {
  x: number;
  y: number;
}

const MouseTracer = () => {
  const [mousePosition, setMousePosition] = useState<XYProps>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-36 h-36">
      <div className="relative w-full h-full bg-black rounded-full flex justify-center items-center">
        <div
          className="absolute left-5 w-12 h-12 bg-white rounded-full shadow-md"
          style={{
            transform: `translate(${
              (mousePosition.x - window.innerWidth / 2) / 25
            }px, ${(mousePosition.y - window.innerHeight / 2) / 15}px)`,
          }}
        ></div>
        <div
          className="absolute right-5 w-12 h-12 bg-white rounded-full shadow-md"
          style={{
            transform: `translate(${
              (mousePosition.x - window.innerWidth / 2) / 25
            }px, ${(mousePosition.y - window.innerHeight / 2) / 15}px)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default MouseTracer;
