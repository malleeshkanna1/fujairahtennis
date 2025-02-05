import SingleEvent from "@/components/Events/Single/SingleEvent";
import React from "react";
import EventsMetaData from "../MetaData";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return EventsMetaData[slug];
}

const allowedSlugs = [
  "experience-an-unforgettable-brunch-event-at-tccf-on-november-23-2024",
  "train-with-the-best-at-tennis-country-club-fujairah",
  "experience-an-unforgettable-brunch-event-at-tccf-on-february-23-2018-2",
  "participate-in-the-inaugural-local-tennis-tournament-at-tennis-and-country-club-fujairah",
  "tennis-and-country-club-fujairah-is-delighted-to-announce-our-summer-camp",
  "itf-junior-tennis-championship-at-tennis-country-club-fujairah-a-premier-event"
]

const SingleEventPage = async ({ params }) => {
  const { slug } = await params;
  if (!allowedSlugs.includes(slug)) {
    notFound();
  }
  return <SingleEvent slug={slug} />;
};

export default SingleEventPage;
