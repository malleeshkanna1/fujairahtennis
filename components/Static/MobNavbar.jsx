"use client";

import React, { useState } from "react";
import MobNavbarStyle from "./MobNavbar.module.css";
import { Sidebar } from "primereact/sidebar";
import { Accordion, AccordionTab } from "primereact/accordion";
import Link from "next/link";

const MobNavbar = ({ NavbarData }) => {
  const [sidebarState, setSidebarState] = useState(false);

  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <li key={index} className={item.dropdown ? "sm-screen-drop" : ""}>
        {item.dropdown ? (
          <Accordion>
            <AccordionTab
              header={
                <ul className={`${MobNavbarStyle["no-margin"]} ${MobNavbarStyle["menu-list"]}`}>
                  <li className={MobNavbarStyle["no-margin"]}>{item.title}</li>
                </ul>
              }
            >
              <ul className={MobNavbarStyle["drop-list"]}>{renderMenuItems(item.dropdownItems)}</ul>
            </AccordionTab>
          </Accordion>
        ) : (
          <Link onClick={()=>setSidebarState(false)} href={item.route}>{item.title}</Link>
        )}
      </li>
    ));
  };

  return (
    <div>
      <button
        onClick={() => setSidebarState(true)}
        className={MobNavbarStyle["menu-toggle-btn"]}
      >
        <i className="bx bx-menu text-white h4"></i>
      </button>
      <Sidebar visible={sidebarState} className="bg-black" fullScreen>
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
            onClick={() => setSidebarState(false)}
          >
            <div className="d-flex">
              <span className={MobNavbarStyle["btn-x"]}>
                <i className="bx bx-x h1 mb-1 text-white"></i>
              </span>
            </div>
          </button>
        </div>
        <div className="mt-5">
          <div className={MobNavbarStyle["menu-popup-content"]}>
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-8">
                  <ul className={MobNavbarStyle["menu-list"]}>{renderMenuItems(NavbarData)}</ul>
                </div>
                <div className="col-4 d-none d-md-block">
                  <div className={MobNavbarStyle["menu-footer"]}>
                    <p className={MobNavbarStyle["text_highlight"]}>
                      HAVE A PROJECT? <br />
                      <a href="mailto:info@fujairah">INFO@FUJAIRAH</a>
                    </p>
                    <br />
                    <p className={MobNavbarStyle["text_highlight"]}>
                      WANT TO WORK WITH US? <br />
                      <a href="/contact">SEND BRIEF</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default MobNavbar;
