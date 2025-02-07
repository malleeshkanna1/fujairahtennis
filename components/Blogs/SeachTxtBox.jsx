"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SingleBlogStyles from "./css/SingleBlogs.module.css";

const SearchTxtBox = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const router = useRouter(); // Use useRouter instead of redirect

  function handleSearch() {
    if (searchKeyword.trim() !== "") {
      router.push(`/blog?search=${encodeURIComponent(searchKeyword)}`);
    }
  }

  return (
    <div className={SingleBlogStyles["input-container"]}>
      <i className={`bx bx-search ${SingleBlogStyles["search-icon"]}`} onClick={handleSearch}></i>
      <input
        type="text"
        className={SingleBlogStyles["search-txtbox"]}
        placeholder="Search..."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
    </div>
  );
};

export default SearchTxtBox;
