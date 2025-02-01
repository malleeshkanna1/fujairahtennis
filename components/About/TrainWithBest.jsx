import Image from "next/image";
import React from "react";
import TrainWithBestStyles from "./css/TrainWithBest.module.css";

const TrainWithBest = () => {
  return (
    <div className="container-fluid p-3 ">
      <div className="row">
        <div className="col-md-6">
          <div className={TrainWithBestStyles["image-container"]}>
            <img src={"/images/aboutus/aboutus-intro.jpg"} alt="Intro Image" />
            <div className={TrainWithBestStyles["content"]}>
              <h3 className="text-uppercase">
                Our courts make the world's top 10
              </h3>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5 mt-md-0 d-flex align-items-center ">
          <div className={TrainWithBestStyles["intro-container"]}>
            <p className={TrainWithBestStyles.smallText}>START NOW</p>
            <h1 className={TrainWithBestStyles["intro-heading"]}>
              Train with the Best at Tennis & Country Club Fujairah
            </h1>
            <p className={TrainWithBestStyles["intro-passage"]}>
              The Tennis & Country Club Fujairah is a premier destination for
              tennis enthusiasts in the
            </p>
            <p className={TrainWithBestStyles["intro-passage"]}>
              region, offering a blend of top-notch facilities, professional
              coaching, and a vibrant
            </p>
            <p className={TrainWithBestStyles["intro-passage"]}>
              community atmosphere. Nestled in the scenic city of Fujairah, the
              club provides a well rounded experience for players of all skill
              levels
            </p>
            <div className="mt-4">
            <button className={TrainWithBestStyles["learn-btn"]}>
              LEARN MORE
            </button>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainWithBest;
