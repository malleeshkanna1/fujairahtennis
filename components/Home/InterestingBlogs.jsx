import React from "react";
import InterestingBlogsStyle from "./css/Interestingblogs.module.css";
import Link from "next/link";

const InterestingBlogs = () => {
  const blogPosts = [
    {
      date: "August 17, 2024",
      title: "Overcome Tennis Pressure: Master Your Game",
      image: "overcome.jpg",
      link: "overcome-tennis-pressure-master-your-game",
    },
    {
      date: "August 17, 2024",
      title: "Managing Your Mind During Challenging Times",
      image: "managing.jpg",
      link: "managing-your-mind-during-challenging-times",
    },
    {
      date: "August 17, 2024",
      title: "Growing Our Tennis Program Through Free Trials",
      image: "growing.jpg",
      link: "growing-our-tennis-program-through-free-trials",
    },
  ];

  return (
    <div className={InterestingBlogsStyle["image-container"]}>
      <img
        src="/images/home/blogs-bg.jpg"
        alt=""
        className={InterestingBlogsStyle["image"]}
      />
      <div className={InterestingBlogsStyle["content-overlay"]}>
        <p className={InterestingBlogsStyle.smallText}>from our blog</p>
        <h1 className={InterestingBlogsStyle["intro-heading"]}>
          Interesting Blogs
        </h1>
        <div className="mt-5">
          <div className="container">
            <div className="row">
              {blogPosts.map((data, i) => (
                <div className="col-md-6 col-lg-4 mt-4 mt-lg-0" key={i}>
                  <Link className="text-decoration-none" href={"/blog/" + data.link}>
                    <div className={InterestingBlogsStyle["card"]}>
                      <div className={InterestingBlogsStyle["content"]}>
                        <span className={InterestingBlogsStyle["blog"]}>
                          BLOG
                        </span>{" "}
                        <span className={InterestingBlogsStyle["date"]}>
                          {" "}
                          &nbsp; • &nbsp; {data.date}
                        </span>
                        <h2>{data.title}</h2>
                      </div>
                      <img
                        src={"/images/blogs/" + data.image}
                        alt={data.title}
                      />
                      <span
                        className={InterestingBlogsStyle["arrow"]}
                      >
                        <i className="bx bx-right-arrow-alt"></i> <span className={InterestingBlogsStyle["read-more-btn"]}> READ MORE</span>
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestingBlogs;
