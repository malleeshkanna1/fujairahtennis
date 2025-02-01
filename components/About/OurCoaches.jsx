import React from "react";
import OurCoachesStyles from "./css/OurCoaches.module.css";
import PlayVideoContainer from "../Home/PlayVideo";

const OurCoaches = () => {
  const ourCoachesData = [
    {
      name: "Tharushi Nimnadi",
      role: "Swimming Trainer",
      exp: 10,
      image: "tharushi.png",
    },
    {
      name: "Nimantha Heshan",
      role: "Swimming Trainer",
      exp: 10,
      image: "nimantha-heshan.png",
    },
    {
      name: "Jacques Harmse",
      role: "Squash, Mountain Biking Trainer",
      exp: 11,
      image: "jacques-harmse.png",
    },
    {
      name: "Mr. Atef",
      role: "KICK BOXING Trainer",
      exp: 11,
      image: "atef.png",
    },
    {
      name: "Kul bahadur",
      role: "Swimming Trainer",
      exp: 11,
      image: "kul-bahadur.png",
    },
    {
      name: "July Tabora",
      role: "Tennis Trainer",
      exp: 11,
      image: "july-tabora.png",
    },
  ];
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-center">
        <h1 className={OurCoachesStyles["intro-heading"]}>OUR COACHES</h1>
      </div>
      <div className="container">
        <div className="row">
          {ourCoachesData.map((data, i) => (
            <div className="col-md-6 col-lg-4 mt-3" key={i}>
              <div className={OurCoachesStyles["coach-card"]}>
                <div className="d-flex justify-content-center">
                  <img src={"/images/coaches/" + data.image} alt={data.name} />
                </div>
                <div
                  className={
                    "mt-3 text-center " + OurCoachesStyles["coach-details"]
                  }
                >
                  <h4>{data.name}</h4>
                  <label>{data.role}</label>
                  <span>{data.exp} Years Experience</span>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="mt-4">
                    <button className={OurCoachesStyles["learn-btn"]}>
                      VISIT PROFILE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div className="mt-4">
            <button className={OurCoachesStyles["learn-btn"]}>
              VIEW ALL COACHES
            </button>
          </div>
        </div>
      </div>
      <div className={OurCoachesStyles["spacing"]}></div>
      <PlayVideoContainer/>
    </div>
  );
};

export default OurCoaches;
