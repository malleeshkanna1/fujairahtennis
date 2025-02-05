import React from "react";
import commonStyles from "../../services/css/CommonStyle.module.css";
import Image from "next/image";

const NationalSportsDay = () => {
  return (
    <div>
      <p className={commonStyles["passage"]}>
        Tennis & Country Club Fujairah hosted the Junior Squash Championship,
        attracting a large number of players from across the UAE. Reflecting
        signs of growth in squash in the country, the U-9 and U-11 boys’ and
        girls’ categories witnessed a huge number of participants, including a
        new crop of players, who took to the court for the first time.
      </p>
      <p className={commonStyles["passage"]}>
        In the U-11 category, Kavyaa Doshi defeated Ahana More in a closely
        contested final.
      </p>

      <p className={commonStyles["passage"]}>
        Kairavi Sachdev won the U-15 title after overcoming Ahana More. Riya
        Ananthanpillai displayed her superior racket skills in securing the U-19
        girls’ title by defeating Kairavi Sachdev.
      </p>
     
      <div className="mt-4">
        <Image
          layout="responsive"
          width={16}
          height={9}
          src="/images/blogs/FTCC-Tennis-winners.jpg"
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="mt-5">
        <p className={commonStyles["passage"]}>
        Sheikh Ahmed Bin Hamad Bin Saif Al Sharqi also graced the occasion and took part in the sport activities.
        </p>

        <p className={commonStyles["passage"]}>
        The Tennis and Country Club Fujairah’s participation in the National Sports Day, which was first celebrated in 2015, aligns with its goal to increase awareness of sports, its health and wellbeing benefits, which positively impact society.
        </p>

        <p className={commonStyles["passage"]}>
        Kickboxing, a modern combat sport, and gymnastics for kids also drew a number of participants.


        </p>
        <p className={commonStyles["passage"]}>
        The young gymnasts performed acrobatic exercises on a special apparatus and demonstrated incredible balance, strength, and body control.
        </p>
        <p className={commonStyles["passage"]}>
        At the end of the events, the participants of National Sports Day were presented with medals and trophies.
        </p>
        <p className={commonStyles["passage"]}>
        <span className={commonStyles['bold-text']}>Abdul Ghafour Behrozian</span> , chairman of Tennis and Country Club Fujairah, expressed delight over the success of the National Sports Day festivities.
        </p>
      </div>
    </div>
  );
};

export default NationalSportsDay;
