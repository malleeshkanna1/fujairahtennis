"use client";

import React, { useState } from "react";
import FooterStyles from "./Footer.module.css";
import { toast } from "react-toastify";
import Link from "next/link";

const NewsletterForm = ({mode}) => {
  const [NewsLetterMail, SetNewsletterMail] = useState("");
  const [TermsCheck, SetTermsCheck] = useState(false);

  const handleSubmit = () => {
    if (NewsLetterMail == "") {
      toast.error("Please enter your E-mail");
    } else {
      if (TermsCheck) {
        console.log(NewsLetterMail);
      } else {
        toast.error("Please agree to the Privacy Policy");
      }
    }
  };

  return (
    <div className="mt-4">
      {mode != 'modal' && <p className={FooterStyles["headings"]}>Newsletter</p>}
      <div className={FooterStyles["input-container"]}>
        <i className="bx bx-envelope"></i>
        <input
          type="text"
          name="email"
          onChange={(e) => SetNewsletterMail(e.target.value)}
          placeholder="Enter Your Email"
        />
      </div>
      <div className="d-flex align-items-center mt-2 mb-3">
        <label className={FooterStyles["custom-checkbox"]}>
          <input
            onChange={(e) => SetTermsCheck(e.target.checked)}
            type="checkbox"
          />
          <span className={mode != 'modal' ? FooterStyles["checkmark"] : FooterStyles["checkmark2"]}></span>
        </label>
        <small className={`${FooterStyles["termsandcond"]} ${mode=='modal' ? 'text-black':''} `}>
          I agree to the{" "}
          <Link className={mode=='modal' ?FooterStyles["link-white"]: "text-white"} href="/privacy-policy">
            Privacy Policy
          </Link>
          .
        </small>
      </div>

      <button
        type="submit"
        onClick={() => handleSubmit()}
        className={FooterStyles["submit-btn"]}
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

export default NewsletterForm;
