import SingleEvent from '@/components/Events/Single/SingleEvent';
import React from 'react'

const SingleEventPage = async ({params}) => {
    const {slug} = await params;
  return (
   <SingleEvent slug={slug} />
  )
}

export default SingleEventPage