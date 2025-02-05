import React from "react";
import commonStyles from "../../services/css/CommonStyle.module.css";
import Image from "next/image";

const GrowingOurTennis = () => {
  return (
    <div>
      <p className={commonStyles["passage"]}>
        Our tennis club currently boasts a vibrant and active junior program,
        with between 400 and 500 children participating in weekly group tennis
        lessons. This impressive number doesn’t even include participants from
        our schools’ program or tennis camps. A significant factor in this
        growth has been the introduction of free trial sessions.
      </p>
      <h3 className={commonStyles["sub-heading"]}>Why Free Trials Work</h3>
      <p className={commonStyles["passage"]}>
        Over the past year, we’ve conducted around 220 free trials—a substantial
        number that has directly contributed to the steady growth of our junior
        tennis program. The evidence is clear: offering free trials is an
        effective way to introduce new players to our club, resulting in a
        continually expanding membership.
      </p>
      <h3 className={commonStyles["sub-heading"]}>
        Addressing Common Concerns About Free Trials
      </h3>
      <p className={commonStyles["passage"]}>
        Some coaches have mixed opinions about offering free trials. Below, I
        address common concerns and explain why we believe free trials are a
        valuable tool for tennis clubs.
      </p>
      <div className="mt-4">
        <Image
          layout="responsive"
          width={16}
          height={9}
          src="/images/blogs/two-tennis-friends.jpg"
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="mt-5">
        <h3 className={commonStyles["sub-heading"]}>
          Integrate Trials into Existing Programs
        </h3>
        <p className={commonStyles["passage"]}>
          Free trials should be part of an existing group tennis lesson.
          Offering a private session, even for just 15 minutes, can be too
          time-consuming, especially as your program grows. By integrating the
          trial into a regular session, you ensure there’s no additional time
          commitment required.
        </p>
        <h3 className={commonStyles["sub-heading"]}>
          Automate the Sign-Up Process
        </h3>
        <p className={commonStyles["passage"]}>
          To streamline the process, it’s important to have an automated system
          for free trial sign-ups and follow-ups. This minimizes the time spent
          on administrative tasks and ensures a smooth experience for parents
          and children alike.
        </p>
        <h3 className={commonStyles["sub-heading"]}>
          One Free Session is Sufficient
        </h3>
        <p className={commonStyles["passage"]}>
          We’ve found that one free session is usually enough to convince
          potential members to join our tennis program. After experiencing the
          quality of our coaching and the fun of our sessions, most participants
          are eager to sign up. If your program delivers a great experience, one
          session is all it takes to convert interest into long-term commitment.
        </p>
      </div>
      <div className="mt-5">
        <Image
          layout="responsive"
          width={16}
          height={9}
          src="/images/blogs/couples-tennis.jpg"
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="mt-5">
        <h3 className={commonStyles["sub-heading"]}>
          Free Trials Not Applicable to Tennis Camps
        </h3>
        <p className={commonStyles["passage"]}>
          Our tennis camps are designed to be flexible, allowing participants to
          sign up for single days as they wish. Offering free trials for camps
          could lead to an unsustainable number of children attending without
          covering costs. Instead, our free trials are focused on term-time
          programs, where participants are more likely to commit long-term.
        </p>
      </div>
      <div className="mt-5">
        <h3 className={commonStyles["sub-heading"]}>
          Debunking Myths About Free Trials
        </h3>
        <p className={commonStyles["passage"]}>
          Some might argue that offering something for free diminishes its
          value, makes a club seem desperate, or that people will take advantage
          without returning. However, we view it differently. Offering a free
          trial isn’t about devaluing our services—it’s about demonstrating
          confidence in the quality of our tennis program. By allowing potential
          members to experience a session at no cost, we’re essentially saying,
          “We know you’ll love it, and we’re confident you’ll want to continue.”
        </p>
        <p className={commonStyles["passage"]}>
          The success of our program supports this belief, with many children
          who attend a free trial going on to become long-term members of our
          club. A well-executed free trial is not only a marketing tool but also
          a testament to the quality and appeal of what we offer.
        </p>
      </div>
    </div>
  );
};

export default GrowingOurTennis;
