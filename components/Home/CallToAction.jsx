import React from "react";
import CTAStyles from "./css/CallToAction.module.css";

const CallToAction = () => {
  return (
    <div className={CTAStyles["image-overlay-container"]}>
      <div className={CTAStyles["overlay-content"]}>
        <h6>Our programs</h6>
        <h1>Find the one for you</h1>
        <button className={CTAStyles["learn-btn"]}>JOIN NOW</button>

      </div>
      <img src="https://fujairahtennisclub.com/wp-content/uploads/2024/08/close-up-racket-with-tennis-balls-scaled.jpg" />
    </div>
  );
};

export default CallToAction;
