import Facilities from '@/components/Facilities/Facilities';
import React from 'react'


export const metadata = {
    title: "Our Facilities - Sauna, Jacuzzi & Steam Room | Fujairah Tennis & Country Club",
    description:
      "Explore our top-notch wellness facilities, including a rejuvenating sauna, a relaxing jacuzzi with hydrotherapy benefits, and a serene steam room for ultimate relaxation and recovery.",
    keywords: [
      "sauna",
      "jacuzzi",
      "steam room",
      "wellness",
      "relaxation",
      "hydrotherapy",
      "recovery",
      "spa",
      "health",
      "fitness",
    ],
    openGraph: {
      title: "Our Facilities - Sauna, Jacuzzi & Steam Room",
      description:
        "Experience premium wellness with our sauna, jacuzzi, and steam room, designed for relaxation, hydrotherapy, and rejuvenation.",
      url: "/facilities",
      type: "website",
      images: [
        {
          url: "https://fujairahtennisclub.com/images/facilities-banner.jpg",
          width: 1200,
          height: 630,
          alt: "Sauna, Jacuzzi & Steam Room",
        },
      ],
    },
  };
  

const FacilitiesPage = () => {
  return (
    <Facilities/>
  )
}

export default FacilitiesPage