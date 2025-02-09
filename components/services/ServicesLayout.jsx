import React from "react";

import ServiceLayoutStyles from "./css/ServicesLayout.module.css";

import { TennisCoaching } from "./Contents/TennisCoaching";
import SwimmingCoaching from "./Contents/SwimmingCoaching";
import PaddleCoaching from "./Contents/PaddleCoaching";
import GymTraining from "./Contents/GymTraining";
import SummerCamp from "./Contents/SummerCamp";
import GymnasticClass from "./Contents/GymnasticClass";
import KickboxingClass from "./Contents/KickboxingClass";
import PersonalTraining from "./Contents/PersonalTraining";
import BalletClasses from "./Contents/BalletClasses";
import SquashLessons from "./Contents/SquashLessons";
import ContactForm from "./ContactForm";
import Restraunt from "./Contents/Restraunt";
import Sauna from "./Contents/Sauna";
import Jacuzzi from "./Contents/Jacuzzi";
import SteamRoom from "./Contents/SteamRoom";

const ServicesData = {
  "tennis-coaching": <TennisCoaching />,
  "swimming-coaching": <SwimmingCoaching />,
  "paddle-coaching": <PaddleCoaching />,
  "gym-training": <GymTraining />,
  "summer-camp": <SummerCamp />,
  "gymnastic-class": <GymnasticClass />,
  "kickboxing-class": <KickboxingClass />,
  "personal-training": <PersonalTraining />,
  "ballet-classes": <BalletClasses />,
  "squash-lessons": <SquashLessons />,
  "restaurant": <Restraunt/>,
  "sauna": <Sauna/>,
  "jacuzzi": <Jacuzzi/>,
  "steam-room": <SteamRoom/>,
};

const ServicesNames = {
  "tennis-coaching": "Tennis Coaching",
  "swimming-coaching": "Swimming Coaching",
  "paddle-coaching": "Paddle Coaching",
  "gym-training": "Gym Training",
  "summer-camp": "Summer Camp",
  "gymnastic-class": "Gymnastic Class",
  "kickboxing-class": "Kickboxing Class",
  "personal-training": "Personal Training",
  "ballet-classes": "Ballet Classes",
  "squash-lessons": "Squash Lessons",
  "restaurant": "Restaurant",
  "sauna": "Sauna",
  "jacuzzi": "Jacuzzi",
  "steam-room": "Steam Room",
};


const ServicesLayout = async ({ slug }) => {
  return (
    <div className={ServiceLayoutStyles["services-container"]}>
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-8">{ServicesData[slug]}</div>
          <div className="col-lg-4">
            <ContactForm applyFor={ServicesNames[slug]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesLayout;
