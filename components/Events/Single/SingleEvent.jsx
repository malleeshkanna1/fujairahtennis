import React from "react";
import ListStyles from "../css/ListStyles.module.css";
import EventListStyle from '../css/SingleEvent.module.css';
import UnforgettableBrunch from "./content/UnforgettableBrunch";

import Tccf2018 from "./content/Tccf2018";
import TrainWiththeBest from "./content/TrainWiththeBest";
import InauguralLocalTennis from "./content/InauguralLocalTennis";
import ItfJunior from "./content/ItfJunior";
import SummerCamp2024 from "./content/SummerCamp2024";

const contents = {
    'experience-an-unforgettable-brunch-event-at-tccf-on-november-23-2024':<UnforgettableBrunch/>,
    'train-with-the-best-at-tennis-country-club-fujairah':<TrainWiththeBest/>,
    'experience-an-unforgettable-brunch-event-at-tccf-on-february-23-2018-2' : <Tccf2018/>,
    'participate-in-the-inaugural-local-tennis-tournament-at-tennis-and-country-club-fujairah':<InauguralLocalTennis/>,
    'tennis-and-country-club-fujairah-is-delighted-to-announce-our-summer-camp':<SummerCamp2024/>,
    'itf-junior-tennis-championship-at-tennis-country-club-fujairah-a-premier-event':<ItfJunior/>
}

const SingleEvent = ({ slug }) => {
  return (
    <div className={ListStyles["event-list-container"]}>
      <div className="container">
        <div className="bg-light p-3">
           <span className={EventListStyle['eventStatus']}> This event has passed.</span>
        </div>
        <div className="mt-4">
            {contents[slug]}
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
