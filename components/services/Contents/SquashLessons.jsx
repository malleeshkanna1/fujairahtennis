import React from "react";
import CommonStyles from "../css/CommonStyle.module.css";
import PaddleCoachingStyles from "../css/PaddleCoaching.module.css";
import Image from "next/image";

const SquashLessons = () => {
  return (
    <div>
      <Image
        layout="responsive"
        width={16}
        height={9}
        src="/images/services/squash-lessons/main.png"
        className="img-fluid"
        alt="Squash lessons"
      />
      <div className="mt-3">
        <h1 className={CommonStyles["heading"]}>Squash lessons</h1>
        <div className="mt-4">
          <h3 className={CommonStyles["sub-heading"]}>
            Elevate Your Game with Squash Lessons at our Tennis and Country Club
          </h3>
        </div>
        <div className="mt-4">
          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            Discover the excitement of squash with our exclusive Squash Lessons
            at Tennis & Country Club Fujairah. Whether you’re a newcomer to the
            sport or an experienced player looking to enhance your skills, our
            personalized coaching and top-notch facilities provide everything
            you need to excel.
          </p>

          <p className={`mb-0 mt-5 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>
              Elevate Your Game : &nbsp;
            </span>
            Our Two Glass-Enclosed Squash Courts Offer Intense Cardio Workouts
            and Spectator-Friendly Views, with Rackets Provided for a Focused
            and Dynamic Experience.
          </p>
          <h3 className={`mt-4 ${CommonStyles["sub-heading"]}`}>
            Why Join Our Squash Lessons?
          </h3>
          <ul className="mt-3">
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Professional Coaches : &nbsp;
                </span>
                Benefit from the expertise of our seasoned squash coaches who
                are committed to helping you improve your game, from mastering
                fundamentals to refining advanced techniques.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Premium Facilities :
                </span>
                Train in our state-of-the-art squash courts, designed to provide
                an optimal playing experience with high-quality surfaces,
                lighting, and equipment.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Customized Instruction :
                </span>
                Each lesson is tailored to your individual skill level and
                goals, ensuring personalized attention that accelerates your
                progress on the court.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Comprehensive Skill Development:
                </span>
                Our lessons cover all aspects of squash, including stroke
                mechanics, strategic play, fitness conditioning, and mental
                resilience.
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
                  alt="Squash Lessons"
                  src="/images/services/squash-lessons/squash-lessons-2.jpg"
                  className={"img-fluid " + CommonStyles["object-fit-covered"]}
                />
              </div>
            </div>
          </div>

          <p className={`text-uppercase mt-5 ${CommonStyles["sub-heading"]}`}>
            Program Highlights:
          </p>

          <ul>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Member-Exclusive Access:
                </span>
                Our squash lessons are exclusively available to members of our
                Tennis and Country Club, offering a private and focused
                environment for learning.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Suitable for All Levels:
                </span>
                We provide lessons for all skill levels, including beginner,
                intermediate, and advanced players, as well as juniors and
                adults.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Flexible Scheduling Options :
                </span>
                With sessions available throughout the week, including early
                mornings, evenings, and weekends, you can easily find a time
                that fits your schedule.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Convenient Location:
                </span>
                Our squash courts are conveniently situated within the club,
                making it easy for you to integrate lessons into your routine.
              </p>
            </li>
          </ul>

          <p className={`text-uppercase mt-3 ${CommonStyles["sub-heading"]}`}>
            The Benefits of Squash at Our Club:
          </p>

          <ul>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Boost Your Fitness:
                </span>
                Squash is an intense, high-energy sport that enhances
                cardiovascular health, strengthens muscles, and improves agility
                and endurance.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Sharpen Reflexes and Strategy:
                </span>
                Develop quick reflexes, sharp hand-eye coordination, and
                strategic thinking that not only benefit your squash game but
                also translate to other sports and daily activities.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Engage with the Community:
                </span>
                Become part of a lively squash community at our club, with
                opportunities to participate in matches, tournaments, and social
                events.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Complementary to Other Sports :
                </span>
                Squash serves as an excellent cross-training activity,
                particularly for tennis players, as it builds endurance,
                agility, and mental sharpness.
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
                  alt="Squash Lessons"
                  src="/images/services/squash-lessons/squash-lessons-1.jpg"
                  className={"img-fluid " + CommonStyles["object-fit-covered"]}
                />
              </div>
            </div>
          </div>

          <h3 className={` mt-5 ${CommonStyles["sub-heading"]}`}>
            Get Started with Squash Today!
          </h3>

          <p className={`mb-4 mt-5  ${CommonStyles["passage"]}`}>
            Ready to improve your squash skills? Join our Squash Lessons at our
            <span className={CommonStyles["bold-text"]}>
              {" "}
              Tennis & Country Club Fujairah.
            </span>{" "}
            and experience the benefits of professional coaching in an exclusive
            setting. Contact us today on &nbsp;
            <a
              href="tel:+97192244880"
              className={CommonStyles["green-highlight"]}
            >
              97192244880
            </a>{" "}
            to find out more about lesson times, membership perks, and how to
            enroll.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SquashLessons;
