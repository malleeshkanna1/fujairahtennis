import React from "react";
import SingleBlogStyles from "./css/SingleBlogs.module.css";
import TransparentNav from "../Static/TransparentNav";
import OvercomeTennisPressure from "./Contents/OvercomeTennisPressure";
import SideNav from "./SideNav";
import LeaveComment from "../Home/LeaveComment";
import CopyToClip from "./CopyToClip";
import Link from "next/link";
import ManagingMind from "./Contents/ManagingMind";
import GrowingOurTennis from "./Contents/GrowingOurTennis";
import SquashChampJunior from "./Contents/SquashChampJunior";
import UaeSportsDay from "./Contents/UaeSportsDay";
import NationalSportsDay from "./Contents/NationalSportsDay";

const SingleBlog = ({ slug }) => {
  const blogsData = {
    "tennis-and-country-club-fujairah-marks-national-sports-day-in-style":
      {
        bgImage: "FTCC-Tennis-winners.jpg",
        blogtitle:
          "Tennis and Country Club Fujairah marks National Sports Day in style",
        date: "March 4, 2022",
        comments: 0,
        tag: "NEWS",
        component: <NationalSportsDay />,
      },
    "tennis-country-club-fujairahs-squash-championship-gives-juniors-a-major-boost":
      {
        bgImage: "FTCC-2.jpg",
        blogtitle:
          "Tennis & Country Club Fujairah’s Squash Championship gives juniors a major boost",
        date: "January 18, 2023",
        comments: 0,
        tag: "NEWS",
        component: <SquashChampJunior />,
      },
    "tennis-and-country-club-fujairah-celebrates-uae-sports-day-with-full-spirit":
      {
        bgImage: "UAE-Sports-Day-2024.jpg",
        blogtitle:
          "Tennis and Country Club Fujairah celebrates UAE Sports Day with full spirit",
        date: "March 9, 2024",
        comments: 0,
        tag: "NEWS",
        component: <UaeSportsDay />,
      },
    "overcome-tennis-pressure-master-your-game": {
      bgImage: "overcome.jpg",
      blogtitle: "Overcome Tennis Pressure: Master Your Game",
      date: "August 17, 2024",
      comments: 0,
      tag: "BLOG",
      component: <OvercomeTennisPressure />,
    },
    "managing-your-mind-during-challenging-times": {
      bgImage: "managing.jpg",
      blogtitle: "Managing Your Mind During Challenging Times",
      date: "August 17, 2024",
      comments: 0,
      tag: "BLOG",
      component: <ManagingMind />,
    },
    "growing-our-tennis-program-through-free-trials": {
      bgImage: "growing.jpg",
      blogtitle: "Growing Our Tennis Program Through Free Trials",
      date: "August 17, 2024",
      comments: 0,
      tag: "BLOG",
      component: <GrowingOurTennis />,
    },
  };

  // Extract all blog slugs into an array
  const blogSlugs = Object.keys(blogsData);

  // Find the index of the current slug
  const currentIndex = blogSlugs.indexOf(slug);

  // Determine previous and next slugs
  const prevSlug = currentIndex > 0 ? blogSlugs[currentIndex - 1] : null;
  const nextSlug =
    currentIndex < blogSlugs.length - 1 ? blogSlugs[currentIndex + 1] : null;

  const currentData = blogsData[slug];

  const shareText = currentData.blogtitle;
  const shareUrl = encodeURIComponent(
    `https://fujairahtennisclub.com/${slug}/`
  );

  const nrmLink = `https://fujairahtennisclub.com/${slug}/`;

  const emailRecipient = "test@fwe.com";

  // Twitter Share Link
  const twitterShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText
  )}&url=${shareUrl}`;

  // Facebook Share Link
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;

  // Email Share Link
  const emailShare = `mailto:${emailRecipient}?subject=${encodeURIComponent(
    shareText
  )}&body=${shareUrl}`;

  return (
    <div className={SingleBlogStyles["bgCOlor"]}>
      <TransparentNav />
      <div
        style={{ backgroundImage: `url(/images/blogs/${currentData.bgImage})` }}
        className={SingleBlogStyles["BlogImageWithCaptions"]}
      >
        <div className={SingleBlogStyles.overlay}></div> {/* Overlay div */}
        <div className="pb-3 pb-md-5 d-flex justify-content-center ">
          <div className={SingleBlogStyles["visible-content"]}>
            <div>
              <span className="badge bg-primary mb-3">{currentData.tag}</span>
              <h1 className={`${SingleBlogStyles.blogTitle}`}>
                {currentData.blogtitle}
              </h1>
              <small className={SingleBlogStyles["text-muted"]}>
                {" "}
                {currentData.date} &nbsp; • &nbsp; {currentData.comments}{" "}
                Comments{" "}
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className={SingleBlogStyles["spacer"]}>
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-8">
              {currentData.component}
              <hr />
              <div className="d-flex justify-content-end gap-2">
                <a
                  href={twitterShare}
                  target="_blank"
                  className=" rounded-circle text-white"
                  style={{ backgroundColor: "#1DA1F2", padding: "7px 11px" }}
                >
                  <i className="bx bx-x"></i>
                </a>
                <a
                  href={facebookShare}
                  target="_blank"
                  className="rounded-circle text-white"
                  style={{ backgroundColor: "#1877F2", padding: "7px 11px" }}
                >
                  <i className="bx bxl-facebook"></i>
                </a>
                <a
                  href={emailShare}
                  target="_blank"
                  className="rounded-circle text-white"
                  style={{ backgroundColor: "#EA4335", padding: "7px 11px" }}
                >
                  <i className="bx bx-envelope"></i>
                </a>
                <CopyToClip link={nrmLink} />
              </div>
              <hr />
              <div className="mt-5">
                <div className="d-flex justify-content-between">
                  {prevSlug ? (
                    <Link
                      className={SingleBlogStyles["link"]}
                      href={`/blog/${prevSlug}`}
                    >
                      <i className="bx bx-left-arrow-alt"></i> Prev
                    </Link>
                  ) : (
                    <span></span>
                  )}
                  {nextSlug ? (
                    <Link
                      className={SingleBlogStyles["link"]}
                      href={`/blog/${nextSlug}`}
                    >
                      Next <i className="bx bx-right-arrow-alt"></i>
                    </Link>
                  ) : (
                    <span></span>
                  )}
                </div>
              </div>
              <LeaveComment page={"blog"} link={slug} row={12} />
            </div>
            <div className="col-lg-4">
              <SideNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
