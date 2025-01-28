import Image from "next/image";
import React from "react";
import Homestyle from "./css/Home.module.css";

const Intro = () => {
  return (
    <div className="container-fluid p-3 ">
      <div className="row">
        <div className="col-md-6">
          <div className={Homestyle["image-container"]}>
            <img src={"/images/home/home-intro.png"} alt="Intro Image" />
            <div className={Homestyle["content"]}>
              <h3 className="text-uppercase">
                Our courts make the world's top 10
              </h3>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5 mt-md-0 d-flex align-items-center ">
          <div className={Homestyle["intro-container"]}>
            <p className={Homestyle.smallText}>START NOW</p>
            <h1 className={Homestyle["intro-heading"]}>
              We welcome you to our club
            </h1>
            <p className={Homestyle["intro-passage"]}>
              We’re excited to welcome you to our tennis family! At Tennis &
              country club, we cater to all levels, from beginners to seasoned
              pros. Our club is more than just a place to play—it’s a community
              where you can enhance your skills, make lasting friendships, and
              enjoy the sport you love.
            </p>
            <p className={Homestyle["intro-passage"]}>
              With state-of-the-art facilities, expert coaching, and a range of
              events and activities, we’re here to help you take your game to
              the next level. Come join us on the court, and be part of a
              supportive and energetic environment that celebrates tennis in all
              its forms.
            </p>
            <button className={Homestyle["learn-btn"]}>LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
