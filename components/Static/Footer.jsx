import React from "react";
import FooterStyles from "./Footer.module.css";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Coaches", path: "/coaches" },
  { name: "Facilities", path: "/facilities" },
  { name: "Events", path: "/events" },
  { name: "Contact Us", path: "/contact" },
];

const programs = [
  "Tennis Coaching",
  "Swimming Coaching",
  "Paddle Coaching",
  "Gym Training",
  "Summer Camp",
  "Restaurant",
  "Gymnastic Class",
  "Kickboxing Class",
  "Personal Training",
  "Ballet Classes",
  "Squash Lessons",
].map((program) => ({ name: program, path: `/services/${program.toLowerCase().replace(/ /g, "-")}` }));

const socialLinks = [
  { name: "Facebook", icon: "bxl-facebook", url: "https://www.facebook.com/TennisCountryClubFujairah" },
  { name: "Tiktok", icon: "bxl-tiktok", url: "/" },
  { name: "Instagram", icon: "bxl-instagram", url: "https://www.instagram.com/tccfjr/?hl=en" },
];

const contactDetails = [
  { icon: "bx-envelope", text: "info@fujairahtennisclub.ae", href: "mailto:info@fujairahtennisclub.ae" },
  { icon: "bx-phone", text: "+97192244880", href: "tel:+97192244880" },
];

const Footer = () => {
  return (
    <div className={FooterStyles["footer-container"]}>
      <div className="container-lg pt-5 pb-5">
        <div className="row">
          <div className="col-md-12 col-lg-6 col-xl-5">
            <div className="row">
            <div className="col-md-6">
                <div className="row">
                  <div className="col-12 p-1 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end ">
                    <img
                      className={FooterStyles["company-logo"]}
                      src="/images/common/logo.png"
                    />
                  </div>
                  <div className="col-12 col-md-8">
                    &nbsp;{" "}
                    <p className={FooterStyles["company-name"]}>
                      Tennis & country club Fujairah
                    </p>
                  </div>

                  <p className={FooterStyles["headings"]}>Address</p>
                  <div className={FooterStyles["menus"]}>
                    <i className="bx bx-map"></i> Tennis & Country Club
                    Fujairah, Fujairah, United Arab Emirates
                  </div>
                 <NewsletterForm/>
                </div>
              </div>
              <div className="col-md-6 mt-4 d-block d-md-flex justify-content-center">
                <div>
                  <p className={FooterStyles["menu-heading"]}>QUICK LINKS</p>
                  <ul className={FooterStyles["footer-links"]}>
                    {quickLinks.map((link) => (
                      <li className={FooterStyles["list-style-none"]} key={link.name}>
                       <h3 className="d-inline">&#8226;</h3>   <Link href={link.path}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 col-xl-4 mt-0 mt-md-3 mt-lg-0">
            <div className="row">
              <div className="col-md-6 mt-4">
                <p className={FooterStyles["menu-heading"]}>OUR PROGRAMS</p>
                <ul className={FooterStyles["footer-links"]}>
                  {programs.map((program) => (
                    <li className={FooterStyles["list-style-none"]} key={program.name}>
                     <h3 className="d-inline">&#8226;</h3> <Link href={program.path}>{program.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6 mt-4">
                <p className={FooterStyles["menu-heading"]}>SOCIAL</p>
                <ul className={FooterStyles["footer-links"]}>
                  {socialLinks.map((social) => (
                    <li key={social.name} className={FooterStyles["list-style-none"]}>
                      <i className={`bx ${social.icon}`}></i> <a target="_blank" href={social.url}>{social.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 col-xl-3 mt-4">
            <p className={FooterStyles["menu-heading"]}>SAY HELLO</p>
            <ul className={FooterStyles["footer-links"]}>
              {contactDetails.map((contact, index) => (
                <li key={index} className={FooterStyles["list-style-none"]}>
                  <i className={`bx ${contact.icon}`}></i> <a href={contact.href}>{contact.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
