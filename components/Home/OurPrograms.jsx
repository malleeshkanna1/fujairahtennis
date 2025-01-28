import React from "react";
import ProgramsStyle from "./css/OurPrograms.module.css";
import Image from "next/image";
import Link from "next/link";

const OurPrograms = () => {
  const ProgramsList = [
    { number: "01", name: "Tennis Coaching", link: "tennis-coaching" },
    { number: "02", name: "Swimming Coaching", link: "swimming-coaching" },
    {
      number: "03",
      name: "Paddle Tennis Coaching",
      link: "paddle-tennis-coaching",
    },
    { number: "04", name: "Gym Training", link: "gym-training" },
    { number: "05", name: "Summer Camp", link: "summer-camp" },
    { number: "06", name: "Restaurant", link: "restaurant" },
    { number: "07", name: "Gymnastic Class", link: "gymnastic-class" },
    { number: "08", name: "Kickboxing Class", link: "kickboxing-class" },
    { number: "09", name: "Personal Training", link: "personal-training" },
    { number: "10", name: "Ballet Classes", link: "ballet-classes" },
    { number: "11", name: "Squash Lessons", link: "squash-lessons" },
  ];

  return (
    <div className="mt-5 container">
      <p className={ProgramsStyle.smallText}>Our Programs</p>
      <h1 className={ProgramsStyle["intro-heading"]}>Find the one for you</h1>
      <div className="row">
        {ProgramsList.map((data, i) => (
          <div className="col-md-6 col-lg-4 mt-3" key={i}>
            <Link href={`/${data.link}`}>
              <div className={ProgramsStyle["image-container"]}>
                <Image
                  width={1920}
                  height={1080}
                  className={ProgramsStyle.image}
                  alt={data.name}
                  src={`/images/programs/${data.link}.jpg`}
                />
                <div className={ProgramsStyle["overlay"]}></div>
                <div className={ProgramsStyle["text-container"]}>
                  <div className="text-uppercase">{data.name}</div>
                  <div className={ProgramsStyle["read-more"]}>Read More</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPrograms;
