"use client";

import React, { useState,useEffect } from "react";
import VideoPlayerStyles from "./css/PlayVideo.module.css";
import { Dialog } from "primereact/dialog";

const PlayVideoContainer = () => {
  const [hover, setHover] = useState(false);
  const [joystickX, setJoystickX] = useState(0);
  const [joystickY, setJoystickY] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = (event) => {
    const container = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - container.left) / container.width - 0.5) * 2;
    const y = ((event.clientY - container.top) / container.height - 0.5) * 2;
    setJoystickX(x * 40);
    setJoystickY(y * 40);
  };

  const handlePlayClick = () => {
    // Add autoplay to the Vimeo URL
    setVideoUrl("https://player.vimeo.com/video/999570209?h=72a26a7fb0&autoplay=1");
    setPopupVisible(true);
  };

  return (
    <div
      className={VideoPlayerStyles["play-video-container"]}
      onMouseMove={ isClient && window.innerWidth > 768 && hover ? handleMouseMove : null}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setJoystickX(0);
        setJoystickY(0);
      }}
    >
      <div
        className={VideoPlayerStyles["joystick-container"]}
        style={{
          transform: `translate(${joystickX}px, ${joystickY}px)`,
          transition: hover ? "none" : "transform 0.3s ease-out",
        }}
      >
        <button
          onClick={handlePlayClick}
          className={VideoPlayerStyles["play-button"]}
        >
          PLAY
        </button>
      </div>
      <Dialog
        visible={popupVisible} dismissableMask
        onHide={() => {
          setPopupVisible(false);
          setVideoUrl(null); // Clear URL to stop video playback
        }}
        className={VideoPlayerStyles["responsive-modal"]}
      >
        <iframe
          title="vimeo-player"
          src={videoUrl}
          width="100%"
          height="100%"  
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </Dialog>
    </div>
  );
};

export default PlayVideoContainer;
