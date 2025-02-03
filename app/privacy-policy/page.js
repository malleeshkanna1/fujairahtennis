import PrivacyPolicy from '@/components/Policies/PrivacyPolicy'
import React from 'react'

export const metadata =  {
  title: "Privacy Policy - Tennis & Country Club Fujairah",
  description: "Read the privacy policy of Fujairah Tennis & Country Club. Learn how we collect, use, and protect your personal information when you visit our website or use our services.",
  url: "https://fujairahtennisclub.com/privacy-policy/",
  openGraph: {
    title: "Privacy Policy - Tennis & Country Club Fujairah",
    description: "Our privacy policy outlines how we handle your personal information. Learn more about the measures we take to protect your data at Fujairah Tennis & Country Club.",
    image: "https://fujairahtennisclub.com/images/common/logo.png", // Replace with an actual image related to privacy or data security
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Fujairah Tennis & Country Club",
    description: "Understand how Fujairah Tennis & Country Club protects your personal information. Read our privacy policy to know more about data protection practices.",
    image: "https://fujairahtennisclub.com/images/common/logo.png", // Replace with actual image URL
  },
  keywords: [
    "Privacy policy Fujairah Tennis Club",
    "Data protection UAE",
    "Fujairah club privacy",
    "Privacy terms Tennis & Country Club",
    "Personal data policy UAE",
    "Website privacy policy UAE",
  ],
}


const PrivacyPolicyPage = () => {
  return (
    <PrivacyPolicy/>
  )
}

export default PrivacyPolicyPage