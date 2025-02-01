import React from "react";
import WeAreProudStyles from "./css/WeAreProud.module.css";
import { Accordion, AccordionTab } from "primereact/accordion";

const WeAreProud = () => {
  return (
    <div className={WeAreProudStyles["content-bg"]}>
      <div className="container-lg">
        <div className={WeAreProudStyles["spacer"]}></div>
        <div className="row">
          <div className="col-md-5">
            <p className={WeAreProudStyles.smallText}>
              Frequently Asked Questions
            </p>
            <h1 className={WeAreProudStyles["intro-heading"]}>
              We're proud to be the best at training
            </h1>
            <div className="mt-3">
              <Accordion activeIndex={0}>
                <AccordionTab header="I am looking for a hitting partner. How can I be connected?">
                  <p className="m-0">
                    Join us at practice and make some new friends! There is no
                    shortage of great people willing to hit.
                  </p>
                </AccordionTab>
                <AccordionTab header="Do you offer lessons?">
                  <p className="m-0">
                    We offer lessons during the summer depending on player
                    availability. Please contact us for more information.
                  </p>
                </AccordionTab>
                <AccordionTab header="Do you offer tennis racket stringing?">
                  <p className="m-0">
                    You bet. Please contact us if you would like your racket
                    strung.
                  </p>
                </AccordionTab>
              </Accordion>
            </div>
          </div>
          <div className="col-md-7">
            <div className="d-block d-md-flex justify-content-end">
              <div className={WeAreProudStyles["image-container"]}>
                <img
                  src="/images/aboutus/about-us-we-proud.jpg"
                  alt="About Us"
                />
                <div className={`${WeAreProudStyles["content"]} ${WeAreProudStyles["left"]}`}>
                  <span className={WeAreProudStyles['size1']}>PEOPLE</span>
                  <span className={WeAreProudStyles['size2']}>100+</span>
                  <span className={WeAreProudStyles['size3']}>Players</span>
                </div>
                <div className={`${WeAreProudStyles["content2"]} ${WeAreProudStyles["right"]}`}>
                  <span className={WeAreProudStyles['size1']}>COURTS</span>
                  <span className={WeAreProudStyles['size2']}>16</span>
                  <span className={WeAreProudStyles['size3']}>Premier Courts Facility</span>
                </div>
          
              </div>
            </div>
          </div>
        </div>
        <div className={WeAreProudStyles["spacer"]}></div>
      </div>
    </div>
  );
};

export default WeAreProud;
