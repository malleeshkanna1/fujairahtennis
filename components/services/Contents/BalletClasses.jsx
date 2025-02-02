import React from "react";
import CommonStyles from "../css/CommonStyle.module.css";
import PaddleCoachingStyles from "../css/PaddleCoaching.module.css";
import Image from "next/image";

const BalletClasses = () => {
  return (
    <div>
      <Image
        layout="responsive"
        width={16}
        height={9}
        src="/images/services/ballet-classes/main.jpg"
        className="img-fluid"
        alt="Personal Training"
      />
      <div className="mt-3">
        <h1 className={CommonStyles["heading"]}>Ballet Classes</h1>
        <div className="mt-4">
          <h3 className={CommonStyles["sub-heading"]}>
            Grace and Strength: Ballet Classes at our Tennis and Country Club
          </h3>
        </div>
        <div className="mt-4">
          <p className={` ${CommonStyles["passage"]}`}>
            Experience the elegance and discipline of ballet with our exclusive
            Ballet Classes at Tennis and Country Club. Whether you’re a beginner
            or have previous dance experience, our classes offer a perfect blend
            of technique, artistry, and fitness in a welcoming and refined
            environment.
          </p>

          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>
              Ballet Classes: Dance with Elegance:{" "}
            </span>
            Explore the Art of Ballet in a Prestigious Setting, with Classes
            Catering to All Skill Levels from Beginners to Advanced.
          </p>

          <p className={`text-uppercase mt-4 ${CommonStyles["sub-heading"]}`}>
            Why Enroll in Our Ballet Classes?
          </p>

          <ul className="">
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Expert Instruction :
                </span>
                Our professional ballet instructors bring years of experience to
                guide you through each step, ensuring proper technique and form
                while fostering a love for dance.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Exclusive Club Environment:
                </span>
                Enjoy the sophisticated setting of our Tennis and Country Club,
                where you can train in beautifully appointed studios designed to
                inspire and elevate your ballet experience.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Tailored for All Levels:
                </span>
                Whether you’re new to ballet or looking to refine your skills,
                our classes cater to all ages and abilities, from young children
                to adults.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Full-Body Workout:
                </span>
                Ballet is an excellent way to improve flexibility, strength,
                posture, and balance, offering a comprehensive workout that’s as
                challenging as it is rewarding.
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
                  src="/images/services/ballet-classes/ballet-classes-1.jpg"
                  className={"img-fluid " + CommonStyles["object-fit-covered"]}
                />
              </div>
            </div>

            <div className="mt-5 mb-4">
              <h3 className={` ${CommonStyles["sub-heading"]}`}>
                Ballet Pricing (Maryana’s Classes on Friday)
              </h3>

              <div className={`mt-3 ${PaddleCoachingStyles["pricing-table"]}`}>
                <table>
                  <thead>
                    <tr>
                      <th>CLASSES</th>
                      <th>MEMBER</th>
                      <th>NON MEMBER</th>
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
                      <td>220.00 AED</td>
                      <td>280.00 AED</td>
                    </tr>
                    <tr>
                      <td>8 Session</td>
                      <td>550.00 AED</td>
                      <td>620.00 AED</td>
                    </tr>
                  </tbody>
                </table>
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
                  Member-Exclusive :
                </span>
                Our ballet classes are available exclusively to members of
                Tennis and Country Club, offering a private and supportive
                learning environment.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Varied Class Options :
                </span>
                We offer classes for different age groups and skill levels,
                including beginner, intermediate, and advanced sessions to meet
                your specific needs.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Flexible Scheduling :
                </span>
                With classes available during the week and on weekends, you can
                easily find a time that fits your schedule.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Prime Location :
                </span>
                Conveniently located within the club, our ballet studio is
                equipped with professional flooring, mirrors, and barres,
                creating an ideal space for your training.
              </p>
            </li>
          </ul>

          <p className={`text-uppercase mt-3 ${CommonStyles["sub-heading"]}`}>
            Benefits of Ballet at Our Club:
          </p>

          <ul>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Physical and Mental Well-Being :
                </span>
                Ballet promotes physical fitness while also enhancing mental
                focus, discipline, and artistic expression.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Community and Camaraderie :
                </span>
                Join a close-knit community of fellow members who share your
                passion for dance in a positive and encouraging environment.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Enhance Your Athletic Skills :
                </span>
                Ballet’s emphasis on balance, coordination, and flexibility
                complements other athletic pursuits, including tennis, by
                improving overall body awareness and control.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Cultural Enrichment :
                </span>
                Immerse yourself in the rich tradition of ballet, gaining an
                appreciation for its history, music, and artistry
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
                  src="/images/services/ballet-classes/ballet-classes-2.png"
                  className={"img-fluid " + CommonStyles["object-fit-covered"]}
                />
              </div>
            </div>
          </div>

          <h3 className={` mt-5 ${CommonStyles["sub-heading"]}`}>
            Enroll in Ballet Today!
          </h3>

          <p className={`mb-4 mt-5  ${CommonStyles["passage"]}`}>
            Step into the world of ballet at
            <span className={CommonStyles["bold-text"]}>
              {" "}
              Tennis & Country Club Fujairah.
            </span>{" "}
            and discover the joy of dance. Our classes are designed to inspire
            and challenge dancers of all levels. Contact us today on &nbsp;
            <a
              href="tel:+97192244880"
              className={CommonStyles["green-highlight"]}
            >
              97192244880
            </a>{" "}
            to learn more about our class schedules, membership benefits, and
            how to join.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BalletClasses;
