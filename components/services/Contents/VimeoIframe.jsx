"use client";

import React, { useState } from "react";
import VimeoStyles from '../css/VimeoStyle.module.css';
import Image from "next/image";

const VimeoIframe = ({vimeoUrl,image}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="mb-5 mt-5 position-relative">
      {!isPlaying ? (
        <div className={VimeoStyles["video-thumbnail"]} onClick={handlePlay}>
          <Image layout="responsive" width={16} height={9}
            src={image}
            className="img-fluid w-100"
            alt="Video Thumbnail"
          />
          <div className={VimeoStyles["play-button"]}>
            <i className="bx bx-play"></i>
          </div>
        </div>
      ) : (
        <div className={VimeoStyles["video-wrapper"]}>
          <iframe
            title="vimeo-player"
            src={vimeoUrl}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VimeoIframe;
