import SingleBlog from '@/components/Blogs/SingleBlog'
import React from 'react'

const BlogView = async ({ params }) => {
  const { slug } = await params;
  return (
    <SingleBlog slug={slug} />
  )
}

export default BlogView