"use client";
import React, { useState } from "react";
import ContactUsStyles from "./Contactus.module.css";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import Link from "next/link";

const ContactForm = ({type}) => {
  const [TermsAndConditions, SetTermsandConditions] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const validationSchema = yup.object({
    name: yup.string().required("Name is Required"),
    phone: yup.number().required("Phone is Required"),
    subject: yup.string().required("Subject is Required"),
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
      toast.error("Please accept the terms of our Privacy Policy.", {
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
    <div className="row">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <div className="row">
              <div className="col-md-6 mt-md-4 mt-3">
                <div className={ContactUsStyles["input-container"]}>
                  <i className="bx bx-user"></i>
                  <Field type="text" name="name" placeholder="Name" />
                </div>

                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger small mt-2"
                />
              </div>
              <div className="col-md-6 mt-md-4 mt-3">
                <div className={ContactUsStyles["input-container"]}>
                  <i className="bx bx-envelope"></i>
                  <Field type="text" name="email" placeholder="Email" />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger small mt-2"
                />
              </div>
              <div className="col-md-6 mt-md-4 mt-3">
                <div className={ContactUsStyles["input-container"]}>
                  <i className="bx bx-phone"></i>
                  <Field type="text" name="phone" placeholder="Phone" />
                </div>
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-danger small mt-2"
                />
              </div>
              <div className="col-md-6 mt-md-4 mt-3">
                <div className={ContactUsStyles["input-container"]}>
                  <i className="bx bx-info-circle"></i>
                  <Field type="text" name="subject" placeholder="Subject" />
                </div>
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-danger small mt-2"
                />
              </div>
              <div className="col-md-12 mt-md-4 mt-3">
                <div
                  className={`align-items-start ${ContactUsStyles["input-container"]}`}
                >
                  <i className="bx bx-pencil mt-2"></i>
                  <Field as="textarea" name="message" placeholder="How can we help you? Feel free to get in touch!" />
                </div>
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-danger small mt-2"
                />
              </div>
            </div>
            <div className="d-block d-sm-flex justify-content-between">
              <button
                type="submit"
                className={`mt-3 ${ContactUsStyles["submit-btn"]}`}
              >
                <i className="bx bx-send"></i> GET IN TOUCH
              </button>
              <label className={`mt-3 ${ContactUsStyles["custom-checkbox"]}`}>
                <input type="checkbox" onChange={(e) => AgreeTerms(e)} />
                <span className={ContactUsStyles["checkmark"]}></span>
                <small>
                  {" "}
                  I agree that my submitted data is{" "}
                  <Link href={type==1?"/privacy-policy":'/data-private-policy'} className="text-black">
                    {" "}
                    collected and stored.
                  </Link>
                  .
                </small>
              </label>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
