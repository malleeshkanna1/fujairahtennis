import SingleBlog from "@/components/Blogs/SingleBlog";
import React from "react";
import EventsMetaData from "../MetaData";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return EventsMetaData[slug];
}

const allowedSlugs = [
  "tennis-and-country-club-fujairah-marks-national-sports-day-in-style",
  "tennis-country-club-fujairahs-squash-championship-gives-juniors-a-major-boost",
  "tennis-and-country-club-fujairah-celebrates-uae-sports-day-with-full-spirit",
  "overcome-tennis-pressure-master-your-game",
  "managing-your-mind-during-challenging-times",
  "growing-our-tennis-program-through-free-trials",
];

const BlogView = async ({ params }) => {
  const { slug } = await params;
  if (!allowedSlugs.includes(slug)) {
    notFound();
  }
  return <SingleBlog slug={slug} />;
};

export default BlogView;
