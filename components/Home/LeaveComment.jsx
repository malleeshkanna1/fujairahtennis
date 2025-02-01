"use client";

import React from "react";
import LeaveCommentStyles from "./css/LeaveComment.module.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";

const LeaveComment = () => {
  const initialValues = {
    name: "",
    email: "",
    comment: "",
  };

  const validationSchema = yup.object({
    name: yup.string().required("Name is Required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is Required"),
    comment: yup.string().required("Comment is Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
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
                    <div className="col-md-6 mt-5">
                      <label className={LeaveCommentStyles["custom-checkbox"]}>
                        <input type="checkbox" />
                        <span className={LeaveCommentStyles["checkmark"]}></span>
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                    <div className="col-md-6"></div>
                    <div className="col-md-6 mt-3">
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
                        <div className="col-md-6">
                          <button
                            type="submit"
                            className={LeaveCommentStyles["submit-btn"]}
                          >
                            <i className='bx bx-send'></i> LEAVE A COMMENT
                          </button>
                        </div>
                        <div className="col-md-6 mt-4">
                          <label className={LeaveCommentStyles["custom-checkbox"]}>
                            <input type="checkbox" />
                            <span
                              className={LeaveCommentStyles["checkmark"]}
                            ></span>
                           <small> I agree that my data is <u>collected and stored</u>.</small>
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
