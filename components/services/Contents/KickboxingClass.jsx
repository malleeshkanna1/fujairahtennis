import React from "react";
import CommonStyles from "../css/CommonStyle.module.css";
import PaddleCoachingStyles from "../css/PaddleCoaching.module.css";
import Link from "next/link";
import VimeoIframe from "./VimeoIframe";
import Image from "next/image";

const KickboxingClass = () => {
  return (
    <div>
      <Image
        layout="responsive"
        width={16}
        height={9}
        src="/images/services/kickboxing-class/main.jpg"
        className="img-fluid"
        alt="Kickboxing Class"
      />
      <div className="mt-3">
        <h1 className={CommonStyles["heading"]}>Kickboxing Class</h1>
        <div className="mt-4">
          <h3 className={CommonStyles["sub-heading"]}>
            Power Up Your Fitness with Kickboxing at our Tennis and Country Club
          </h3>
        </div>
        <div className="mt-4">
          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            Transform your workout routine with our invigorating Kickboxing
            Class, designed exclusively for members of our Tennis and Country
            Club . Whether you’re looking to enhance your fitness, build
            strength, or learn self-defense, our kickboxing program offers a
            comprehensive and dynamic experience.
          </p>

          <p className={`text-uppercase mt-4 ${CommonStyles["sub-heading"]}`}>
            Why Join Our Gymnastic Class?
          </p>

          <ul className="">
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Professional Instruction :
                </span>
                Our certified kickboxing trainers are dedicated to providing
                top-notch coaching, ensuring you achieve your fitness goals with
                proper technique and motivation.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Premier Club Facilities :
                </span>
                Enjoy the luxury of training in a well-equipped environment that
                includes high-quality equipment, spacious training areas, and
                access to all club amenities.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Customized Workouts:
                </span>
                Each kickboxing session is tailored to accommodate your fitness
                level, from beginners to seasoned athletes, making it a perfect
                fit for everyone.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Total Body Conditioning:
                </span>
                Kickboxing combines cardiovascular exercise with strength and
                endurance training, delivering a full-body workout that enhances
                agility, power, and flexibility.
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
                  alt="Kickboxing Class"
                  src="/images/services/kickboxing-class/kickboxing-class-2.png"
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
                  Exclusive to Members:
                </span>
                Our kickboxing class is exclusively available to Tennis &
                Country Club Fujairah members, fostering a focused and
                supportive atmosphere.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Varied Age Groups:{" "}
                </span>
                We offer sessions for teens and adults, ensuring that all
                members can participate and benefit from the program.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Convenient Scheduling:
                </span>
                With multiple class times available, including mornings,
                evenings, and weekends, you can easily find a session that fits
                your schedule.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Prime Location:
                </span>
                Located within the club, our kickboxing studio is easily
                accessible and equipped with everything you need for an
                effective and enjoyable workout.
              </p>
            </li>
          </ul>

          <div className="mt-5 mb-5 text-center ">
            <h3 className={`${CommonStyles["sub-heading"]}`}>
              KICK BOXING- ATEF
            </h3>
            <h3 className={`${CommonStyles["sub-heading"]}`}>
              CLASSES(TUESDAY/THURSDAY)
            </h3>
            <h3 className={`${CommonStyles["sub-heading"]}`}>
              5 Y/O AND ABOVE(4PM-8PM)
            </h3>
            <p className={`mt-3 ${CommonStyles["passage"]}`}>
              <span className={CommonStyles["bold-text"]}>
                Half Month Package- 150 AED
              </span>
            </p>
            <p className={` ${CommonStyles["passage"]}`}>
              <span className={CommonStyles["bold-text"]}>
                Monthly Package- 300 AED
              </span>
            </p>
            <p className={` ${CommonStyles["passage"]}`}>
              <span className={CommonStyles["bold-text"]}>
                1 Session – 55 AED
              </span>
            </p>
          </div>

          <div className="mt-5 mb-4">
            <h3 className={` ${CommonStyles["sub-heading"]}`}>
              KickBoxing LESSON PACKAGES
            </h3>
            <h3 className={`mt-4 ${CommonStyles["sub-heading"]}`}>
              Kick Boxing (Tuesday/Thursday)
            </h3>
            <div className={`mt-3 ${PaddleCoachingStyles["pricing-table"]}`}>
              <table>
                <thead>
                  <tr>
                    <th>CLASSES</th>
                    <th>MEMBER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Half Month Package </td>
                    <td>150.00 AED </td>
                  </tr>
                  <tr>
                    <td>Monthly Package </td>
                    <td>300.00 AED</td>
                  </tr>
                  <tr>
                    <td>1 Session</td>
                    <td>55.00 AED</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-5 mb-4">
            <h3 className={` mt-4 ${CommonStyles["sub-heading"]}`}>
              Personal Training Prices
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
                    <td>10 Session</td>
                    <td>900.00 AED </td>
                  </tr>
                  <tr>
                    <td>20 Session</td>
                    <td>1500.00 AED </td>
                  </tr>
                  <tr>
                    <td>30 Session</td>
                    <td>2100.00 AED </td>
                  </tr>
                  <tr>
                    <td>40 Session</td>
                    <td>3200.00 AED </td>
                  </tr>
                  <tr>
                    <td>Diet Program</td>
                    <td>500.00 AED </td>
                  </tr>
                  <tr>
                    <td>10 Couple Sessions</td>
                    <td>1200.00 AED </td>
                  </tr>
                  <tr>
                    <td>Group Training (Up to 5 Participants) </td>
                    <td>349.00 AED Each </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-5 mb-4">
            <h3 className={` mt-4 ${CommonStyles["sub-heading"]}`}>
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
                      Training{" "}
                    </td>
                    <td>900.00 AED </td>
                  </tr>
                  <tr>
                    <td>
                      3 Months Gym Only Membership with 25 Session Personal
                      Training{" "}
                    </td>
                    <td>1400.00 AED </td>
                  </tr>
                </tbody>
              </table>
              <p className={`mt-4 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  1 Month Personal Training with Free Use of Pool, Gym, Jacuzzi,
                  Sauna (Includes 10 Session Personal Training)
                </span>
              </p>
            </div>
          </div>
          <p className={`text-uppercase mt-3 ${CommonStyles["sub-heading"]}`}>
            Benefits of Kickboxing at Our Club:
          </p>

          <ul>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Enhanced Fitness:
                </span>
                Kickboxing is an excellent way to burn calories, boost
                cardiovascular health, and improve overall fitness.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Stress Management:
                </span>
                Release tension and stress through high-energy punches and
                kicks, leaving you feeling empowered and rejuvenated.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Community Spirit:
                </span>
                Train alongside fellow members in a positive, encouraging
                environment where camaraderie and motivation thrive.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Cross-Training Advantage:
                </span>
                Complement your tennis or other athletic pursuits by improving
                core strength, balance, and coordination through kickboxing.
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
                  alt="Kickboxing Class"
                  src="/images/services/kickboxing-class/kickboxing-class-1.jpg"
                  className={"img-fluid " + CommonStyles["object-fit-covered"]}
                />
              </div>
            </div>
          </div>

          <h3 className={`${CommonStyles["sub-heading"]}`}>SIGN UP TODAY !</h3>

          <p className={`mb-4 mt-5  ${CommonStyles["passage"]}`}>
            Don’t miss out on the opportunity to join our Kickboxing Class at
            <span className={CommonStyles["bold-text"]}>
              {" "}
              Tennis & Country Club Fujairah.
            </span>{" "}
            Whether you’re new to kickboxing or looking to take your skills to
            the next level, our program offers something for everyone. Contact
            us on{" "}
            <a
              href="tel:+97192244880"
              className={CommonStyles["green-highlight"]}
            >
              97192244880
            </a>{" "}
            .to learn more about class schedules, membership perks, and how to
            enroll.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KickboxingClass;
