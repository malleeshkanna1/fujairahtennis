import React from "react";
import commonStyles from "../../services/css/CommonStyle.module.css";
import Image from "next/image";

const UaeSportsDay = () => {
  return (
    <div>
      <p className={commonStyles["passage"]}>
        <span className={commonStyles["bold-text"]}>FUJAIRAH : </span>
        The United Arab Emirates commemorated unity, athleticism, and
        camaraderie, marking the lively spirit of UAE Sports Day. The activity
        was a hit with everyone, demonstrating how sports can bring people
        together regardless of cultural, linguistic, or national differences.
        This yearly gathering not only encourages good health but also
        strengthens the bond and sense of unity among locals and inhabitants.
      </p>
      <p className={commonStyles["passage"]}>
        Mr. Mohsen from FMAC took charge of the swimming activity, which proved
        to be truly inspiring for young swimmers ranging from children to
        teenagers. Swimmers in the pool aim for excellence, constantly pushing
        themselves to exceed their limits and set new personal records.
      </p>

      <p className={commonStyles["passage"]}>
        Besides swimming, everyone had a great time participating in additional
        activities, which also helped in forming new friendships, strengthening
        existing bonds, and building connections with like-minded individuals.
      </p>

      <div className="mt-4">
        <Image
          layout="responsive"
          width={16}
          height={9}
          src="/images/blogs/UAE-Sports-Day-2024.jpg"
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="mt-5">
        <p className={commonStyles["passage"]}>
          Coach Atef leads the Padel Tennis activity, where participants
          demonstrate an adrenaline surge, showcasing their skill,
          determination, and unwavering passion for the game. The doubles match
          concluded with the team securing some incredible prizes.
        </p>
        <p className={commonStyles["passage"]}>
          Embracing the values of unity, athleticism, and inclusivity that
          define the nation. The UAE Sports Day event demonstrates the potential
          of sports to unite people and pave the way for a promising future.The
          Tennis and Country Club Fujairah participated in the event by offering
          various sports activities such as Swimming, Tennis, Table Tennis,
          Padel Tennis, and Squash.
        </p>
        <p className={commonStyles["passage"]}>
          The Club’s appeal extends beyond the realm of sports. there’s always
          something exciting happening at the Club. and TCCF is the perfect
          place to connect with like-minded individuals, forge new friendships,
          and create lasting memories.
        </p>
      </div>
    </div>
  );
};

export default UaeSportsDay;
