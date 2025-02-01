import React from "react";
import TrainWithBest from "./TrainWithBest";
import HistoryCount from "../Home/HistoryCount";
import Programmes from "./Programmes";
import LatestNews from "./LatestNews";
import OurCoaches from "./OurCoaches";
import ClientsPartners from "./ClientsPartners";
import Testimonial from "../Home/Testimonial";
import WeAreProud from "./WeAreProud";

const About = () => {
  return (
    <div className="mt-5 mb-5  ">
      <TrainWithBest />
      <HistoryCount/>
      <Programmes/>
      <LatestNews/>
      <OurCoaches/>
      <ClientsPartners/>
      <WeAreProud/>
      <Testimonial/>
    </div>
  );
};

export default About;
