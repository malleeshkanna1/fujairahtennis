import React from "react";
import SideBarStyles from "../services/css/ContactUsStyles.module.css";
import SingleBlogStyles from './css/SingleBlogs.module.css';

const SideNav = () => {
  return (
    <div className={SideBarStyles["contact-container"]}>
      <div className="p-4">
        <h3>SEARCH</h3>
        <div className={SingleBlogStyles["input-container"]}>
          <i className={`bx bx-search ${SingleBlogStyles["search-icon"]}`}></i>
          <input
            type="text"
            className={SingleBlogStyles["search-txtbox"]}
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
