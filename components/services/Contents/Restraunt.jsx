import React from "react";
import CommonStyles from "../css/CommonStyle.module.css";
import PaddleCoachingStyles from "../css/PaddleCoaching.module.css";
import Image from "next/image";

const Restaurant = () => {
  return (
    <div>
      <Image
        layout="responsive"
        width={16}
        height={9}
        src="/images/services/restaurant/main.jpg"
        className="img-fluid"
        alt="Squash lessons"
      />
      <div className="mt-3">
        <h1 className={CommonStyles["heading"]}>Restaurant</h1>
        <div className="mt-4">
          <h3 className={CommonStyles["sub-heading"]}>
            Discover Our Premier Restaurant
          </h3>
        </div>
        <div className="mt-4">
          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            Welcome to Tennis & Country Club, where exceptional dining meets a
            sophisticated atmosphere. Discover a culinary experience that
            combines exquisite cuisine, top-notch service, and an inviting
            ambiance.
          </p>

          <p className={`mb-0 mt-3 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>
              McGettigan’s: Savor the Perfect Blend : &nbsp;
            </span>
            McGettigan’s Combines Traditional Pub Charm with Sophisticated
            Dining, Offering a Diverse Menu of Classic and Contemporary Dishes
            in a Lively and Welcoming Atmosphere.”
          </p>
          <p className={`mb-0 mt-3 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>
              Al Baharat Restaurant : &nbsp;
            </span>
            Indulge in Authentic Flavors: Al Baharat Delivers an Exquisite
            Journey Through the Indian Subcontinent with a Rich Selection of
            North and South Indian Delicacies and Regional Specialties.
          </p>

          <ul className="mt-3">
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Exquisite Cuisine : &nbsp;
                </span>
                Delight in our diverse menu featuring high-quality dishes
                crafted with fresh, locally sourced ingredients. From gourmet
                appetizers to sumptuous mains and decadent desserts, our
                offerings cater to all taste preferences.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Sophisticated Atmosphere :
                </span>
                Enjoy your meal in a beautifully designed space that blends
                modern elegance with comfort. Our restaurant’s chic decor and
                ambient lighting create the perfect backdrop for any dining
                occasion.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Seasonal Menus :
                </span>
                Savor our seasonal menus that highlight the best ingredients
                each season has to offer. Our rotating specials ensure you
                experience new and exciting flavors throughout the year.
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
                  src="/images/services/restaurant/restaurant-1.jpg"
                  className={"img-fluid " + CommonStyles["object-fit-covered"]}
                />
              </div>
            </div>
          </div>

          <ul className="mt-3">
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Outstanding Service : &nbsp;
                </span>
                We are dedicated to providing exceptional service. Our
                professional staff is committed to making every visit memorable
                with attentive and personalized service.
              </p>
            </li>
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Curated Wine Selection :
                </span>
                Enhance your dining experience with our curated wine list.
                Featuring a range of fine wines from around the world, our
                selection is designed to complement our menu perfectly.
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
                  src="/images/services/restaurant/restaurant-2.jpg"
                  className={"img-fluid " + CommonStyles["object-fit-covered"]}
                />
              </div>
            </div>
          </div>

          <ul className="mt-5">
            <li>
              <p className={`mb-0 ${CommonStyles["passage"]}`}>
                <span className={CommonStyles["bold-text"]}>
                  Private Dining Experiences : &nbsp;
                </span>
                Host your next event in style with our private dining options.
                Whether for a corporate gathering, family celebration, or
                intimate dinner, our private rooms offer a unique and exclusive
                setting.
              </p>
            </li>
          </ul>

          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            Experience the best in dining .Join us for a memorable meal and
            discover why we are a favorite for fine cuisine and exceptional
            service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
