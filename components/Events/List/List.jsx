import React from "react";
import ListStyles from "../css/ListStyles.module.css";
import Link from "next/link";

const List = () => {
  const EventsList = [
    {
      featured: true,
      date_time: "Nov 23, 2024",
      otherDate : {month:'Nov',date:23,year:2024},
      title:
        "Experience an Unforgettable Brunch Event at TCCF on November 23, 2024",
      location:
        "TennisClub Club Tennis & Country Club Fujairah, Fujairah,, Fujairah",
      desc: `Join us at TCCF on November 23, 2024, for a spectacular brunch experience featuring a delicious assortment of mouth-watering dishes. Our brunch event promises to be a highlight, offering a…`,
      amount: "AED 500",
      link: "experience-an-unforgettable-brunch-event-at-tccf-on-november-23-2024",
    },
    {
      featured: false,
      date_time: "Mar 21, 2018 @ 6:00 am - Apr 23, 2018 @ 9:30 pm",
      otherDate : {month:'Mar',date:21,year:2018},
      title: "Train with the Best at Tennis & Country Club Fujairah",
      location:
        "TennisClub Club Tennis & Country Club Fujairah, Fujairah,, Fujairah",
      desc: `Join the Tennis & Country Club Fujairah, the United Arab Emirates' premier destination for world-class tennis coaching. Since our establishment in 1964, we have dedicated ourselves to creating life-changing opportunities…`,
      amount: null,
      link: "train-with-the-best-at-tennis-country-club-fujairah",
    },
    {
      featured: false,
      date_time: "Feb 23, 2018 @ 6:00 am - 9:30 pm",
      otherDate : {month:'Feb',date:23,year:2018},
      title:
        "Experience an Unforgettable Brunch Event at TCCF on February 23, 2018",
      location:
        "TennisClub Club Tennis & Country Club Fujairah, Fujairah,, Fujairah",
      desc: `Join us at TCCF on February 23, 2018, for a spectacular brunch experience featuring a delicious assortment of mouth-watering dishes. Our brunch event promises to be a highlight, offering a…`,
      amount: null,
      link: "experience-an-unforgettable-brunch-event-at-tccf-on-february-23-2018-2",
    },
    {
      featured: false,
      date_time: " Feb 02, 2018 @ 9:00 am - Feb 03, 2018 @ 10:30 pm",
      otherDate : {month:'Feb',date:2,year:2018},
      title:
        "Participate in the Inaugural Local Tennis Tournament at Tennis and Country Club Fujairah!",
      location:
        "TennisClub Club Tennis & Country Club Fujairah, Fujairah,, Fujairah, United Arab Emirates",
      desc: `Tennis and Country Club Fujairah is excited to host its First Local Tennis Tournament on February 2nd and 3rd, 2018. This event welcomes men, women, and children of all skill…`,
      amount: null,
      link: "participate-in-the-inaugural-local-tennis-tournament-at-tennis-and-country-club-fujairah",
    },
    {
      featured: false,
      date_time: " Jan 19, 2014 @ 6:00 am - Jan 24, 2014 @ 9:30 pm",
      otherDate : {month:'Jan',date:19,year:2014},
      title:
        "Tennis and Country Club Fujairah is delighted to announce our Summer Camp",
      location:
        "TennisClub Club Tennis & Country Club Fujairah, Fujairah,, Fujairah, United Arab Emirates",
      desc: `Tennis and Country Club Fujairah is delighted to announce our Summer Camp, designed to offer an unforgettable summer experience for children. Our Summer Camp promises a variety of engaging and…`,
      amount: null,
      link: "tennis-and-country-club-fujairah-is-delighted-to-announce-our-summer-camp",
    },
    {
      featured: false,
      date_time: " Jan 19, 2014 @ 6:00 am - Jan 24, 2014 @ 9:30 pm",
      otherDate : {month:'Jan',date:19,year:2014},
      title:
        "ITF Junior Tennis Championship at Tennis & Country Club Fujairah: A Premier Event",
      location:
        "TennisClub Club Tennis & Country Club Fujairah, Fujairah,, Fujairah, United Arab Emirates",
      desc: `Get ready for an exciting week of top-tier tennis as the ITF Junior Tennis Championship takes center stage at the Tennis & Country Club Fujairah. From January 19th to 24th,…`,
      amount: null,
      link: "itf-junior-tennis-championship-at-tennis-country-club-fujairah-a-premier-event",
    },
  ];

  return (
    <div className={ListStyles["event-list-container"]}>
      <div className="container">
        <div className={ListStyles["input-container"]}>
          <i className={`bx bx-search ${ListStyles["search-icon"]}`}></i>
          <input
            type="text"
            className={ListStyles["search-txtbox"]}
            placeholder="Search for events"
          />
        </div>
        <div className="mt-4">
          <h3 className={ListStyles["heading"]}>Latest Past Events</h3>
          <div className="container-fluid mt-5">
            {EventsList.map((event, index) => (
              <div
                key={index}
                className={`row mt-4 ${event.featured ? ListStyles.borderSm : ""}`}
              >
                <div className="col-1 gx-1">
                  <div className={ListStyles.eventDate}>
                    <div>{event.otherDate.month.toUpperCase()}</div>
                    <h4 className="fw-bold mb-0">
                      {event.otherDate.date}
                    </h4>
                    <div>{event.otherDate.year}</div>
                  </div>
                </div>
                <div className="col-11">
                  <div
                    className={`d-flex flex-wrap align-items-start ${
                      event.featured ? ListStyles.borderLg : ""
                    } ${ListStyles.eventCard}`}
                  >
                    <div className="flex-grow-1">
                      <div className="mb-2 d-flex align-items-center">
                        {event.featured && (
                          <>
                            <i
                              className={
                                "bx bxs-bookmark-star " +
                                ListStyles.iconColors
                              }
                            ></i>{" "}
                            &nbsp;
                            <small className={ListStyles.eventFeatured}>
                              Featured &nbsp;
                            </small>
                          </>
                        )}
                        <span className={" " + ListStyles.eventDateLG}>
                          <i
                            className={"bx bx-calendar " + ListStyles.iconColors}
                          ></i>{" "}
                          {event.date_time}
                        </span>
                      </div>
                      <Link href={`/event/${event.link}`} className={`${ListStyles.eventTitle} mb-2`}>
                        {event.title.toUpperCase()}
                      </Link>
                      <div className={ListStyles.location}>{event.location}</div>
                      <p className={ListStyles.eventDescription}>{event.desc}</p>
                      {event.amount && (
                        <div className={ListStyles.eventPrice}>{event.amount}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
