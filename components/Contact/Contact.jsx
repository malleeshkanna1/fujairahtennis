import React from "react";
import CommonStyles from "../services/css/CommonStyle.module.css";
import ContactusStyles from "./Contactus.module.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div className="mt-3 container-lg">
        <p className={`mb-0 ${CommonStyles["passage"]}`}>
          <span className={CommonStyles["bold-text"]}>
            Welcome to Tennis & Country Club! &nbsp;
          </span>
          For any inquiries related to our premier tennis facilities, programs,
          memberships, or events, we're here to assist you. Get in touch with us
          through the following channels:
        </p>
        <div className="mt-5 mb-5">
          <div className="row">
            <div className="col-md-5">
              <p className={ContactusStyles.smallText}>Contact Us</p>
              <h1 className={ContactusStyles["intro-heading"]}>
                Have questions? <br /> Get in touch!
              </h1>
              <div className="mt-3">
                <p className={CommonStyles["passage"]}>
                  For detailed information about our tennis programs, membership
                  options, summer camps, or event bookings, please fill out our
                  contact form.Our friendly staff will get back to you as soon
                  as possible.
                </p>
              </div>
              <div className="mt-3">
                <h3>Contact Info</h3>
                <div className="mt-3">
                  <i className="bx bx-map h5 text-primary"></i> &nbsp;
                  <span className={CommonStyles["nrm-text"]}>
                    Tennis & Country Club Fujairah, Fujairah, United Arab
                    Emirates
                  </span>
                </div>
                <div className="mt-3">
                  <i className="bx bx-envelope h5 text-primary"></i> &nbsp;
                  <a
                    className={`text-decoration-none  ${CommonStyles["nrm-text"]}`}
                    href="mailto:info@fujairahtennisclub.ae"
                  >
                    info@fujairahtennisclub.ae
                  </a>
                </div>
                <div className="mt-3">
                  <i className="bx bx-phone h5 text-primary"></i> &nbsp;
                  <a
                    className={`text-decoration-none  ${CommonStyles["nrm-text"]}`}
                    href="tel:+97192244880"
                  >
                    +97192244880
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className={ContactusStyles["contact-container"]}>
                <div className="mt-4">
                  <ContactForm type={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className={ContactusStyles["map-container"]}>
          <iframe
            src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1sTennis+%26+Country+Club+Fujairah,+Fujairah,+United+Arab+Emirates!5e0!6i10"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="mt-3 mb-5">
        <div className="d-flex justify-content-center">
          <h2 className={ContactusStyles["underlined-text"]}>Follow us on</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4 ">
          <div className="d-flex gap-2">
            <a
              href="https://www.facebook.com/TennisCountryClubFujairah"
              target="_blank"
              className={ContactusStyles["social-btn"]}
            >
              <i className="bx bxl-facebook-circle fs-3"></i>
            </a>

            <a href="#" className={ContactusStyles["social-btn"]}>
              <i className="bx bxl-tiktok fs-3"></i>
            </a>

            <a
              href="https://www.instagram.com/tccfjr/?hl=en"
              target="_blank"
              className={ContactusStyles["social-btn"]}
            >
              <i className="bx bxl-instagram fs-3"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
