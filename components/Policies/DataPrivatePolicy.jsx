import React from "react";
import PrivacyPolicyStyles from "./PrivacyPolicy.module.css";
import CommonStyles from "../services/css/CommonStyle.module.css";
import ContactForm from "../Contact/ContactForm";

const DataPrivatePolicy = () => {
  return (
    <div className={PrivacyPolicyStyles["bg-lightwhite"]}>
      <div className={`${PrivacyPolicyStyles["policy-container"]} container`}>
        <h1 className={`text-center ${CommonStyles["heading"]}`}>
          Contact Us for Privacy Policy Matters
        </h1>
        <div className="mt-5"> </div>
        <p className={CommonStyles["passage"]}>
          We Value Your Privacy At Tennis & Country Club, protecting your
          personal information is our utmost priority. If you have any questions
          or concerns about our Privacy Policy or data handling practices, we
          are here to assist you.
        </p>
        <div className="mt-3"> </div>

        <div className="col-lg-12 col-12">
          <div className="mt-5"> </div>
          <h2 className={CommonStyles["sub-heading"]}>How to Contact Us</h2>
          <p className={`mt-4 ${CommonStyles["passage"]}`}>
            For questions regarding our Privacy Policy or data protection
            issues, please reach out to our Data Protection Officer:
          </p>
          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>Email :</span>
            info@fujairahtennisclub.ae
          </p>
          <p className={` ${CommonStyles["passage"]}`}>
            For any inquiries related to data privacy, access requests, or
            concerns about your information.
          </p>
          <p className={` ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>Postal Address :</span>{" "}
            <br />
            Tennis & Country Club Fujairah, Fujairah, United Arab Emirates
          </p>

          <ContactForm type={2} />

          <p className={` mt-3 ${CommonStyles["passage"]}`}>
            Send us a letter for formal requests or detailed queries about your
            personal data and privacy rights.
          </p>
          <div className="mt-4"> </div>
          <h2 className={CommonStyles["sub-heading"]}>
            Our Data Protection Commitment
          </h2>
          <p className={`mt-3 ${CommonStyles["passage"]}`}>
            We are committed to adhering to all relevant data protection laws,
            including the General Data Protection Regulation (GDPR) and local
            regulations. Our Privacy Policy provides detailed information on how
            we collect, use, and safeguard your personal information. For full
            details, please view our Privacy Policy on our website.
          </p>
          <p className={`mt-3 ${CommonStyles["passage"]}`}>Your Rights</p>
          <p className={`mt-3 ${CommonStyles["passage"]}`}>
            You have several rights regarding your personal data, including:
          </p>

          <div className="mt-4"> </div>
          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>Access :</span> Request
            a copy of your personal data held by us.
          </p>
          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>Correction :</span>{" "}
            Correct or update any inaccurate or incomplete information.
          </p>
          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>Deletion :</span>{" "}
            Request the removal of your data when no longer necessary.
          </p>
          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>Objection :</span>{" "}
            Object to our processing of your data under certain conditions.
          </p>

          <div className="mt-5"> </div>
          <h2 className={CommonStyles["sub-heading"]}>
            Feedback and Complaints
          </h2>
          <p className={`mt-4 ${CommonStyles["passage"]}`}>
            If you are dissatisfied with how we handle your personal information
            or if we don’t address your privacy concerns satisfactorily, you may
            file a complaint with a data protection authority.
          </p>
          <p className={`mt-4 ${CommonStyles["passage"]}`}>
            Thank you for choosing Tennis & Country Club. We are dedicated to
            maintaining your privacy and ensuring a secure experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataPrivatePolicy;
