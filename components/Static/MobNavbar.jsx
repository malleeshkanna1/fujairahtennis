"use client";

import React, { useState } from "react";
import MobNavbarStyle from "./MobNavbar.module.css";

const MobNavbar = ({NavbarData}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setIsOpen(false);
      setIsClosing(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className={MobNavbarStyle["menu-toggle-btn"]}
      >
        <i className="bx bx-menu text-white h4"></i>
      </button>
      {/* Fullscreen popup menu */}
      {isOpen && (
        <div
          className={`${MobNavbarStyle["menu-popup"]} ${
            isClosing ? MobNavbarStyle["fade-out"] : ""
          }`}
        >
          <div className={MobNavbarStyle["menu-header"]}>
            <div className={MobNavbarStyle["logo-container"]}>
              <img
                src="/images/common/logo-cropped.png"
                className={MobNavbarStyle.tennis_country_logo}
                alt="Logo"
              />
            </div>
            <button
              className={MobNavbarStyle["menu-close-btn"]}
              onClick={toggleMenu}
            >
              <div className="d-flex">
                 <span className={MobNavbarStyle["btn-x"]}> <i className="bx bx-x h1 mb-1 text-white"></i></span>
              </div>
            </button>
          </div>
          <div className="mt-5">
            <div className={MobNavbarStyle["menu-popup-content"]}>
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-8">
                    <ul className={MobNavbarStyle["menu-list"]}>
                      <li>HOME</li>
                      <li>ABOUT US</li>
                      <li>PROGRAMS</li>
                      <li>PRICING</li>
                      <li>COACHES</li>
                      <li>EVENTS</li>
                    </ul>
                  </div>
                  <div className="col-4 d-none d-md-block">
                    <div className={MobNavbarStyle["menu-footer"]}>
                      <p className={MobNavbarStyle["text_highlight"]}>
                        HAVE A PROJECT? <br />
                        <a className="" href="mailto:info@fujairah">
                          INFO@FUJAIRAH
                        </a>
                      </p>
                      <br />
                      <p className={MobNavbarStyle["text_highlight"]}>
                        WANT TO WORK WITH US? <br />
                        <a className="" href="/send-brief">
                          SEND BRIEF
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobNavbar;
