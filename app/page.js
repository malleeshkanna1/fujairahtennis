import React from 'react';
import Home from '@/components/Home/Home';

export const metadata = {
  title: "Home Page - Tennis & Country Club Fujairah",
  description: "We're excited to welcome you to our tennis family! At Tennis & Country Club, we cater to all levels, from beginners to seasoned pros. Our club is more than just a place to play—it’s a community where you can enhance your skills, make lasting friendships, and enjoy the sport you love.",
  url: "https://fujairahtennisclub.com/",
  author: "Tennis & Country Club Fujairah",
  openGraph: {
    title: "Home Page - Tennis & Country Club Fujairah",
    description: "We're excited to welcome you to our tennis family! At Tennis & Country Club, we cater to all levels, from beginners to seasoned pros. Our club is more than just a place to play—it’s a community where you can enhance your skills, make lasting friendships, and enjoy the sport you love.",
    url: "https://fujairahtennisclub.com/",
    image: "/images/home/home-intro.png", // Open Graph image
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Page - Tennis & Country Club Fujairah",
    description: "We're excited to welcome you to our tennis family! At Tennis & Country Club, we cater to all levels, from beginners to seasoned pros.",
    image: "/images/home/home-intro.png", // Twitter image
  },
  icons: {
    icon: "favicon.ico"
  },
};


const HomePage = () => {
  return (
    <>
      <Home/>
    </>
  );
}

export default HomePage;