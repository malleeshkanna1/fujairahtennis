import React from "react";
import commonStyles from "../../services/css/CommonStyle.module.css";
import Image from "next/image";

const SquashChampJunior = () => {
  return (
    <div>
      <p className={commonStyles["passage"]}>
        Behrozian also expressed his pride at being a part of the National
        Sports Day festivities in its ongoing mission to help realize the vision
        of the UAE’s leadership by continuing to support aspiring athletes and
        wider society.
      </p>
      <p className={commonStyles["passage"]}>
        The Tennis and Country Club Fujairah organizes a lot of sports and other
        extracurricular activities to mark special occasions of the UAE and
        world which bring the community together in Fujairah.
      </p>

      <p className={commonStyles["passage"]}>
        "The UAE National Sports Day promotes sportsmanship, unity in diversity,
        and tolerance among people from different countries, and drives a
        message of togetherness through sports,” Behrozian added.
      </p>
      <p className={commonStyles["passage"]}>
        Sharief Habib Al Awadhi, Director General of the Fujairah Free Zone,
        Chairman of the Executive Committee for National Day of Fujairah, was
        the guest of honor for the UAE National Sports Day celebrations at the
        club.
      </p>
      <p className={commonStyles["passage"]}>
        “Practicing sports and making it a way of life will remain a top
        priority for our leaders as reflected in the unlimited support,
        initiatives and programmed that have had a great impact on spreading the
        awareness of the importance of sports, ” said Awadhi.
      </p>
      <div className="mt-4">
        <Image
          layout="responsive"
          width={16}
          height={9}
          src="/images/blogs/FTCC-2.jpg"
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="mt-5">
        <p className={commonStyles["passage"]}>
          Hailing the success of National Sports Day activities held at Tennis
          and Country Club Fujairah, Awadhi said: “This had reflected positively
          on the success of the event and the many positive messages it sent.
          Such events promote the vision of our wise leadership.”
        </p>

        <p className={commonStyles["passage"]}>
          Hania Reggi, Senior Sales and Marketing Manager at Tennis and Country
          Club Fujairah, said: “The National Sports Day brings together various
          sporting and fitness communities under the UAE flag and emphasizes the
          value of leading a healthy lifestyle through participating in various
          physical activities.
        </p>

        <p className={commonStyles["passage"]}>
          “Regular physical activity is important for a healthy lifestyle and
          the Federation places significant importance in both leading by
          example and promoting the mental and physical benefits of exercise,”
          Hania added.
        </p>
        <p className={commonStyles["passage"]}>
          She also thanked Al Sharq Hospital Fujairah for organizing a free
          medical check-up camp and ensuring the health of the members and
          visitors of the National Sports Day event. Success of the National
          Sports Day festivities.
        </p>
      </div>
    </div>
  );
};

export default SquashChampJunior;
