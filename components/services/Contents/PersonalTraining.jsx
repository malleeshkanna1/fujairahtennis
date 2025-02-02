import React from "react";
import CommonStyles from "../css/CommonStyle.module.css";
import PaddleCoachingStyles from "../css/PaddleCoaching.module.css";
import Link from "next/link";
import VimeoIframe from "./VimeoIframe";
import Image from "next/image";

const PersonalTraining = () => {
  return (
    <div>
      <Image
        layout="responsive"
        width={16}
        height={9}
        src="/images/services/personal-training/main.jpg"
        className="img-fluid"
        alt="Personal Training"
      />
      <div className="mt-3">
        <h1 className={CommonStyles["heading"]}>Personal Training</h1>
        <div className="mt-4">
          <h3 className={CommonStyles["sub-heading"]}>
            Achieve Your Fitness Goals with Personal Training at our Tennis and
            Country Club
          </h3>
        </div>
        <div className="mt-4">
          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            Unlock your full potential with our exclusive Personal Training
            services at our Tennis and Country Club. Whether you’re striving for
            peak athletic performance, weight loss, or overall wellness, our
            certified trainers are here to provide the personalized attention
            and expertise you need to reach your goals.
          </p>

          <p className={`text-uppercase mt-4 ${CommonStyles["sub-heading"]}`}>
            Why Choose Personal Training at Our Club?
          </p>

          <ul className="">
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Expert Trainers :
                </span>
                Work with highly qualified personal trainers who have the
                experience and knowledge to design customized workout plans
                tailored to your specific goals and fitness level.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Tailored Programs :
                </span>
                Receive individualized attention with a fitness program created
                just for you, whether you’re focusing on strength training,
                cardiovascular fitness, flexibility, or sport-specific training.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  State-of-the-Art Facilities:
                </span>
                Train in our cutting-edge fitness center, equipped with the
                latest exercise technology and amenities to support your
                training journey.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Holistic Approach:
                </span>
                Benefit from a comprehensive fitness strategy that includes
                nutrition guidance, injury prevention, and recovery techniques,
                ensuring sustainable progress.
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
                  alt="Personal Training"
                  src="/images/services/personal-training/personal-training-1.jpg"
                  className={"img-fluid " + CommonStyles["object-fit-covered"]}
                />
              </div>
            </div>

            <div className="mt-5 mb-4">
              <h3 className={` ${CommonStyles["sub-heading"]}`}>
                Membership Offers
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
                      <td>
                        1 Month Gym Only Membership with 10 Session Personal
                        Training{" "}
                      </td>
                      <td>900.00 AED </td>
                    </tr>
                    <tr>
                      <td>
                        3 Months Gym Only Membership with 25 Session Personal
                        Training
                      </td>
                      <td>1400.00 AED</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>
              1 Month Personal Training with Free Use of Pool, Gym, Jacuzzi,
              Sauna (Includes 10 Session Personal Training)
            </span>
          </p>

          <p className={`text-uppercase mt-5 ${CommonStyles["sub-heading"]}`}>
            Class Details:
          </p>

          <ul>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  One-on-One Training:
                </span>
                Enjoy personalized sessions that focus entirely on you, allowing
                for detailed feedback and adjustments to maximize your progress.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Flexible Scheduling:
                </span>
                Our personal training sessions are available at times that fit
                your busy lifestyle, with options for early morning, midday, and
                evening workouts.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Exclusive Member Access:
                </span>
                As a member of Tennis & Country Club Fujairah, you’ll have
                access to exclusive personal training packages designed to
                deliver exceptional results.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Variety of Specializations:
                </span>
                Whether your goal is to improve tennis performance, build
                muscle, or recover from an injury, our trainers specialize in
                various areas to meet your needs.
              </p>
            </li>
          </ul>

          <p className={`text-uppercase mt-3 ${CommonStyles["sub-heading"]}`}>
            Benefits of Personal Training at Our Club:
          </p>

          <ul>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Accelerated Results:
                </span>
                With customized workouts and professional guidance, you’ll
                achieve your fitness goals faster and more efficiently.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Motivation and Accountability:
                </span>
                Stay motivated and on track with a dedicated trainer who keeps
                you accountable and pushes you to your limits.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Enhanced Athletic Performance:
                </span>
                Improve your game with sport-specific training that enhances
                your strength, speed, and agility, particularly beneficial for
                tennis players.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Injury Prevention and Recovery:
                </span>
                Learn proper techniques and strategies to prevent injuries and
                aid in recovery, ensuring long-term fitness and health.
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
                  alt="Personal Training"
                  src="/images/services/personal-training/personal-training-2.png"
                  className={"img-fluid " + CommonStyles["object-fit-covered"]}
                />
              </div>
            </div>
          </div>

          <h3 className={` mt-5 ${CommonStyles["sub-heading"]}`}>Start Your Journey Today!</h3>

          <p className={`mb-4 mt-5  ${CommonStyles["passage"]}`}>
          Ready to take your fitness to the next level? Enroll in our Personal Training program at 

            <span className={CommonStyles["bold-text"]}>
              {" "}
              Tennis & Country Club Fujairah.
            </span>{" "}
            and experience the transformative benefits of individualized coaching. Contact us today on &nbsp;
            <a
              href="tel:+97192244880"
              className={CommonStyles["green-highlight"]}
            >
              97192244880
            </a>{" "}
            to schedule a consultation and learn more about our personalized training packages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalTraining;
