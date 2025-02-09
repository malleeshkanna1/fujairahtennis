import React from "react";
import CommonStyles from "../css/CommonStyle.module.css";
import Image from "next/image";

const Jacuzzi = () => {
  return (
    <div>
      <Image
        layout="responsive"
        width={16}
        height={9}
        src="/images/services/jacuzzi.jpg"
        className="img-fluid"
        alt="Squash lessons"
      />
      <div className="mt-3">
        <h1 className={CommonStyles["heading"]}>Jacuzzi</h1>
        <div className="mt-4">
          <h3 className={CommonStyles["sub-heading"]}>
            Indulge in Relaxation with Our Jacuzzi at our Tennis and Country
            Club
          </h3>
        </div>
        <div className="mt-4">
          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            Experience the ultimate in relaxation and rejuvenation with our
            luxurious jacuzzi at Tennis & Country Club Fujairah. Whether you’re
            unwinding after a tennis match, a workout, or simply enjoying a day
            of leisure, our jacuzzi provides a perfect escape to soothe your
            muscles and revitalize your senses.
          </p>

          <p className={`mb-0 mt-3 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>
              Unwind in Luxury: &nbsp;
            </span>
            Our Jacuzzi Offers a Heated Oasis with Soothing Jets for Ultimate
            Relaxation, Muscle Relief, and Stress Reduction.
          </p>

          <div className="mt-4">
            <h3 className={CommonStyles["sub-heading"]}>
              Why Choose Our Jacuzzi?
            </h3>
          </div>

          <ul className="mt-3">
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Soothing Hydrotherapy : &nbsp;
                </span>
                Our jacuzzi is designed to offer a therapeutic hydrotherapy
                experience with powerful jets that provide a soothing massage to
                your body. Enjoy the benefits of reduced muscle tension,
                improved circulation, and stress relief.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Ultimate Comfort :
                </span>
                Featuring comfortable seating and an inviting atmosphere, our
                jacuzzi is the perfect place to relax and unwind. The warm,
                bubbling water creates a calming environment that helps you
                de-stress and rejuvenate.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Health Benefits :
                </span>
                Regular use of our jacuzzi can support various health benefits,
                including enhanced blood flow, muscle relaxation, and improved
                joint flexibility. It’s an excellent way to recover after
                physical activities or simply to pamper yourself.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Luxurious Experience :
                </span>
                The jacuzzi is a key feature of our wellness amenities,
                providing a premium relaxation experience within our Tennis and
                Country Club. Enjoy the high-quality facilities and exceptional
                service in a serene and well-maintained setting.
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
                  src="/images/facilities/jacuzzi-2.jpg"
                  className={"img-fluid " + CommonStyles["object-fit-covered"]}
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className={CommonStyles["sub-heading"]}>
              How to Enjoy the Jacuzzi
            </h3>
          </div>

          <ul className="mt-3">
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Usage Guidelines : &nbsp;
                </span>
                For optimal comfort, we recommend spending no more than 15-20
                minutes per session in the jacuzzi. This helps prevent
                overheating and ensures a relaxing experience.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>Hydration :</span>
                Stay hydrated before and after your jacuzzi session to support
                overall well-being and maintain hydration levels.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Safety First :
                </span>
                Ensure you follow our safety guidelines, including avoiding
                alcohol consumption before use and taking breaks as needed.
              </p>
            </li>
          </ul>

          <div className="mt-4">
            <h3 className={CommonStyles["sub-heading"]}>
              Jacuzzi Access and Availability
            </h3>
          </div>

          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>
              Hours of Operation : &nbsp;
            </span>
          </p>
          <p className={`mb-0 mt-3 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>Weekdays : &nbsp;</span>
            7:00 AM - 9:00 PM
          </p>
          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>Weekends : &nbsp;</span>
            8:00 AM – 10:00 PM
          </p>

          <div className="mt-4">
            <h3 className={CommonStyles["sub-heading"]}>Booking :</h3>
          </div>

          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>
              Reservation : &nbsp;
            </span>
            While our jacuzzi is generally available on a first-come,
            first-served basis, we offer reservation options for special
            occasions. Contact our front desk at &nbsp;
            <a
              href="tel:+97192244880"
              className={CommonStyles["green-highlight"]}
            >
              97192244880 
            </a> &nbsp; for more
            information. <br/>
            Location:
          </p>
          <p className={`mb-0 mt-3 ${CommonStyles["passage"]}`}>Located conveniently within our club’s wellness area, easily accessible for all members.</p>
          <div className="mt-4">
            <h3 className={CommonStyles["sub-heading"]}>
              Experience the Best in Relaxation
            </h3>
          </div>

          <p className={`mb-0 mt-4 ${CommonStyles["passage"]}`}>
            At our Tennis & Country Club Fujairah, our jacuzzi is more than just
            a feature; it’s a sanctuary of relaxation designed to enhance your
            overall well-being. Whether you’re finishing up a game, a workout,
            or just seeking a moment of tranquility, our jacuzzi offers a
            luxurious escape that you’ll love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jacuzzi;
