import React from "react";
import Intro from "./Intro";
import HistoryCount from "./HistoryCount";
import CallToAction from "./CallToAction";
import FewWords from "./FewWords";
import PlayVideo from "./PlayVideo";
import OurPrograms from "./OurPrograms";
import OneDayPass from "./OneDayPass";

const Home = () => {


  return (
    <>
     
      <div className="mt-5 mb-5 ">
        <Intro />
        <HistoryCount/>
        <CallToAction/>
        <FewWords/>
        <PlayVideo/>
        <OurPrograms/>
        <OneDayPass/>
      </div>
    </>
  );
};

export default Home;
