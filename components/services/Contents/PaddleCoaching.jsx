import React from "react";
import CommonStyles from "../css/CommonStyle.module.css";
import PaddleCoachingStyles from "../css/PaddleCoaching.module.css";
import Link from "next/link";
import VimeoIframe from "./VimeoIframe";
import Image from "next/image";

const PaddleCoaching = () => {
  return (
    <div>
      <Image
        layout="responsive"
        width={16}
        height={9}
        src="/images/services/paddle-tennis/main.jpg"
        className="img-fluid"
        alt="Paddle Coaching"
      />
      <div className="mt-3">
        <h1 className={CommonStyles["heading"]}>Paddle tennis coaching</h1>
        <div className="mt-4">
          <h3 className={CommonStyles["sub-heading"]}>
            Discover Our Top-Notch Paddle Court
          </h3>
        </div>
        <div className="mt-4">
          <p className={CommonStyles["passage"]}>
            Our paddle court at Tennis & Country Club is designed to offer an
            exceptional playing experience for all skill levels. Whether you’re
            a seasoned player or just getting started, our facilities provide
            the perfect environment for a great game.
          </p>
          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>
              Paddel Tennis Classes: Master the Court:
            </span>
            Learn the Basics and Advanced Techniques of Paddel Tennis with
            Expert Coaching for All Skill Levels.
          </p>
          <ul className="mt-4">
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  High-Performance Paddle Court Surface :
                </span>
                Enjoy a superior playing experience on our court, which is
                crafted with a premium surface to ensure consistent ball bounce
                and excellent grip.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Year-Round Playability :
                </span>
                Our all-weather paddle court is built for year-round use,
                featuring advanced drainage systems and durable materials to
                keep the court in prime condition, no matter the season.
              </p>
            </li>
          </ul>
          <div className="mt-3 mb-3">
            <div className="row">
              <div className="col-6 d-flex align-items-stretched">
                <Image
                  layout="responsive"
                  width={16}
                  height={9}
                  alt="Paddle Coaching"
                  src="/images/services/paddle-tennis/paddle-tennis-2.jpg"
                  className={"img-fluid " + CommonStyles["object-fit-covered"]}
                />
              </div>
              <div className="col-6 d-flex align-items-stretched">
                <Image
                  layout="responsive"
                  width={16}
                  height={9}
                  alt="Paddle Coaching"
                  src="/images/services/paddle-tennis/paddle-tennis-1.jpg"
                  className={"img-fluid " + CommonStyles["object-fit-covered"]}
                />
              </div>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <p className={`mb-0 ${CommonStyles["passage"]}`}>
                  <span className={CommonStyles["bold-text"]}>
                    Advanced LED Lighting :
                  </span>
                  Play at any time with our state-of-the-art LED lighting
                  system, which provides optimal visibility for evening and
                  night matches.
                </p>
              </li>
            </ul>
            <VimeoIframe
              image={"/images/services/tennis-coaching/video-thumbnail.jpg"}
              vimeoUrl={
                "https://player.vimeo.com/video/999614766?h=de4df8d1cb&autoplay=1"
              }
            />
          </div>
          <div className="mt-3">
            <div>
              <ul>
                <li>
                  <p className={`mb-0 ${CommonStyles["passage"]}`}>
                    <span className={CommonStyles["bold-text"]}>
                      Regulation Court Size :
                    </span>
                    Our paddle court adheres to official size standards,
                    offering ample space for all styles of play, from intense
                    rallies to tactical positioning.
                  </p>
                </li>
                <li>
                  <p className={`mb-0 ${CommonStyles["passage"]}`}>
                    <span className={CommonStyles["bold-text"]}>
                      Ideal for All Play Styles :
                    </span>
                    Whether you’re engaging in casual games with friends or
                    competing in a club tournament, our court is perfect for
                    both recreational and competitive paddle tennis.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-5 mb-4">
            <h3 className={` ${CommonStyles["sub-heading"]}`}>
              Paddle Tennis LESSON PACKAGES
            </h3>
            <div className={`mt-3 ${PaddleCoachingStyles["pricing-table"]}`}>
              <table>
                <thead>
                  <tr>
                    <th>CLASSES</th>
                    <th>PRICING</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Private (1 Student, 1 Coach / 1 Session)</td>
                    <td>200 AED</td>
                  </tr>
                  <tr>
                    <td>Semi-Private (2 Students, 1 Coach / 1 Session)</td>
                    <td>230 AED</td>
                  </tr>
                  <tr>
                    <td>4+1 Session (Private)</td>
                    <td>800 AED</td>
                  </tr>
                  <tr>
                    <td>4+1 Session (Semi-Private)</td>
                    <td>1000 AED</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            Experience the best in paddle tennis at Tennis & Country Club
            Fujairah. Our cutting-edge paddle court is designed to cater to all
            players, making it the ultimate spot to enhance your skills and
            enjoy the sport
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaddleCoaching;
