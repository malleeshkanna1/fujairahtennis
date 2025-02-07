import React from "react";
import SideBarStyles from "../services/css/ContactUsStyles.module.css";
import SingleBlogStyles from "./css/SingleBlogs.module.css";
import commonStyles from "../services/css/CommonStyle.module.css";
import Link from "next/link";

const SideNav = ({ blogs }) => {
  return (
    <div className={SideBarStyles["contact-container"]}>
      <div>
        <h3>SEARCH</h3>
        <div className={SingleBlogStyles["input-container"]}>
          <i className={`bx bx-search ${SingleBlogStyles["search-icon"]}`}></i>
          <input
            type="text"
            className={SingleBlogStyles["search-txtbox"]}
            placeholder="Search..."
          />
        </div>
        <div className="mt-3">
          {blogs.map((data, i) => (
            <div key={i} className="mt-4">
              <span className={commonStyles["tagText"]}>{data.tag}</span>
              <small className={commonStyles["date-text"]}>
                {" "}
                &nbsp;&nbsp; • &nbsp;&nbsp;{data.date}
              </small>
              <div>
              <Link href={`/blog/${data.slug}`} className={`text-decoration-none ${commonStyles["sub-heading"]} ${commonStyles['font-20']} `}>{data.blogtitle}</Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
