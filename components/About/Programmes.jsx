import React from "react";
import ProgrammeStyles from "./css/Programmes.module.css";

const Programmes = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1 className={ProgrammeStyles["intro-heading"]}>Programme’s</h1>
      </div>
      <div className="mt-5 container">
        <h3 className={ProgrammeStyles["programme-heading"]}>
          Membership and Benefits
        </h3>
        <p className={ProgrammeStyles["programme-content"]}>
          Membership at the Tennis & Country Club Fujairah offers more than just
          access to tennis facilities. The club provides several membership
          options, including individual, family, and corporate plans. Members
          enjoy access to a range of amenities beyond tennis, such as swimming
          pools, fitness centers, and dining facilities with 10% of
          discount.This holistic approach ensures that members can enjoy a
          comprehensive recreational experience, whether they’re on or off the
          court.
        </p>

        <div className="row">
          <div className="col-md-6">
            <div className={ProgrammeStyles["bordered-content"]}>
              <div className="d-flex justify-content-center">
                <h3>1. Group Lessons and Clinics</h3>
              </div>
              <div className="mt-4">
                <p className={ProgrammeStyles["programme-content"]}>
                  The Tennis &Country Club Fujairah provides a range of group
                  lessons and clinics to suit various skill levels. For
                  beginners, there are introductory clinics that focus on the
                  basics of Gymnastic, Kick Boxing , and Ballet class including
                  fundamental techniques, rules, and gameplay. These sessions
                  aim to build confidence and establish a solid foundation for
                  future progress. Intermediate players can benefit from clinics
                  that enhance their technique, consistency, and strategic
                  understanding. These clinics emphasize refining strokes and
                  learning advanced tactics, making them ideal for those looking
                  to improve their game.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className={ProgrammeStyles["bordered-content"]}>
              <div className="d-flex justify-content-center">
                <h3>2. Private Lessons</h3>
              </div>
              <div className="mt-4">
                <p className={ProgrammeStyles["programme-content"]}>
                  For personalized instruction, the club offers private lessons
                  for several activities such, tennis , Paddle , Table Tennis ,
                  Squash and Swimming lessons that cater to individual needs and
                  goals. These one-on-one sessions provide detailed feedback and
                  targeted training, allowing players to focus on specific areas
                  for improvement. Semi-private lessons, shared with one or two
                  other players, offer a more cost-effective alternative while
                  still providing a personalized coaching experience. Both
                  options ensure that players receive tailored guidance to
                  enhance their performance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className={ProgrammeStyles["programme-heading"]}>
            Coaching and Development
          </h3>
          <p className={`mt-3 ${ProgrammeStyles["programme-content"]}`}>
            For those looking to improve their game, the club offers
            professional coaching services. Highly skilled coaches provide
            individual lessons, group clinics, and tailored training programs.
            Whether you’re a beginner learning the basics or an advanced player
            seeking to refine your technique, the coaching staff is equipped to
            help you achieve your goals. The club’s coaching philosophy
            emphasizes skill development, strategic play, and fostering a love
            for the game.
          </p>
        </div>
        <div className="mt-4">
          <h3 className={ProgrammeStyles["programme-heading"]}>
            Social and Networking Events
          </h3>
          <p className={`mt-3 ${ProgrammeStyles["programme-content"]}`}>
            Beyond tennis, the Tennis & Country Club Fujairah organizes social
            and networking events, such as mixers, themed parties, and charity
            tournaments. These events foster a sense of community and provide
            opportunities for members to connect and engage in activities
            outside of tennis. The club hosts regular tournaments for its
            members, including singles, doubles, and mixed doubles events. These
            tournaments offer players a chance to compete in a formal setting
            and showcase their abilities. Additionally, the club may participate
            in or host invitational tournaments, bringing together players from
            other clubs and regions for a broader competitive experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Programmes;
