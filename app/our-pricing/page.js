import Pricing from '@/components/Pricing/Pricing'
import React from 'react'

export const metadata = {
  title: "Our Pricing - Tennis & Country Club Fujairah",
  description: "Explore the affordable adult tennis membership pricing at Fujairah Tennis and Country Club. Whether you're a seasoned player or a beginner, we offer competitive prices for all levels of play, ensuring that you get the most out of your membership.",
  url: "https://fujairahtennisclub.com/our-pricing/",
  author: "Fujairah Tennis and Country Club",
  openGraph: {
    title: "Our Pricing - Tennis & Country Club Fujairah",
    description: "Explore the affordable adult tennis membership pricing at Fujairah Tennis and Country Club. Join a vibrant community and improve your game with professional coaching and state-of-the-art facilities.",
    url: "https://fujairahtennisclub.com/our-pricing/",
    image: "/images/pricing/pricing-1.jpg", // Replace with an actual image of tennis or the club's facilities
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Pricing - Tennis & Country Club Fujairah",
    description: "Affordable membership pricing for adults at Fujairah Tennis and Country Club. Join today and improve your tennis game in a community of passionate players.",
    image: "/images/pricing/pricing-1.jpg", // Replace with actual image URL
  },
  icons: {
    icon: "/favicon.ico", // Replace with actual favicon
  },
};


const PricingPage = () => {
  
  return (
    <Pricing/>
  )
}

export default PricingPage