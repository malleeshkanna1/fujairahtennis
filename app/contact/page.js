import Contact from '@/components/Contact/Contact'
import React from 'react'

export const metadata = {
  title: "Contact - Fujairah Tennis & Country Club",
  description: "Have questions? Get in touch with Fujairah Tennis & Country Club. Contact us for membership details, coaching inquiries, and more.",
  url: "https://fujairahtennisclub.com/contact/",
  openGraph: {
    title: "Contact Us - Get in Touch with Fujairah Tennis & Country Club",
    description: "Need more information? Contact Fujairah Tennis & Country Club for membership details, bookings, coaching inquiries, and general assistance.",
    image: "https://fujairahtennisclub.com/images/common/logo.png", // Replace with an actual image related to contact or the club
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Fujairah Tennis & Country Club",
    description: "Have questions? Reach out to us for membership, coaching, or any other inquiries at Fujairah Tennis & Country Club.",
    image: "https://fujairahtennisclub.com/images/common/logo.png", // Replace with actual image URL
  },
  keywords: [
    "Contact Fujairah Tennis Club",
    "Fujairah sports club contact",
    "Tennis club inquiry UAE",
    "Get in touch Fujairah club",
    "Sports club customer service UAE",
  ],
};

const ContactPage = () => {
  return (
    <Contact/>
  )
}

export default ContactPage