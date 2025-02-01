"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import MobNavbar from "./MobNavbar";

const Navbar = () => {
  const [isFixed, setFixedState] = useState(false);

  const NavbarData = [
    {
      title: "Home",
      route: "/",
      dropdown: false,
    },
    {
      title: "About Us",
      route: "/about-us",
      dropdown: false,
    },
    {
      title: "Programs",
      route: "/",
      dropdown: true,
      dropdownItems: [
        { title: "Facilities", route: "/facilities" },
        {
          title: "Programs",
          route: "/",
          dropdown: true,
          dropdownItems: [
            { route: "/", title: "Tennis Coaching" },
            { route: "/", title: "Swimming Coaching" },
            { route: "/", title: "Paddle Coaching" },
            { route: "/", title: "Gym Training" },
            { route: "/", title: "Summer Camp" },
            { route: "/", title: "Gymnastic Class" },
            { route: "/", title: "Kickboxing Class" },
            { route: "/", title: "Personal Training" },
            { route: "/", title: "Personal Training" },
            { route: "/", title: "Ballet Classes" },
            { route: "/", title: "Squash Lessons" },
          ],
        },
        { title: "Restaurant", route: "/" },
      ],
    },
    {
      title: "Pricing",
      route: "/our-pricing",
      dropdown: false,
    },
    {
      title: "Coaches",
      route: "/coaches",
      dropdown: false,
    },
    {
      title: "Events",
      route: "/",
      dropdown: false,
    },
  ];

  const handleScroll = () => {
    setFixedState(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isFixed ? 'fixed-top animate__slideInDown animate__animated':''}>
      <nav className={styles.navbar}>
        {/* Left side: Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <img src="/images/common/logo.png" />
          </Link>
        </div>

        {/* Center: Menu */}
        <div className="d-none d-lg-block">
          <div className={styles.menu}>
            <ul>
              {NavbarData.map((item, index) => (
                <li
                  key={index}
                  className={item.dropdown ? styles.dropdown : ""}
                >
                  {/* Render Link for items without dropdown */}
                  {!item.dropdown ? (
                    <Link href={item.route}>{item.title}</Link>
                  ) : (
                    // Render Dropdown for items with dropdown
                    <>
                      <span>{item.title}</span>
                      <div className={styles.subMenu}>
                        <ul>
                          {item.dropdownItems.map((dropdownItem, idx) => (
                            <li key={idx}>
                              {/* Nested dropdown if it exists */}
                              {dropdownItem.dropdown ? (
                                <div className={styles.programsHover}>
                                  {dropdownItem.title} {">"}
                                  <div className={styles.subsubMenu}>
                                    <ul>
                                      {dropdownItem.dropdownItems.map(
                                        (subItem, subIdx) => (
                                          <li key={subIdx}>
                                            <Link href={subItem.route}>
                                              {subItem.title}
                                            </Link>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              ) : (
                                <Link href={dropdownItem.route}>
                                  {dropdownItem.title}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right side: Join Now Button */}
        <div className="d-none d-lg-block">
          <div className={styles.joinButton}>
            <Link href="/join" className={styles.joinNow}>
              Join Now
            </Link>
          </div>
        </div>
        <div className="d-flex d-lg-none">
          <div className={styles["search-icon"]}>
            <i className="bx bx-search text-white"></i>
          </div>
          <MobNavbar NavbarData={NavbarData} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
