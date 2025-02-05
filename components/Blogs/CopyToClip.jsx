"use client";

import React from "react";
import { toast } from "react-toastify";

const CopyToClip = ({ link }) => {
  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to Clipboard !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <a
      href="#"
      onClick={() => copyText(link)}
      className="rounded-circle text-white"
      style={{ backgroundColor: "#6C757D", padding: "7px 11px" }}
    >
      <i className="bx bx-link"></i>
    </a>
  );
};

export default CopyToClip;
