import ServicesLayout from '@/components/services/ServicesLayout';
import { notFound } from 'next/navigation';
import React from 'react'

import serviceMetadata from '../serviceMetadata';

export async function generateMetadata({params}){
  const {slug} = await params;
  return serviceMetadata[slug];
}

const allowedSlugs = [
  "tennis-coaching",
  "swimming-coaching",
  "paddle-coaching",
  "gym-training",
  "summer-camp",
  "gymnastic-class",
  "kickboxing-class",
  "personal-training",
  "ballet-classes",
  "squash-lessons",
  "restaurant",
  "sauna",
  "jacuzzi",
  "steam-room"
];

const ServicesPage = async ({ params }) => {
  const {slug} = await params;
  if (!allowedSlugs.includes(slug)) {
    notFound(); 
  }
  return <ServicesLayout slug={slug} />;
};


export default ServicesPage