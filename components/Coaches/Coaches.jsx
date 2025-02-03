import React from "react";
import CoachesStyles from "./css/Coaches.module.css";
import Image from "next/image";

const Coaches = () => {
  const CoachesData = [
    {
      name: "Tharushi Nimnadi",
      role: "Swimming Trainer",
      coaching_experience: [
        "Certified Swimming Instructor with professional Experiences.",
        "Participated and won National Sports Festival in Sri Lanka. 2021",
        "Completed the following course: Bronze Medalist Life Saving Course, ILS Life Saving Course and Junior Life Saving Course Awarded National Lifesaving in Sri Lanka. 2022.",
        "Completed Royal Life Saving Course UK. 3 Years Volunteer Experience in Sri Lanka. Successfully completed Swimming Instructor Course.",
      ],
      image: "icon1.jpg",
    },
    {
      name: "Nimantha Heshan Fernando",
      role: "Swimming Trainer",
      coaching_experience: [
        "I have been involved in the sports for 18 years as a swimmer in Sri Lanka and UAE. 2021 to Present.",
        "TENNIS & COUNTRY CLUB FUJAIRAH Swimming instructor for all ages.",
        "And also conducted Swimming Lesson for Kids that have Special needs. 2011 Bronze Medal Life Saving Association Sri Lanka 2012.",
        "Water Safety Basic Training Instructor Sri Lanka Complete Padi Diving Course (Open water & Advance Open Water) License.",
      ],
      image: "icon1.jpg",
    },
    {
      name: "Kul bahadur",
      role: "Swimming Trainer",
      coaching_experience: [
        "2013 to 2023 TENNIS & COUNTRY CLUB FUJAIRAH 10-year ",
        "Experience swimming lessons coaching with happy and satisfied clients and guests. I feel happy and rewarded whenever I see my clients learn from me.",
      ],
      image: "icon1.jpg",
    },
    {
      name: "Suresh Tappa",
      role: "Swimming Trainer",
      coaching_experience: [
        "Lifeguard experience for 5 Years.",
        "Certified Swimming Instructor with professional Experiences.",
      ],
      image: "icon1.jpg",
    },
    {
      name: "Grace",
      role: "Swimming Trainer",
      coaching_experience: [
        "Lifeguard Experience since 2022.",
        "Trained in CPR and other life saving techniques to ensure maximum safety for swimming.",
        "Certified Swimming Instructor with professional Experiences.",
      ],
      image: "icon1.jpg",
    },
    {
      name: "Mr. Atef",
      role: "KickBoxing Trainer",
      coaching_experience: [
        "The Coach Who Inspires Success In the world of sports, there are few individuals who possess the ability.A Guide to Optimizing Your Academic Routine In the fast- paced world of academia, managing your class schedule and timing is crucial for success.",
      ],
      professional_exp: [
        "Certified Swimming Instructor with professional Experiences",
      ],
      image: "icon1.jpg",
    },
    {
      name: "Ms Maryna",
      role: "GYMNASTICS Trainer",
      coaching_experience: [
        "Dedicated and highly experienced gymnastics coach with a proven track record of developing athletes to excel in competitive gymnastics.",
        "Gymnastic coach since 2016 with 8 years of experience.",
        "Teach gymnasts various gymnastic skills and techniques, such as vaulting, floor exercises, balance beam routines, and uneven bars routines.",
        "Master of gymnastics sport from Kharkiv state academy of physical culture for Teaching and coaching gymnastics.",
        "First AID Course From UAE culture for Teaching and coaching gymnastics. First AID Course From UAE.",
      ],
      image: "icon1.jpg",
    },
    {
      name: "Jacques Harmse",
      role: "Squash, Mountain Biking Trainer",
      coaching_experience: [
        "Registered Level 1 Coach. Coaching experience 20 years. High school teams Boys and Girls Johannesburg. Vast Experience in hosting local and regional tournaments in the portfolio as Tournament Director. Years of experience as a registered referee.",
        "Competed provincially and nationally in South Africa for the past 25 years representing various regional and national teams. Gauteng, Northern Gauteng, South African Country Districts, South African Interforce.",
        "Players coached includes boys’ and girls’ school players who continued to represent provincial teams in South Africa. Served on the South African Squash Association Executive Committee on two separate occasions specifically managing the High-Performance portfolio.",
      ],
      image: "icon1.jpg",
    },
    {
      name: "July Tabora",
      role: "Tennis Trainer",
      coaching_experience: [
        "<b>2007 TO 2010 FUJAIRAH TENNIS & COUNTRY CLUB </b> – I made Abdulla Al Ali No. 2 in Gulf Countries in Juniors and Al Ali brothers they won champions each category of Under 14 and Under 16.",
        "<b>2010 TO 2017 DUBAI TENNIS ACADEMY</b> – I made two Junior Tennis Players play ITF. One from India and One from Turkey.",
        "<b>2017 UNTIL PRESENT FTCC</b> – I worked with Mohamed Yousef Mohamed a 9-year-old boy from 2017-2020 but he stops. This boy was a promising star in the future but this moment his busy for his studies. Now I am focusing with Hashem Bedroozian who got potential and talent to become a champion in the future and the present yonex Child Ambassador.",
      ],
      image: "icon2.jpeg",
    },
    {
      name: "Michael Quiñones",
      role: "Tennis/Padel Tennis Trainer",
      coaching_experience: [
        "2005 CEBU COUNTRY CLUB Awarded as National Tennis Player in Philippines. 2010 to 2013 FUJAIRAH TENNIS & COUNTRY CLUB Won Runner Up for Ramadan 2010 Maktoum Tennis Championship Men’s Single.",
        "I was part of the Local Tennis Academy for kids in Fujairah. 2015 to 2019 DUBAI TENNIS ACADEMY Titled as Divis Cup Tennis Player in Philippines.",
        "Kids & Adult Pro Hitting Partner for WTA Players. 2020 to 2023 FUJAIRAH TENNIS & COUNTRY CLUB Organizing Local Kids Tennis Academy. Coaching Paddel Tennis for locals and Royal Family.",
      ],
      image: "icon2.jpeg",
    },
  ];

  return (
    <div className="mt-5 mb-5">
      <div className="d-flex justify-content-center ">
        <h1 className={CoachesStyles["intro-heading"]}>Our Coaches</h1>
      </div>
      <div className="mt-5 container">
        <div className="row">
          {CoachesData.map((data, i) => (
            <div key={i} className="col-md-12">
              <div
                className={`row align-items-center ${CoachesStyles["facility-content"]}`}
              >
                <div
                  className={`col-md-6 mt-4 ${
                    i % 2 === 0 ? "order-md-2" : "order-md-1"
                  } order-2`}
                >
                  <h3>{data.name}</h3>
                  <span>{data.role}</span>
                  <p>Coaching Experience</p>
                  <div className="mt-3">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          data.coaching_experience.length === 1
                            ? `<div>${data.coaching_experience[0]}</div>`
                            : `<ul>${data.coaching_experience
                                .map((exp) => `<li>${exp}</li>`)
                                .join("")}</ul>`,
                      }}
                    />
                  </div>
                  {data.professional_exp && (
                    <div>
                      <p>Professional Experience</p>
                      {data.professional_exp.map((point, i) => (
                        <div key={i}>{point}</div>
                      ))}
                    </div>
                  )}
                </div>
                <div
                  className={`col-md-6 mt-4 ${
                    i % 2 === 0 ? "order-md-1" : "order-md-2"
                  } order-1`}
                >
                  <Image
                    layout="responsive"
                    width={16}
                    height={9}
                    alt={data.name}
                    src={`/images/coaches/${data.image}`}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coaches;
