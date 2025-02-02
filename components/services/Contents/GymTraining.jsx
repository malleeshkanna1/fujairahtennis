import React from "react";
import CommonStyles from "../css/CommonStyle.module.css";
import PaddleCoachingStyles from "../css/PaddleCoaching.module.css";
import Link from "next/link";
import VimeoIframe from "./VimeoIframe";
import Image from "next/image";

const GymTraining = () => {
  return (
    <div>
      <Image
        layout="responsive"
        width={16}
        height={9}
        src="/images/services/gym-training/main.jpg"
        className="img-fluid"
        alt="Gym Training"
      />
      <div className="mt-3">
        <h1 className={CommonStyles["heading"]}>Gym Traning</h1>
        <div className="mt-4">
          <h3 className={CommonStyles["sub-heading"]}>
            Unlock Your Potential with Personal Training at Tennis & Country
            Club
          </h3>
        </div>
        <div className="mt-4">
          <p className={`text-uppercase ${CommonStyles["sub-heading-sm"]}`}>
            Personal Training Options
          </p>
          <p className={CommonStyles["passage"]}>
            At our club, our personal training programs are designed to help you
            achieve your specific fitness goals with expert guidance. Whether
            you’re new to fitness or looking to take your training to the next
            level, our certified personal trainers will create a customized plan
            just for you.
          </p>
          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>
              Transform Your Fitness Journey at Evolution and Fitness Centre:
            </span>
            Experience Cutting-Edge Equipment, Diverse Exercise Programs, and
            Expert Trainers Dedicated to Your Strength, Wellness, and Total
            Well-Being.
          </p>

          <div className="mt-4 mb-3">
            <div className="row">
              <div className="col-6 d-flex align-items-stretched">
                <Image
                  layout="responsive"
                  width={16}
                  height={9}
                  alt="Gym Training"
                  src="/images/services/gym-training/gym-training-1.jpg"
                  className={"img-fluid " + CommonStyles["object-fit-covered"]}
                />
              </div>
              <div className="col-6 d-flex align-items-stretched">
                <Image
                  layout="responsive"
                  width={16}
                  height={9}
                  alt="Gym Training"
                  src="/images/services/gym-training/gym-training-2.jpg"
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
                    One-on-One Personal Training :
                  </span>
                  Get dedicated attention with a personalized workout plan
                  tailored to your individual goals, fitness level, and
                  preferences. Our trainers provide motivation, accountability,
                  and expert advice to ensure you stay on track.
                </p>
              </li>
              <li>
                <p className={`mb-0 ${CommonStyles["passage"]}`}>
                  <span className={CommonStyles["bold-text"]}>
                    Small Group Training :
                  </span>
                  Experience the benefits of personal training in a small group
                  setting. Perfect for friends or family members who want to
                  train together while still receiving personalized attention
                  from a trainer.
                </p>
              </li>
            </ul>
            <VimeoIframe
              image={"/images/services/tennis-coaching/video-thumbnail.jpg"}
              vimeoUrl={
                "https://player.vimeo.com/video/999830385?h=baa5873db7&autoplay=1"
              }
            />
          </div>
          <div className="mt-3">
            <div>
              <ul>
                <li>
                  <p className={`mb-0 ${CommonStyles["passage"]}`}>
                    <span className={CommonStyles["bold-text"]}>
                      Specialized Training Programs :
                    </span>
                    Whether you’re training for a specific event, recovering
                    from an injury, or targeting specific areas like strength,
                    endurance, or flexibility, our trainers can develop
                    specialized programs to meet your needs.
                  </p>
                </li>
                <li>
                  <p className={`mb-0 ${CommonStyles["passage"]}`}>
                    <span className={CommonStyles["bold-text"]}>
                      Virtual Training Sessions :
                    </span>
                    Can’t make it to the gym? No problem! We offer virtual
                    training sessions so you can work out with your trainer from
                    the comfort of your home.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-5 mb-4">
            <h3 className={` ${CommonStyles["sub-heading"]}`}>
              GYM LESSON PACKAGES
            </h3>
            <div className="mt-3 mb-3">
              <Image
                layout="responsive"
                width={16}
                height={9}
                src="/images/services/gym-training/gym-training-3.png"
                className="img-fluid"
                alt="Gym Training"
              />
            </div>
            <h3 className={` ${CommonStyles["sub-heading"]}`}>
              Membership Offers
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
                    <td>
                      1 Month Gym Only Membership with 10 Session Personal
                      Training
                    </td>
                    <td>900.00 AED</td>
                  </tr>
                  <tr>
                    <td>
                      3 Months Gym Only Membership with 25 Session Personal
                      Training
                    </td>
                    <td>1400.00 AED</td>
                  </tr>
                  <tr>
                    <td>10 Session Personal Training</td>
                    <td>900 AED</td>
                  </tr>
                  <tr>
                    <td>20 Session Personal Training</td>
                    <td>1500 AED</td>
                  </tr>
                  <tr>
                    <td>30 Session Personal Training</td>
                    <td>2100 AED</td>
                  </tr>
                  <tr>
                    <td>40 Session Personal Training</td>
                    <td>3200 AED</td>
                  </tr>
                  <tr>
                    <td>Diet Program</td>
                    <td>500 AED</td>
                  </tr>
                  <tr>
                    <td>10 Couple Sessions</td>
                    <td>1200 AED</td>
                  </tr>
                  <tr>
                    <td>Group Training (up to 5 participants)</td>
                    <td>349 AED</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p
            className={`mb-0 ${CommonStyles["bold-text"]} ${CommonStyles["passage"]}`}
          >
            1 Month Personal Training with Free Use of Pool, Gym, Jacuzzi, Sauna
            (Includes 10 Session Personal Training)
          </p>
        </div>
      </div>
    </div>
  );
};

export default GymTraining;
