import React from "react";
import CommonStyles from "../css/CommonStyle.module.css";
import PaddleCoachingStyles from "../css/PaddleCoaching.module.css";
import Link from "next/link";
import VimeoIframe from "./VimeoIframe";
import Image from "next/image";

const SummerCamp = () => {
  return (
    <div>
      <Image
        layout="responsive"
        width={16}
        height={9}
        src="/images/services/summer-camp/main.jpg"
        className="img-fluid"
        alt="Summer Camp"
      />
      <div className="mt-3">
        <h1 className={CommonStyles["heading"]}>Summer camp</h1>
        <div className="mt-4">
          <h3 className={CommonStyles["sub-heading"]}>
            Join Our Premier Summer Tennis Camp
          </h3>
        </div>
        <div className="mt-4">
          <p className={CommonStyles["passage"]}>
            Experience an unforgettable summer at our Premier Summer Tennis
            Camp! Designed for players of all ages and skill levels, our camp
            offers a dynamic mix of training, competition, and fun.
          </p>

          <ul className="mt-4">
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Expert Tennis Instruction :
                </span>
                Benefit from professional coaching that focuses on enhancing
                tennis skills, game strategy, and physical conditioning. Our
                program includes drills, match play, and individualized
                feedback.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Suitable for All Levels :
                </span>
                Whether new to tennis or an experienced player, our camp caters
                to all skill levels with customized training to ensure each
                participant improves and enjoys the game.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Engaging Activities :
                </span>
                Beyond tennis, enjoy a variety of exciting activities, including
                team-building games, sports challenges, and social events,
                making it a comprehensive summer experience.
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
                  alt="Summer Camp"
                  src="/images/services/summer-camp/summer-camp-1.jpg"
                  className={"img-fluid " + CommonStyles["object-fit-covered"]}
                />
              </div>
              <div className="col-6 d-flex align-items-stretched">
                <Image
                  layout="responsive"
                  width={16}
                  height={9}
                  alt="Summer Camp"
                  src="/images/services/summer-camp/summer-camp-2.jpg"
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
                    Top Facilities :
                  </span>
                  Play at our modern tennis courts, equipped with the latest
                  amenities to provide an optimal environment for both training
                  and leisure.
                </p>
              </li>
              <li>
                <p className={`mb-0 ${CommonStyles["passage"]}`}>
                  <span className={CommonStyles["bold-text"]}>
                    Qualified Coaches :
                  </span>
                  Our certified tennis coaches are dedicated to helping campers
                  develop their skills and love for the game, bringing extensive
                  experience and enthusiasm to each session.
                </p>
              </li>
              <li>
                <p className={`mb-0 ${CommonStyles["passage"]}`}>
                  <span className={CommonStyles["bold-text"]}>
                    Flexible Scheduling :
                  </span>
                  Choose from weekly or full-session options to fit your summer
                  plans. Our flexible schedules make it easy to find a camp
                  duration that works for you.
                </p>
              </li>
            </ul>
            <p className={`${CommonStyles["passage"]}`}>
              Enroll in our Premier Summer Tennis Camp to enhance your skills,
              make new friends, and have a blast this summer. Register now to
              secure your place and be part of an exceptional tennis experience!
            </p>
            <VimeoIframe
              image={"/images/services/tennis-coaching/video-thumbnail.jpg"}
              vimeoUrl={
                "https://player.vimeo.com/video/999614766?h=de4df8d1cb&autoplay=1"
              }
            />
          </div>

          <div className="mt-5 mb-4">
            <h3 className={` ${CommonStyles["sub-heading"]}`}>
              Children’s Summer Camp Programs
            </h3>
            <p className={`mb-0 ${CommonStyles["passage"]}`}>
              Discover our engaging Summer Camp designed specifically for
              children, offering a blend of tennis and exciting activities to
              make their summer unforgettable.
            </p>
            <div className="mt-3">
              <div>
                <ul>
                  <li>
                    <p className={`mb-0 ${CommonStyles["passage"]}`}>
                      <span className={CommonStyles["bold-text"]}>
                        Specialized Tennis Instruction :
                      </span>
                      Our summer camp provides expert tennis training for
                      children of all skill levels. Our experienced coaches
                      focus on developing technique, strategy, and on-court
                      skills in a fun, interactive environment.
                    </p>
                  </li>
                  <li>
                    <p className={`mb-0 ${CommonStyles["passage"]}`}>
                      <span className={CommonStyles["bold-text"]}>
                        Varied Camp Activities :
                      </span>
                      Beyond tennis, campers enjoy a range of activities
                      including sports, arts and crafts, and outdoor games.
                      These activities are designed to enhance teamwork,
                      creativity, and physical fitness.
                    </p>
                  </li>
                  <li>
                    <p className={`mb-0 ${CommonStyles["passage"]}`}>
                      <span className={CommonStyles["bold-text"]}>
                        Age-Appropriate Camps :
                      </span>
                      We offer programs tailored to different age groups,
                      ensuring that each child receives age-appropriate
                      instruction and experiences that match their skill level
                      and interests.
                    </p>
                  </li>
                  <li>
                    <p className={`mb-0 ${CommonStyles["passage"]}`}>
                      <span className={CommonStyles["bold-text"]}>
                        Safe and Supportive Setting :
                      </span>
                      Our camp prioritizes safety and support. Our qualified
                      staff ensures a secure environment where every child feels
                      valued and encouraged to reach their full potential.
                    </p>
                  </li>
                  <li>
                    <p className={`mb-0 ${CommonStyles["passage"]}`}>
                      <span className={CommonStyles["bold-text"]}>
                        Flexible Scheduling Options :
                      </span>
                      With full-day and half-day options available, our summer
                      camp accommodates various schedules to fit your family’s
                      needs.
                    </p>
                  </li>
                </ul>
                <p className={`mb-0 ${CommonStyles["passage"]}`}>
                  Enroll your child in our Summer Camp to enhance their tennis
                  skills, explore new interests, and have a fantastic summer.
                  Register now and see why our camp is a top choice for parents
                  seeking the best in children’s summer programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerCamp;
