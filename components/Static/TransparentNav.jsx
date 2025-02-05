
import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import MobNavbar from "./MobNavbar";

const TransparentNav = () => {

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
            { route: "/services/tennis-coaching", title: "Tennis Coaching" },
            { route: "/services/swimming-coaching", title: "Swimming Coaching" },
            { route: "/services/paddle-coaching", title: "Paddle Coaching" },
            { route: "/services/gym-training", title: "Gym Training" },
            { route: "/services/summer-camp", title: "Summer Camp" },
            { route: "/services/gymnastic-class", title: "Gymnastic Class" },
            { route: "/services/kickboxing-class", title: "Kickboxing Class" },
            { route: "/services/personal-training", title: "Personal Training" },
            { route: "/services/personal-training", title: "Personal Training" },
            { route: "/services/ballet-classes", title: "Ballet Classes" },
            { route: "/services/squash-lessons", title: "Squash Lessons" },
          ],
        },
        { title: "Restaurant", route: "/services/restaurant" },
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
      route: "/events",
      dropdown: false,
    },
  ];


  return (
    <div className=''>
      <nav className={styles.TransNavbar}>
        {/* Left side: Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <img alt="Tennis & Country Club Fujairah" src="/images/common/logo.png" />
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
            <Link href="/contact" className={styles.joinNow}>
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

export default TransparentNav;
