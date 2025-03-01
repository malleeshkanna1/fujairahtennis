'use client'
import React, { useState,useEffect } from "react";
import StartMatchStyle from "./css/StartMatch.module.css";

const StartYourMatch = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [isDesktop, setIsDesktop] = useState(true);

  // Check if the screen size is larger than tablet size
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Update state if larger than 768px
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Initial check for screen size
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };

  return (
    <div className="" onMouseMove={isDesktop ?handleMouseMove:null}>
      <div className={StartMatchStyle["start-match-container"]}>
        <h2 className={StartMatchStyle["start-text"]}>Start Your</h2>
        <img
          src="/images/home/ball.png"
          className={StartMatchStyle["ball-image"]}
          style={{
            position: "absolute",
            transform: `translate(${position.x * 0.02}px, ${position.y * 0.02}px)`,
          }}
          alt="Ball"
        />
        <h2 className={StartMatchStyle["own-text"]}>Own Match</h2>
      </div>
    </div>
  );
};

export default StartYourMatch;
