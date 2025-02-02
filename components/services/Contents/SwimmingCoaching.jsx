import React from "react";
import CommonStyles from "../css/CommonStyle.module.css";
import SwimmingStyles from "../css/Swimming.module.css";
import Link from "next/link";
import VimeoIframe from "./VimeoIframe";
import Image from "next/image";

const SwimmingCoaching = () => {
  return (
    <div>
      <Image
        layout="responsive"
        width={16}
        height={9}
        src="/images/services/swim-coaching/main.jpg"
        className="img-fluid"
        alt="Swimming Coaching"
      />
      <div className="mt-3">
        <h1 className={CommonStyles["heading"]}>Swimming COACHING</h1>
        <div className="mt-4">
          <h3 className={CommonStyles["sub-heading"]}>
            Dive into Excellence : Pool Features at Tennis & Country Club
          </h3>
        </div>
        <div className="mt-4">
          <p className={CommonStyles["passage"]}>
            we offer a swimming experience that combines luxury, convenience,
            and top-notch amenities. Whether you’re swimming for fitness,
            leisure, or recovery, our pool is designed to meet your needs. Our
            25-Meter Pool with Five Swim Lanes Offers the Perfect Blend of
            Recreational Fun and Lap Training, Complete with Gradual Depth and
            Comfortable Lounging Areas for a Complete Aquatic Experience.
          </p>
          <ul>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Heated Pool for Every Season :{" "}
                </span>
                Our pool is heated to a perfect temperature, ensuring that you
                can enjoy a comfortable swim regardless of the weather. It’s an
                ideal setting for everything from intense lap swimming to a
                relaxing float.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Generous Pool Size :{" "}
                </span>
                our pool is spacious enough for all activities, whether you’re
                training for a competition or simply enjoying a casual swim. The
                ample space ensures you never feel crowded, even during peak
                hours.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Saltwater Pool Option :
                </span>
                We offer a saltwater pool, providing a more natural and less
                irritating swimming experience. This option is great for those
                with sensitive skin or eyes, making your swim more refreshing
                and enjoyable.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Dedicated Lap Lanes :
                </span>
                Our pool features clearly marked lap lanes, perfect for swimmers
                who want to focus on their training without distractions. These
                lanes are available throughout the day, ensuring you have the
                space you need for a focused workout.
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
                  alt="Swimming Coaching"
                  src="/images/services/swim-coaching/swimming-2.jpg"
                  className={"img-fluid " + CommonStyles["object-fit-covered"]}
                />
              </div>
              <div className="col-6 d-flex align-items-stretched">
                <Image
                  layout="responsive"
                  width={16}
                  height={9}
                  alt="Swimming Coaching"
                  src="/images/services/swim-coaching/swimming-1.jpg"
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
                    Kid-Friendly Swimming Area :{" "}
                  </span>
                  We have a dedicated shallow area where children can safely
                  enjoy the water under supervision. It’s perfect for families
                  who want to make the most of their time together at the gym.
                </p>
              </li>
              <li>
                <p className={`mb-0 ${CommonStyles["passage"]}`}>
                  <span className={CommonStyles["bold-text"]}>
                    Aqua Fitness Classes :{" "}
                  </span>
                  Join our dynamic range of aqua fitness classes, including Aqua
                  Zumba, Water Aerobics, and Aqua Yoga. These classes provide a
                  full-body workout with the added benefits of low-impact
                  exercise, perfect for all fitness levels.
                </p>
              </li>
              <li>
                <p className={`mb-0 ${CommonStyles["passage"]}`}>
                  <span className={CommonStyles["bold-text"]}>
                    Relaxing Poolside Amenities :
                  </span>
                  After your swim, unwind by the poolside with our comfortable
                  lounge chairs and towel service. Our nearby sauna and steam
                  room offer the perfect post-swim relaxation.
                </p>
              </li>
            </ul>
            <VimeoIframe
              image={"/images/services/swim-coaching/video-thumbnail.jpg"}
              vimeoUrl={
                "https://player.vimeo.com/video/999612113?h=83765c0f70&autoplay=1"
              }
            />
          </div>
          <div className="mt-3">
            <h3 className={CommonStyles["sub-heading"]}>
              Why Choose Tennis & Country Club for Your Pool Experience?
            </h3>
            <div>
              <ul>
                <li>
                  <p className={`mb-0 ${CommonStyles["passage"]}`}>
                    <span className={CommonStyles["bold-text"]}>
                      Accessible Year-Round :
                    </span>
                    Our pool is open every day of the year, with extended hours
                    to suit your lifestyle. Expert Swim Coaching: Our
                    experienced swim coaches are available for lessons tailored
                    to all ages and skill levels, helping you achieve your
                    swimming goals.
                  </p>
                </li>
                <li>
                  <p className={`mb-0 ${CommonStyles["passage"]}`}>
                    <span className={CommonStyles["bold-text"]}>
                      Spotless Water Quality :
                    </span>
                    We take water quality seriously, maintaining a pristine and
                    hygienic pool environment for your safety and comfort.
                  </p>
                </li>
                <li>
                  <p className={`mb-0 ${CommonStyles["passage"]}`}>
                    <span className={CommonStyles["bold-text"]}>
                      Customized Swim Lessons :
                    </span>
                    Our private swim lessons are designed to meet your specific
                    needs, whether you’re a beginner or an advanced swimmer
                    looking to refine your technique. Join Tennis & Country Club
                    and Dive In
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-5 mb-4">
            <h3 className={`text-center ${CommonStyles["sub-heading"]}`}>
              SWIMMING LESSON PACKAGES
            </h3>
            <div className={`mt-3 ${SwimmingStyles["pricing-table"]}`}>
              <table>
                <thead>
                  <tr>
                    <th>Classes</th>
                    <th>Members</th>
                    <th>Non-Members</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <td>INDIVIDUAL - 1 HOUR</td>
                  <td>95 AED EACH</td>
                  <td>130 AED EACH</td>
                </tr>
                <tr>
                  <td>INDIVIDUAL LESSONS - 10 CLASSES</td>
                  <td>750 AED EACH</td>
                  <td>950 AED EACH</td>
                </tr>
                <tr>
                  <td>COUPLE LESSONS - 10 CLASSES</td>
                  <td>1050 AED PER COUPLE</td>
                  <td>1200 AED PER COUPLE</td>
                </tr>
                <tr>
                  <td>GROUP LESSONS - 10 CLASSES (3 PAX)</td>
                  <td>575 AED PER EACH</td>
                  <td>650 AED PER EACH</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>
              Ready to make a splash?
            </span>
            Visit us today to explore our pool and all the aquatic amenities we
            offer. Become a member and enjoy the ultimate swimming experience in
            our state-of-the-art facilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwimmingCoaching;
