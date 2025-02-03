import React from "react";
import FooterStyles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={FooterStyles["footer-container"]}>
      <div className="container-lg pt-5 pb-5">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-12 col-md-4 d-flex align-items-center justify-content-center ">
                    <img
                      className={FooterStyles["company-logo"]}
                      src="/images/common/logo.png"
                    />
                  </div>
                  <div className="col-12 col-md-8">
                    &nbsp;{" "}
                    <p className={FooterStyles["company-name"]}>
                      Tennis & country club Fujairah
                    </p>
                  </div>

                  <p className={FooterStyles["headings"]}>Address</p>
                  <div className={FooterStyles["menus"]}>
                    <i className="bx bx-map"></i> Tennis & Country Club
                    Fujairah, Fujairah, United Arab Emirates
                  </div>
                  <div className="mt-4">
                    <p className={FooterStyles["headings"]}>Newsletter</p>
                    <div className={FooterStyles["input-container"]}>
                      <i className="bx bx-envelope"></i>
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter Your Email"
                      />
                    </div>

                    <label className={FooterStyles["custom-checkbox"]}>
                      <input type="checkbox" />
                      <span className={FooterStyles["checkmark"]}></span>
                    </label>
                    <span className={FooterStyles["termsandcond"]}>
                      I agree to the <u>Privacy Policy</u>.
                    </span>

                    <button
                      type="submit"
                      className={FooterStyles["submit-btn"]}
                    >
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4 d-block d-md-flex justify-content-center">
                <div>
                  <p className={FooterStyles["menu-heading"]}>QUICK LINKS</p>
                  <div className="mt-4">
                    <ul className={FooterStyles["footer-links"]}>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link href="/coaches">Coaches</Link>
                      </li>
                      <li>
                        <Link href="/facilities">Facilities</Link>
                      </li>
                      <li>
                        <Link href="/">Events</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="row">
              <div className="col-md-6 mt-4">
                <p className={FooterStyles["menu-heading"]}>OUR PROGRAMS</p>
                <div className="mt-4">
                  <ul className={FooterStyles["footer-links"]}>
                    <li>
                      <Link href="/services/tennis-coaching">
                        Tennis Coaching
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/swimming-coaching">
                        Swimming Coaching
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/paddle-coaching">
                        Paddle Coaching
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/gym-training">Gym Training</Link>
                    </li>
                    <li>
                      <Link href="/services/summer-camp">Summer Camp</Link>
                    </li>
                    <li>
                      <Link href="/services/restaurant">Restaurant</Link>
                    </li>
                    <li>
                      <Link href="/services/gymnastic-class">
                        Gymnastic Class
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/kickboxing-class">
                        Kickboxing Class
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/personal-training">
                        Personal Training
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/ballet-classes">
                        Ballet Classes
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/squash-lessons">
                        Squash Lessons
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <p className={FooterStyles["menu-heading"]}>SOCIAL</p>
                <div className="mt-4">
                  <ul className={FooterStyles["footer-links"]}>
                    <li className={FooterStyles["list-style-none"]}>
                      <i className="bx bxl-facebook"></i> <a target="_blank" href="https://www.facebook.com/TennisCountryClubFujairah">Facebook</a> 
                    </li>
                    <li className={FooterStyles["list-style-none"]}>
                      <i className="bx bxl-tiktok"></i> <a target="_blank" href="/">Tiktok</a> 
                    </li>
                    <li className={FooterStyles["list-style-none"]}>
                      <i className="bx bxl-instagram"></i> <a target="_blank" href="https://www.instagram.com/tccfjr/?hl=en">Instagram</a> 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-4">
            <p className={FooterStyles["menu-heading"]}>SAY HELLO</p>
            <div className="mt-4">
              <ul className={FooterStyles["footer-links"]}>
                <li className={FooterStyles["list-style-none"]}>
                  <i className="bx bx-envelope"></i>{" "}
                  <a href="mailto:info@fujairahtennisclub.ae">
                    info@fujairahtennisclub.ae
                  </a>
                </li>
                <li className={FooterStyles["list-style-none"]}>
                  <i className="bx bx-phone"></i>{" "}
                  <a href="tel:+97192244880">+97192244880</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
