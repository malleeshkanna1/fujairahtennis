import React from "react";
import { RiseLoader } from "react-spinners";

const PageLoader = () => {
  return (
    <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-white"
    style={{ zIndex: 1050, opacity: 0.8 }}
  >
    <RiseLoader color="#AFD639" loading={true} size={20} />
  </div>
  );
};

export default PageLoader;
