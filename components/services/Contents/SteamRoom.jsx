import React from "react";
import CommonStyles from "../css/CommonStyle.module.css";
import Image from "next/image";

const SteamRoom = () => {
  return (
    <div>
      <Image
        layout="responsive"
        width={16}
        height={9}
        src="/images/services/steam-room.jpg"
        className="img-fluid"
        alt="Squash lessons"
      />
      <div className="mt-3">
        <h1 className={CommonStyles["heading"]}>steam room</h1>

        <div className="mt-4">
          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            Our steam room is designed to provide a serene and rejuvenating
            experience, perfect for enhancing relaxation and promoting recovery.
            Featuring comfortable bench seating and a fully tiled, high-humidity
            environment, it offers a soothing ambiance with warm temperatures
            ideal for unwinding after a workout or simply taking a moment of
            tranquility. The steam room’s high humidity and gentle heat work
            together to relax tense muscles, improve circulation, and promote
            skin hydration, making it an excellent option for post-exercise
            recovery. Whether you’re looking to ease muscle soreness or enjoy
            the therapeutic effects of steam, our steam room provides the
            perfect balance of relaxation and wellness. For your comfort and
            safety, we recommend sessions lasting 15-20 minutes and staying
            well-hydrated during and after your visit to ensure a refreshing and
            revitalizing experience. The steam room is a vital part of our
            wellness offerings, providing both physical and mental benefits to
            help you recharge after a busy day at the club.
          </p>
          <p className={`mb-0 mt-3 ${CommonStyles["passage"]}`}>
            Discover the Rejuvenating Benefits of Our Steam Room at our Tennis &
            Country Club Fujairah.
          </p>
          <p className={`mb-0 mt-3 ${CommonStyles["passage"]}`}>
            Immerse yourself in ultimate relaxation with our state-of-the-art
            steam room at Tennis & Country Club Fujairah,. Perfectly designed to
            enhance your wellness routine, our steam room provides a serene
            escape to unwind and recover after your activities.
          </p>

          <p className={`mb-0 mt-3 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>
              Refresh and Revitalize: &nbsp;
            </span>
            Our Steam Room at the Tennis and Country Club Offers a Humid Retreat
            with Temperatures of 110-120°F, Perfect for Skin Health,
            Detoxification, and Respiratory Relief.
          </p>

          <div className="mt-4">
            <h3 className={CommonStyles["sub-heading"]}>
              Why Our Steam Room Stands Out
            </h3>
          </div>

          <ul className="mt-3">
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Deep Relaxation : &nbsp;
                </span>
                Our steam room creates a tranquil environment with high humidity
                and warm temperatures, ideal for relieving stress and relaxing
                your muscles. Enjoy a calming experience that helps melt away
                the tension of the day.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Improved Circulation :
                </span>
                The gentle heat in our steam room promotes better blood flow,
                aiding in muscle recovery and reducing soreness. It’s an
                excellent choice for athletes and fitness enthusiasts looking to
                boost their recovery process.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Skin Hydration :
                </span>
                The steam room’s moist heat helps to deeply hydrate your skin,
                enhancing its texture and giving it a refreshed, healthy glow.
                Regular use can improve skin health and appearance.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Luxurious Comfort :
                </span>
                Featuring comfortable bench seating and a fully tiled,
                well-maintained environment, our steam room offers a clean and
                inviting space for relaxation. It’s designed to provide a
                soothing experience where you can fully unwind
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
                  src="/images/facilities/steam-room2.jpg"
                  className={"img-fluid " + CommonStyles["object-fit-covered"]}
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className={CommonStyles["sub-heading"]}>
            Tips for Enjoying the Steam Room
            </h3>
          </div>

          <ul className="mt-3">
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                Session Duration : &nbsp;
                </span>
                Limit your steam room sessions to 15-20 minutes to avoid overheating and ensure a comfortable experience.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>Stay Hydrated :</span>
                Drink plenty of water before and after your steam room visit to stay hydrated and support your body’s natural processes.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                Frequency :
                </span>
                For optimal benefits, consider incorporating regular steam room visits into your wellness routine to support relaxation, circulation, and recovery.
              </p>
            </li>
          </ul>

          <div className="mt-4">
            <h3 className={CommonStyles["sub-heading"]}>
            Experience the Ultimate in Relaxation
            </h3>
          </div>

          <p className={`mb-0 mt-4 ${CommonStyles["passage"]}`}>
          At Our Tennis and Country Club, our steam room is an integral part of our commitment to your health and well-being. Whether you’re finishing up a vigorous workout or simply looking for a peaceful retreat, our steam room offers the perfect setting for relaxation and rejuvenation. Visit us today and enjoy the benefits of our luxurious steam room.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SteamRoom;
