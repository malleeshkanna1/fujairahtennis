import Blogsdata from "./BlogsData";
import Link from "next/link";
import SingleBlogStyles from "./css/SingleBlogs.module.css";
import commonStyles from "../services/css/CommonStyle.module.css";
import Image from "next/image";

const BlogsList = ({ search }) => {
  // Convert object to array
  const blogPosts = Object.entries(Blogsdata).map(([slug, item]) => ({
    bgImage: item.bgImage,
    blogtitle: item.blogtitle,
    date: item.date,
    comments: item.comments,
    tag: item.tag,
    slug: slug,
  }));

  // Filter blog posts if search query exists
  const filteredPosts = search
    ? blogPosts.filter((post) =>
        post.blogtitle.toLowerCase().includes(search.toLowerCase())
      )
    : blogPosts;

  return (
    <div className="container">
      <div className="mt-5 mb-5">
        <div className="row">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((data, i) => (
              <div className="col-md-4 d-flex mt-5 align-items-stretch" key={i}>
                <Link
                  href={`/blog/${data.slug}`}
                  className="text-decoration-none"
                >
                  <div className={SingleBlogStyles["imageContainer"]}>
                    <img
                      className={SingleBlogStyles["imageThumbnail"]}
                      src={`/images/blogs/${data.bgImage}`}
                      alt={data.blogtitle}
                    />
                  </div>

                  <div className="mt-2">
                    <small className={commonStyles["tagText"]}>{data.tag}</small>
                    <div className="mt-3"></div>
                    <h3 className={commonStyles["sub-heading"]}>
                      {data.blogtitle}
                    </h3>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-12 text-center mt-5">
              <div className="d-flex justify-content-center mb-3" >
                <img 
               
                 src="/images/blogs/notfound.gif"
                 className="img-fluid"
                 alt=""
                />
              </div>
              <h4 className={commonStyles["heading"]}>No blogs found</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogsList;
