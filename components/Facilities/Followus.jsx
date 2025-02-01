import React from "react";
import FollowupsStyles from "./css/Followups.module.css";

const Followus = () => {
  return (
    <div className={FollowupsStyles["join-club-container"]}>
      <div className={FollowupsStyles["overlay"]}></div>
      <div className={FollowupsStyles["content"]}>
        <p>amazing tournament highlights</p>
        <h3>Follow us and be the first winner</h3>
        <a href="#" className={FollowupsStyles["join-button"]}>
          JOIN OUR CLUB
        </a>
      </div>
    </div>
  );
};

export default Followus;
