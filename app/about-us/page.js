import About from '@/components/About/About'
import React from 'react'

export const metadata = {
  title: "About Us - Tennis & Country Club Fujairah",
  description: "Our courts make the world's top 10. Start now. Train with the Best at Tennis & Country Club Fujairah. The Tennis & Country Club Fujairah is a premier destination for tennis enthusiasts in the region, offering a blend of top-notch facilities, professional coaching, and a vibrant community atmosphere.",
  url: "https://fujairahtennisclub.com/about-us/",
  author: "Tennis & Country Club Fujairah",
  openGraph: {
    title: "About Us - Tennis & Country Club Fujairah",
    description: "Our courts make the world's top 10. Start now. Train with the Best at Tennis & Country Club Fujairah.",
    url: "https://fujairahtennisclub.com/about-us/",
    image: "/images/aboutus/aboutus-intro.jpg", // Add your Open Graph image URL here
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Tennis & Country Club Fujairah",
    description: "Our courts make the world's top 10. Start now. Train with the Best at Tennis & Country Club Fujairah.",
    image: "/images/aboutus/aboutus-intro.jpg", // Add your Twitter image URL here
  },
  icons: {
    icon: "/favicon.ico"
  },
};


const AboutPage = () => {
  return (
    <About/>
  )
}

export default AboutPage