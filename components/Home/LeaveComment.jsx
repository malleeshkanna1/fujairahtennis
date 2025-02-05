"use client";

import React,{useState} from "react";
import LeaveCommentStyles from "./css/LeaveComment.module.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import Link from "next/link";
import { toast } from "react-toastify";

const LeaveComment = ({row,page,link}) => {
  const initialValues = {
    name: "",
    email: "",
    comment: "",
    page,
    link
  };

    const [TermsAndConditions, SetTermsandConditions] = useState(false);

  const validationSchema = yup.object({
    name: yup.string().required("Name is Required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is Required"),
    comment: yup.string().required("Comment is Required"),
  });

  function AgreeTerms(e) {
    SetTermsandConditions(e.target.checked);
  }

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

  return (
    <div>
      <div className={LeaveCommentStyles["comments-container"]}>
        <div className="container ">
          <h2 className={LeaveCommentStyles["sml-heading"]}>Leave a Comment</h2>
          <div className="mt-5">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form>
                  <div className="row mt-5">
                    <div className="col-md-6 mt-3">
                      <div className={LeaveCommentStyles["input-container"]}>
                        <i className="bx bx-user"></i>
                        <Field type="text" name="name" placeholder="Name" />
                      </div>

                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-danger mt-2"
                      />
                    </div>
                    <div className="col-md-6 mt-3">
                      <div className={LeaveCommentStyles["input-container"]}>
                        <i className="bx bx-envelope"></i>
                        <Field type="text" name="email" placeholder="Email" />
                      </div>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger mt-2"
                      />
                    </div>
                    <div className={`col-md-${row} mt-5`}>
                      <label className={LeaveCommentStyles["custom-checkbox"]}>
                        <input type="checkbox"  />
                        <span className={LeaveCommentStyles["checkmark"]}></span>
                       <small> Save my name, email, and website in this browser for the
                        next time I comment.</small>
                      </label>
                    </div>
                    <div className="col-md-6"></div>
                    <div className={`col-md-${row} mt-5`}>
                      <div className={LeaveCommentStyles["input-container"]}>
                        <i className="bx bx-pencil mb-5"></i>
                        <Field
                          as="textarea"
                          name="comment"
                          placeholder="Comment"
                        />
                      </div>

                      <ErrorMessage
                        name="comment"
                        component="div"
                        className="text-danger mt-2"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="row">
                      <div className="col-md-12 col-lg-7">
                        <div className="row">
                        <div className={`col-md-${row}`}>
                          <button
                            type="submit"
                            className={LeaveCommentStyles["submit-btn"]}
                          >
                            <i className='bx bx-send'></i> LEAVE A COMMENT
                          </button>
                        </div>
                        <div className={`col-md-${row} mt-4`}>
                          <label className={LeaveCommentStyles["custom-checkbox"]}>
                            <input type="checkbox" onChange={(e) => AgreeTerms(e)} />
                            <span
                              className={LeaveCommentStyles["checkmark"]}
                            ></span>
                           <small> I agree that my data is <Link href='/privacy-policy' className="text-black" >collected and stored</Link>.</small>
                          </label>
                        </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveComment;
