import React from "react";
import PrivacyPolicyStyles from "./PrivacyPolicy.module.css";
import CommonStyles from "../services/css/CommonStyle.module.css";
import ContactForm from "../Contact/ContactForm";

const PrivacyPolicy = () => {
  return (
    <div className={PrivacyPolicyStyles["bg-lightwhite"]}>
      <div className={`${PrivacyPolicyStyles["policy-container"]} container`}>
        <h1 className={`text-center ${CommonStyles["heading"]}`}>
          Tennis & Country Club Privacy Policy
        </h1>
        <div className="mt-5"> </div>
        <p className={CommonStyles["passage"]}>
          Welcome to the Tennis & Country Club Privacy Policy. We value your
          privacy and are committed to protecting your personal information.
          This policy outlines how we collect, use, and safeguard your data.
          <b>
            {" "}
            Tennis & Country Club, based in Tennis & Country Club Fujairah,
            Fujairah, United Arab Emirates
          </b>
          , adheres to the highest standards of data protection.
        </p>
        <div className="mt-5"> </div>
        <h2 className={CommonStyles["sub-heading"]}>Data We Collect</h2>
        <p className={`mt-4 mb-0 ${CommonStyles["passage"]}`}>
          At Tennis & Country Club, we collect the following types of personal
          data:
        </p>
        <p className={`mb-0 ${CommonStyles["passage"]}`}>
          <span className={CommonStyles["bold-text"]}>Personal Details :</span>
          Name, email address, phone number, and date of birth.
        </p>
        <p className={`mb-0 ${CommonStyles["passage"]}`}>
          <span className={CommonStyles["bold-text"]}>
            Membership Information :
          </span>
          Membership status, renewal dates, and payment records.
        </p>
        <p className={`mb-0 ${CommonStyles["passage"]}`}>
          <span className={CommonStyles["bold-text"]}>
            Booking Information :{" "}
          </span>
          Details of court bookings, event registrations, and class enrollments.
        </p>
        <p className={`mb-0 ${CommonStyles["passage"]}`}>
          <span className={CommonStyles["bold-text"]}>Usage Information: </span>
          Data on your interactions with our website and services, including IP
          addresses and browsing behavior.
        </p>
        <div className="col-lg-9 col-12">
          <div className="mt-5"> </div>
          <h2 className={CommonStyles["sub-heading"]}>How We Use Your Data</h2>
          <p className={`mt-4 ${CommonStyles["passage"]}`}>
            We use your personal information to:
          </p>
          <p className={` ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>
              Manage Memberships and Bookings :{" "}
            </span>
            Facilitate court reservations, event sign-ups, and membership
            management.
          </p>
          <p className={` ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>
              Enhance User Experience :
            </span>
            Provide personalized services and communicate updates, offers, and
            news. Improve Our Services: Analyze user feedback and usage patterns
            to refine and enhance our offerings.
          </p>
          <p className={` ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>
              Legal Obligations :{" "}
            </span>
            Comply with legal requirements and address any disputes. Data
            Sharing and Security Your privacy is our priority. We ensure the
            security of your personal information through robust measures.
          </p>
          <p className={` ${CommonStyles["passage"]}`}>
            We may share your data with:
          </p>
          <p className={` ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>
              Third-Party Service Providers:
            </span>
            Partners assisting with payment processing, communications, and
            other essential services.
          </p>
          <p className={`mb-0 ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>
              Legal Obligations:
            </span>
            In compliance with legal processes or to protect our rights.
          </p>
          <p className={`${CommonStyles["passage"]}`}>
            Your Data Rights.You have the following rights regarding your
            personal data:
          </p>
          <p className={` ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>
              Access and Correction:
            </span>
            Request access to or correction of your personal information.
          </p>
          <p className={` ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>Data Deletion:</span>
            Request the deletion of your data where applicable.
          </p>
          <p className={` ${CommonStyles["passage"]}`}>
            <span className={CommonStyles["bold-text"]}>Opt-Out:</span>
            Withdraw consent for marketing communications and data processing.
          </p>
          <div className="mt-5"> </div>
          <h2 className={CommonStyles["sub-heading"]}>Cookies and Tracking</h2>
          <p className={`mt-4 ${CommonStyles["passage"]}`}>
            We use cookies to enhance your experience on our website. Cookies
            help us understand your preferences and analyze site usage. You can
            manage your cookie preferences via your browser settings.
          </p>
          <div className="mt-5"> </div>
          <h2 className={CommonStyles["sub-heading"]}>Data Retention</h2>
          <p className={`mt-4 ${CommonStyles["passage"]}`}>
            We retain your personal data only for as long as necessary to
            fulfill the purposes it was collected for or as required by law.
          </p>
          <div className="mt-5"> </div>
          <h2 className={CommonStyles["sub-heading"]}>Contact Us</h2>
          <p className={`mt-4 ${CommonStyles["passage"]}`}>
            For any questions or concerns about your personal data, please
            contact us:
          </p>
        </div>
        <ContactForm type={2} />
        <div className="mt-5"> </div>
        <h2 className={CommonStyles["sub-heading"]}>Policy Updates</h2>
        <p className={`mt-4 ${CommonStyles["passage"]}`}>
          We may update this Privacy Policy from time to time. Significant
          changes will be communicated through our website or via email.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
