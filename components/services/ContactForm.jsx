"use client";
import React, { useState } from "react";
import ContactUsStyles from "./css/ContactUsStyles.module.css";
import CommonStyle from "./css/CommonStyle.module.css";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

const ContactForm = ({applyFor}) => {
  const [TermsAndConditions, SetTermsandConditions] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    message: "",
    applyFor 
  };

  const validationSchema = yup.object({
    name: yup.string().required("Name is Required"),
    email: yup
      .string()
      .email("Please Enter Valid Email")
      .required("Email is Required"),
    message: yup.string().required("Message is Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (TermsAndConditions) {
      console.log(values);
      resetForm();
    } else {
      toast.error("Please Agree Terms & Conditions", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  function AgreeTerms(e) {
    SetTermsandConditions(e.target.checked);
  }

  return (
    <div className={ContactUsStyles["contact-container"]}>
      <div className="mt-4">
        <div className="row">
          <div className="col-md-6 col-lg-12 col-12 ">
            <h3>Get in Touch</h3>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {() => (
                <Form>
                  <div className="row">
                    <div className="col-12">
                      <div className={ContactUsStyles["input-container"]}>
                        <Field type="text" name="name" placeholder="Name" />
                      </div>

                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-danger small mt-2"
                      />
                    </div>
                    <div className="col-12 mt-3">
                      <div className={ContactUsStyles["input-container"]}>
                        <Field type="text" name="email" placeholder="Email" />
                      </div>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger small mt-2"
                      />
                    </div>
                    <div className="col-12 mt-3">
                      <div className={ContactUsStyles["input-container"]}>
                        <Field
                          type="text"
                          name="message"
                          placeholder="Message"
                        />
                      </div>
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-danger small mt-2"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className={`mt-3 ${ContactUsStyles["submit-btn"]}`}
                  >
                    <i className="bx bx-send"></i> GET IN TOUCH
                  </button>
                  <label
                    className={`mt-3 ${ContactUsStyles["custom-checkbox"]}`}
                  >
                    <input type="checkbox" onChange={(e) => AgreeTerms(e)} />
                    <span className={ContactUsStyles["checkmark"]}></span>
                    <small>
                      {" "}
                      I agree to the <u> privacy policy</u>.
                    </small>
                  </label>
                </Form>
              )}
            </Formik>
          </div>
          <div className="col-md-6 col-lg-12 col-12 mt-5 mt-md-0 mt-lg-5 ">
            <h3>Contact Info</h3>
            <div className="mt-3">
              <i className="bx bx-map h5 text-primary"></i>  &nbsp;
              <span className={CommonStyle['nrm-text']}>Tennis & Country Club Fujairah, Fujairah, United Arab Emirates</span>
            </div>
            <div className="mt-3">
              <i className="bx bx-envelope h5 text-primary"></i>  &nbsp;
              <a className={`text-decoration-none  ${CommonStyle['nrm-text']}`} href="mailto:info@fujairahtennisclub.ae">info@fujairahtennisclub.ae</a>
            </div>
            <div className="mt-3">
              <i className="bx bx-phone h5 text-primary"></i>  &nbsp;
              <a className={`text-decoration-none  ${CommonStyle['nrm-text']}`} href="tel:+97192244880">+97192244880</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
