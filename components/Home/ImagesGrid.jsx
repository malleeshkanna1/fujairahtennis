'use client';

import React from "react";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/rows.css";

const ImagesGrid = () => {
  const photos = [
    {
      src: "/images/gallery/close-up-racket-with-tennis-balls.jpg",
      width: 320,
      height: 174,
    },
    {
      src: "/images/gallery/paddle-tennis-backhand.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "/images/gallery/tennis.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "/images/gallery/biceps-workout.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "/images/gallery/swimming.jpg",
      width: 320,
      height: 212,
    },
  ];

  return (
    <div className="mt-5">
      <PhotoAlbum
        photos={photos}
        layout="rows" // Use "rows", "columns", or "masonry" layouts
        spacing={3} // Adjust spacing between images
      />
    </div>
  );
};

export default ImagesGrid;
