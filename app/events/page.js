import List from '@/components/Events/List/List'
import React from 'react'

export const metadata = {
    title: "Upcoming Events - Tennis & Country Club Fujairah",
    description:
      "Stay updated with the latest events happening at Tennis & Country Club Fujairah. From brunches to tournaments, find all upcoming events here!",
    url: "https://fujairahtennisclub.com/events",
    openGraph: {
      title: "Upcoming Events at Tennis & Country Club Fujairah",
      description:
        "Discover all the exciting events happening at Tennis & Country Club Fujairah. Join us for tournaments, social gatherings, and special events!",
      image: "https://fujairahtennisclub.com/images/common/logo.png",
    },
    twitter: {
      card: "summary_large_image",
      title: "Upcoming Events - Tennis & Country Club Fujairah",
      description:
        "Explore upcoming events at Tennis & Country Club Fujairah. Don't miss out on exciting activities and gatherings!",
      image: "https://fujairahtennisclub.com/images/common/logo.png",
    },
    keywords: [
      "Events Fujairah",
      "TCCF events",
      "Tennis & Country Club Fujairah schedule",
      "Sports events UAE",
      "Social gatherings Fujairah",
    ],
 
};


const EventsListPage = () => {
  return (
    <List/>
  )
}

export default EventsListPage