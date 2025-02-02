import Coaches from '@/components/Coaches/Coaches'
import React from 'react'


export const metadata = {
  title: "Our Coaches - Tennis & Country Club Fujairah",
  description: "Meet our professional coaches at Fujairah Tennis and Country Club. Our experienced trainers are dedicated to helping you improve your skills with expert guidance.",
  url: "https://fujairahtennisclub.com/coaches/",
  author: "Fujairah Tennis and Country Club",
  openGraph: {
    title: "Our Coaches - Tennis & Country Club Fujairah",
    description: "Get to know our skilled coaches, including Tharushi Nimnadi, a certified swimming instructor with national and international accolades.",
    url: "https://fujairahtennisclub.com/coaches/",
    image: "/images/coaches/icon1.jpg", // Replace with an actual image of the coach or relevant content
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Coaches - Tennis & Country Club Fujairah",
    description: "Meet Tharushi Nimnadi, our expert swimming trainer. Certified in life-saving courses and a national-level competitor with years of experience.",
    image: "/images/coaches/icon1.jpg", // Replace with actual image URL
  },
  icons: {
    icon: "/favicon.ico", // Replace with actual favicon
  },
};

const CoachesPage = () => {
  return (
    <Coaches/>
  )
}

export default CoachesPage