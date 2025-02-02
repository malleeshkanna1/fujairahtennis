import React from "react";
import CommonStyles from "../css/CommonStyle.module.css";
import PaddleCoachingStyles from "../css/PaddleCoaching.module.css";
import Link from "next/link";
import VimeoIframe from "./VimeoIframe";
import Image from "next/image";

const GymnasticClass = () => {
  return (
    <div>
      <Image
        layout="responsive"
        width={16}
        height={9}
        src="/images/services/gymnastic-class/main.jpg"
        className="img-fluid"
        alt="Gymnastic Class"
      />
      <div className="mt-3">
        <h1 className={CommonStyles["heading"]}>Gymnastic Class</h1>
        <div className="mt-4">
          <h3 className={CommonStyles["sub-heading"]}>
            Elevate Your Fitness at Our Tennis and Country Club Gymnastic Class
          </h3>
        </div>
        <div className="mt-4">
          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            Discover the perfect addition to your fitness routine with our
            exclusive Gymnastic Class at our Tennis and Country Club Name].
            Designed for members of all ages and skill levels, our gymnastics
            program offers a unique blend of strength, flexibility, and
            coordination training, all within the prestigious setting of our
            club.
          </p>

          <p className={`mt-3 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>
              Gymnastic Classes: Achieve New Heights:
            </span>{" "}
            &nbsp; Master Strength, Flexibility, and Technique with Expert
            Gymnastics Instruction for All Skill Levels.
          </p>

          <p className={`text-uppercase ${CommonStyles["sub-heading"]}`}>
            Why Join Our Gymnastic Class?
          </p>

          <ul>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Expert Instruction :
                </span>
                Our experienced and certified gymnastics coaches are dedicated
                to helping you achieve your fitness and skill goals, whether
                you’re a beginner or an experienced gymnast.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Club Amenities :
                </span>
                Enjoy the benefits of our world-class facilities, including
                access to our gym, locker rooms, and lounge areas, making your
                gymnastics experience even more enjoyable.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Tailored Programs:
                </span>
                Each class is customized to meet the needs of our members,
                ensuring that you receive personalized guidance and support in a
                safe and encouraging environment.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Holistic Fitness:
                </span>
                Enhance your overall fitness and complement your tennis skills
                by improving your balance, flexibility, and strength through
                gymnastics.
              </p>
            </li>
          </ul>

          <div className="mt-4 mb-3">
            <div className="row">
              <div className="col-12">
                <Image
                  layout="responsive"
                  width={16}
                  height={9}
                  alt="Gymnastic Class"
                  src="/images/services/gymnastic-class/gymnastic-class-1.png"
                  className={"img-fluid " + CommonStyles["object-fit-covered"]}
                />
              </div>
            </div>
          </div>

          <p className={`text-uppercase mt-5 ${CommonStyles["sub-heading"]}`}>
            Class Details:
          </p>

          <ul>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Member-Exclusive:
                </span>
                This class is available exclusively to members of our Tennis and
                Country Club, fostering a close-knit community of fitness
                enthusiasts.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>Age Groups:</span>
                We offer classes for children, teens, and adults, making it easy
                for every family member to participate.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Flexible Schedule:
                </span>
                Choose from various class times, including weekday mornings,
                evenings, and weekend sessions to fit your busy lifestyle.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>Location :</span>
                Conveniently located within the club, our gymnastics studio is
                easily accessible and equipped with top-of-the-line apparatus.
              </p>
            </li>
          </ul>

          <div className="mt-5 mb-5 text-center ">
            <h3 className={`${CommonStyles["sub-heading"]}`}>
              GYMNASTIC CLASSES- KHALED
            </h3>
            <h3 className={`${CommonStyles["sub-heading"]}`}>
              (FRIDAY/SATURDAY/MONDAY)
            </h3>
            <p className={`mt-3 ${CommonStyles["passage"]}`}>
              <span className={CommonStyles["bold-text"]}>
                1 Session – 50 AED
              </span>
            </p>
            <p className={` ${CommonStyles["passage"]}`}>
              <span className={CommonStyles["bold-text"]}>
                4 Session – 150AED
              </span>
            </p>
            <p className={` ${CommonStyles["passage"]}`}>
              <span className={CommonStyles["bold-text"]}>
                5 Session – 300 AED
              </span>
            </p>
          </div>
          <div className="mt-5 mb-5 text-center ">
            <h3 className={`${CommonStyles["sub-heading"]}`}>CLASS SCHEDULE</h3>

            <p className={`mt-3 ${CommonStyles["passage"]}`}>
              <span className={CommonStyles["bold-text"]}>
                FRIDAY – 4:00-8:00
              </span>
            </p>
            <p className={` ${CommonStyles["passage"]}`}>
              <span className={CommonStyles["bold-text"]}>
                SUNDAY – 5:00-8:00
              </span>
            </p>
            <p className={` ${CommonStyles["passage"]}`}>
              <span className={CommonStyles["bold-text"]}>
                MONDAY – 7:00-8:00
              </span>
            </p>
          </div>

          <div className="mt-5 mb-4">
            <h3 className={` ${CommonStyles["sub-heading"]}`}>
              GYmnastic LESSON PACKAGES
            </h3>
            <h3 className={` text-center mt-4 ${CommonStyles["sub-heading"]}`}>
              Maryana’s Classes (Monday/Wednesday)
            </h3>
            <div className={`mt-3 ${PaddleCoachingStyles["pricing-table"]}`}>
              <table>
                <thead>
                  <tr>
                    <th>CLASSES</th>
                    <th>MEMBER</th>
                    <th>MEMBER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 Session</td>
                    <td>77.00 AED </td>
                    <td>87.00 AED </td>
                  </tr>
                  <tr>
                    <td>4 Session</td>
                    <td>220.00 AED </td>
                    <td>280.00 AED </td>
                  </tr>
                  <tr>
                    <td>8 Session</td>
                    <td>550.00 AED </td>
                    <td>620.00 AED </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-5 mb-4">
            <h3 className={` text-center mt-4 ${CommonStyles["sub-heading"]}`}>
              Khaled’s Classes (Friday/Saturday/Sunday)
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
                    <td>1 Session</td>
                    <td>50.00 AED </td>
                  </tr>
                  <tr>
                    <td>4 Session</td>
                    <td>150.00 AED </td>
                  </tr>
                  <tr>
                    <td>8 Session</td>
                    <td>300.00 AED </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className={`text-uppercase mt-5 ${CommonStyles["sub-heading"]}`}>
            Benefits of Gymnastics at Our Club:
          </p>

          <ul>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Enhanced Athletic Performance:
                </span>
                Gymnastics is an excellent cross-training activity that improves
                agility, balance, and coordination, benefiting your tennis game
                and overall athletic performance.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Community and Social Engagement:{" "}
                </span>
                Connect with fellow club members who share your passion for
                fitness and well-being in a supportive and motivating
                environment.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Comprehensive Fitness:
                </span>
                Beyond tennis, enjoy a full-body workout that targets all major
                muscle groups, helping you stay in peak physical condition
                year-round.
              </p>
            </li>
          </ul>

          <div className="mt-4 mb-3">
            <div className="row">
              <div className="col-12">
                <Image
                  layout="responsive"
                  width={16}
                  height={9}
                  alt="Gymnastic Class"
                  src="/images/services/gymnastic-class/gymnastic-class-2.jpg"
                  className={"img-fluid " + CommonStyles["object-fit-covered"]}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 mb-4">
            <h3 className={` text-center mt-4 ${CommonStyles["sub-heading"]}`}>
              GYMNASTIC CLASSES-MARYNA
            </h3>
            <h3 className={` text-center ${CommonStyles["sub-heading"]}`}>
              (MONDAY/WEDNESDAY)
            </h3>
            <div className={`mt-3 ${PaddleCoachingStyles["pricing-table"]}`}>
              <table>
                <thead>
                  <tr>
                    <th>CLASSES</th>
                    <th>MEMBER</th>
                    <th>MEMBER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 Session</td>
                    <td>57.25 AED</td>
                    <td>67.25 AED</td>
                  </tr>
                  <tr>
                    <td>4 Session</td>
                    <td>178 AED </td>
                    <td>209.50 AED </td>
                  </tr>
                  <tr>
                    <td>8 Session</td>
                    <td>340.75 AED </td>
                    <td>410 AED </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className={`${CommonStyles["sub-heading"]}`}>Enroll Today!</h3>

          <p className={`mb-4 mt-5  ${CommonStyles["passage"]}`}>
            Take the next step in your fitness journey by joining our Gymnastic
            Class at
            <span className={CommonStyles["bold-text"]}>
              {" "}
              Tennis & Country Club Fujairah
            </span>
            Spaces are limited, so be sure to secure your spot today! For more
            information on class schedules, membership benefits, and enrollment,
            please contact us at <a href="tel:+97192244880" className={CommonStyles["green-highlight"]}>97192244880</a>  .
          </p>
        </div>
      </div>
    </div>
  );
};

export default GymnasticClass;
