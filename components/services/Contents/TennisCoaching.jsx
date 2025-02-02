import React from "react";
import CommonStyles from "../css/CommonStyle.module.css";
import TennisCoachStyles from "../css/TennisCoachStyles.module.css";
import Link from "next/link";
import VimeoIframe from "./VimeoIframe";
import Image from "next/image";

export const TennisCoaching = () => {

  return (
    <div>
      <Image layout="responsive" width={16} height={9}
        src="/images/services/tennis-coaching/tennis-player-about-serve.jpg"
        className="img-fluid"
        alt="Tennis Coaching"
      />
      <div className="mt-3">
        <h1 className={CommonStyles["heading"]}>TENNIS COACHING</h1>
        <div className="mt-4">
          <p className={CommonStyles["passage"]}>
            At our club, we offer a diverse coaching program designed for
            players of every age and ability. Our expert coaches are committed
            to helping you refine your skills, whether you’re just starting out
            or looking to elevate your game to the next level.
          </p>
          <p className={CommonStyles["passage"]}>
            <span className={CommonStyles["bold-text"]}>
              Elevate Your Game at Our Premier Outdoor Tennis Club :{" "}
            </span>
            Featuring a meticulously maintained rectangular court with crisp
            white boundary lines for singles and doubles play. Enjoy the
            advantage of a tall mesh fence to keep the action in play, wind
            screens to minimize interference, and lighting for those evening
            matches. Relax in shaded areas or on comfortable benches between
            sets, and experience the perfect blend of performance and comfort on
            every serve.
          </p>
          <div className="mt-3">
            <h3 className={CommonStyles["sub-heading"]}>About us</h3>
            <p className={CommonStyles["passage"]}>
              Our coaching philosophy is centered around a modern and inclusive
              approach, offering clear pathways for players of all levels. We
              emphasize group-based programs to encourage social interaction and
              create a supportive learning environment. Through our rally-based
              methods, players experience engaging, fun training that uses
              progressive and regressive techniques to enhance their skills.
            </p>
            <div className="row mt-4 ">
              <div className="col-6 d-flex align-items-stretched">
                <Image layout="responsive" width={16} height={9}
                  src="/images/services/tennis-coaching/tennis-1.jpg" alt="Tennis Coaching"
                  className={`img-fluid ${CommonStyles["object-fit-covered"]}`}
                />
              </div>
              <div className="col-6 d-flex align-items-stretched">
                <Image layout="responsive" width={16} height={9}
                  src="/images/services/tennis-coaching/tennis-2.jpg" alt="Tennis Coaching"
                  className={`img-fluid ${CommonStyles["object-fit-covered"]}`}
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              <h2 className={CommonStyles["sub-heading2"]}>Coaching Plans</h2>
              <div className="mt-5"></div>
              <h3 className={CommonStyles["sub-heading"]}>prices</h3>
            </div>
            <div className="mt-5">
              <div className="row">
                <div className="col-sm-4 ">
                  <div className="p-2 bg-white">
                    <img
                      src="/images/blogs/growing.jpg"
                      className={TennisCoachStyles["image-grid"]}
                      alt=""
                    />
                    <div className="mt-2 text-center">
                      <h3 className={` ${CommonStyles["sub-heading-sm"]}`}>
                        INDIVIDUAL-1 HOUR Classes
                      </h3>
                      <h4 className={TennisCoachStyles["price"]}>
                        <span className={CommonStyles["sm-text"]}>AED</span> 130
                      </h4>
                      <p className={TennisCoachStyles["passage-sm"]}>
                        Ready to take your fitness to the next level? Enroll in
                        our Personal Training program at Tennis & Country Club
                        Fujairah and experience the transformative benefits of
                        individualized coaching. Contact us today on
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <Link
                        href="/contact"
                        className={TennisCoachStyles["inquire-button"]}
                      >
                        Inquire Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 mt-4 mt-sm-0 ">
                  <div className="p-2 bg-white">
                    <img
                      src="/images/services/tennis-coaching/pricing-1.jpg"
                      className={TennisCoachStyles["image-grid"]}
                      alt=""
                    />
                    <div className="mt-2 text-center">
                      <h3 className={` ${CommonStyles["sub-heading-sm"]}`}>
                        INDIVIDUAL LESSONS-10 CLASSES
                      </h3>
                      <h4 className={TennisCoachStyles["price"]}>
                        <span className={CommonStyles["sm-text"]}>AED</span> 950
                      </h4>
                      <p className={TennisCoachStyles["passage-sm"]}>
                        Ready to take your fitness to the next level? Enroll in
                        our Personal Training program at Tennis & Country Club
                        Fujairah and experience the transformative benefits of
                        individualized coaching. Contact us today on
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <Link
                        href="/contact"
                        className={TennisCoachStyles["inquire-button"]}
                      >
                        Inquire Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mt-4 mt-sm-0 ">
                  <div className="p-2 bg-white">
                    <img
                      src="/images/services/tennis-coaching/pricing-2.jpg"
                      className={TennisCoachStyles["image-grid"]}
                      alt=""
                    />
                    <div className="mt-2 text-center">
                      <h3 className={` ${CommonStyles["sub-heading-sm"]}`}>
                        INDIVIDUAL-1 HOUR Classes
                      </h3>
                      <h4 className={TennisCoachStyles["price"]}>
                        <span className={CommonStyles["sm-text"]}>AED</span> 130
                      </h4>
                      <p className={TennisCoachStyles["passage-sm"]}>
                        Ready to take your fitness to the next level? Enroll in
                        our Personal Training program at Tennis & Country Club
                        Fujairah and experience the transformative benefits of
                        individualized coaching. Contact us today on
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <Link
                        href="/contact"
                        className={TennisCoachStyles["inquire-button"]}
                      >
                        Inquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex mt-3 justify-content-center">
              <Link
                href="/our-pricing"
                className={TennisCoachStyles["pricing-btn"]}
              >
                View our prices
              </Link>
            </div>
            <div className="mt-5">
              <h3 className={CommonStyles["sub-heading"]}>Our VISION</h3>
              <p className={CommonStyles["passage"]}>
                To create a welcoming community by providing innovative and
                accessible tennis coaching for everyone.
              </p>
            </div>

            <div className="mt-5">
              <h3 className={CommonStyles["sub-heading"]}>
                Our Guiding Principles
              </h3>
              <p className={`mt-3 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Inclusiveness & Affordability :
                </span>{" "}
                &nbsp; Programs designed to cater to all ages and skill levels.
              </p>

              <VimeoIframe image={'/images/services/tennis-coaching/video-thumbnail.jpg'} vimeoUrl={"https://player.vimeo.com/video/999614766?h=de4df8d1cb&autoplay=1"} />
              
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Connection & Integration:
                </span>{" "}
                &nbsp; Structured programs that facilitate progression from
                beginner to advanced stages.
              </p>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Single Point of Contact:
                </span>{" "}
                &nbsp; Ensuring a seamless and streamlined experience for all
                participants.
              </p>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Quality & Professionalism:
                </span>{" "}
                &nbsp; Commitment to high standards and professional development
                to support the growth of future tennis leaders.
              </p>
              <div className="mt-5">
                <h3 className={CommonStyles["sub-heading"]}>Why Choose Us</h3>
                <p className={CommonStyles["passage"]}>
                  Join our tennis programs at any time! Our sessions are
                  scheduled around school terms and holidays, offering flexible
                  options for full or partial term participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
