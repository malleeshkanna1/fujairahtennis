import React from "react";
import SingleNewsStyle from "../../css/SingleEvent.module.css";
import DropAction from "./DropAction";
import Link from "next/link";

const ItfJunior = () => {
  const items = [
    {
      label: "Google Calendar",
      icon: "",
      link: "https://www.google.com/calendar/event?action=TEMPLATE&dates=20140119T060000/20140124T213000&text=ITF%20Junior%20Tennis%20Championship%20at%20Tennis%20%26%23038%3B%20Country%20Club%20Fujairah%3A%20A%20Premier%20Event&details=Get+ready+for+an+exciting+week+of+top-tier+tennis+as+the+ITF+Junior+Tennis+Championship+takes+center+stage+at+the+Tennis+%26amp%3B+Country+Club+Fujairah.+From+January+19th+to+24th%2C+2014%2C+our+club+will+host+this+prestigious+tournament%2C+showcasing+the+best+junior+tennis+talent+from+around+the+world.+This+highly+anticipated+event+will+feature+64+of+the+most+promising+young+players%2C+including+32+boys+and+32+girls%2C+all+vying+for+the+championship+title.The+ITF+Junior+Tennis+Championship+is+renowned+for+its+competitive+spirit+and+high+level+of+play.+Over+the+course+of+the+week-long+tournament%2C+participants+will+compete+in+a+series+of+matches+designed+to+test+their+skills%2C+strategies%2C+and+determination.+This+event+not+only+provides+a+platform+for+emerging+tennis+stars+to+demonstrate+their+abilities+but+also+offers+spectators+the+opportunity+to+witness+some+of+the+most+exciting+junior+tennis+action.Held+at+the+world-class+Tennis+%26amp%3B+Country+Club+Fujairah%2C+the+tournament+will+take+adva+%28View+Full+event+Description+Here%3A+https%3A%2F%2Ffujairahtennisclub.com%2Fevent%2Fitf-junior-tennis-championship-at-tennis-country-club-fujairah-a-premier-event%2F%29&location=TennisClub%20Club,%20Tennis%20&%20Country%20Club%20Fujairah,%20Fujairah,,%20Fujairah,%20United%20Arab%20Emirates&trp=false&ctz=UTC+0&sprop=website:https://fujairahtennisclub.com",
    },
    {
      label: "iCalendar",
      icon: "",
      link: "webcal://fujairahtennisclub.com/event/itf-junior-tennis-championship-at-tennis-country-club-fujairah-a-premier-event/?ical=1",
    },
    {
      label: "Outlook 365",
      icon: "",
      link: "https://outlook.office.com/owa/?path=/calendar/action/compose&rrv=addevent&startdt=2014-01-19T06%3A00%3A00%2B00%3A00&enddt=2014-01-24T21%3A30%3A00%2B00%3A00&location=TennisClub%20Club,%20Tennis%20&%20Country%20Club%20Fujairah,%20Fujairah,,%20Fujairah,%20United%20Arab%20Emirates&subject=ITF%20Junior%20Tennis%20Championship%20at%20Tennis%20%26%20Country%20Club%20Fujairah%3A%20A%20Premier%20Event&body=Get%20ready%20for%20an%20exciting%20week%20of%20top-tier%20tennis%20as%20the%20ITF%20Junior%20Tennis%20Championship%20takes%20center%20stage%20at%20the%20Tennis%20%26amp%3B%20Country%20Club%20Fujairah.%20From%20January%2019th%20to%2024th%2C%202014%2C%20our%20club%20will%20host%20this%20prestigious%20tournament%2C%20showcasing%20the%20best%20junior%20tennis%20talent%20from%20around%20the%20world.%20This%20highly%20anticipated%20event%20will%20feature%2064%20of%20the%20most%20promising%20young%20players%2C%20including%2032%20boys%20and%2032%20girls%2C%20all%20vying%20for%20the%20championship%20title.The%20ITF%20Junior%20Tennis%20Championship%20is%20renowned%20for%20its%20competitive%20spirit%20and%20high%20level%20of%20play.%20Over%20the%20course%20of%20the%20week-long%20tournament%2C%20participants%20will%20compete%20in%20a%20series%20of%20matches%20designed%20to%20test%20their%20skills%2C%20strategies%2C%20and%20determination.%20This%20event%20not%20only%20provides%20a%20platform%20for%20emerging%20tennis%20stars%20to%20demonstrate%20their%20abilities%20but%20also%20offers%20spectators%20the%20opportunity%20to%20witness%20some%20of%20the%20most%20exciting%20junior%20tennis%20acti%20%28View%20Full%20Event%20Description%20Here%3A%20https%3A%2F%2Ffujairahtennisclub.com%2Fevent%2Fitf-junior-tennis-championship-at-tennis-country-club-fujairah-a-premier-event%2F%29",
    },
    {
      label: "Outlook Live",
      icon: "",
      link: "https://outlook.live.com/owa/?path=/calendar/action/compose&rrv=addevent&startdt=2014-01-19T06%3A00%3A00%2B00%3A00&enddt=2014-01-24T21%3A30%3A00%2B00%3A00&location=TennisClub%20Club,%20Tennis%20&%20Country%20Club%20Fujairah,%20Fujairah,,%20Fujairah,%20United%20Arab%20Emirates&subject=ITF%20Junior%20Tennis%20Championship%20at%20Tennis%20%26%20Country%20Club%20Fujairah%3A%20A%20Premier%20Event&body=Get%20ready%20for%20an%20exciting%20week%20of%20top-tier%20tennis%20as%20the%20ITF%20Junior%20Tennis%20Championship%20takes%20center%20stage%20at%20the%20Tennis%20%26amp%3B%20Country%20Club%20Fujairah.%20From%20January%2019th%20to%2024th%2C%202014%2C%20our%20club%20will%20host%20this%20prestigious%20tournament%2C%20showcasing%20the%20best%20junior%20tennis%20talent%20from%20around%20the%20world.%20This%20highly%20anticipated%20event%20will%20feature%2064%20of%20the%20most%20promising%20young%20players%2C%20including%2032%20boys%20and%2032%20girls%2C%20all%20vying%20for%20the%20championship%20title.The%20ITF%20Junior%20Tennis%20Championship%20is%20renowned%20for%20its%20competitive%20spirit%20and%20high%20level%20of%20play.%20Over%20the%20course%20of%20the%20week-long%20tournament%2C%20participants%20will%20compete%20in%20a%20series%20of%20matches%20designed%20to%20test%20their%20skills%2C%20strategies%2C%20and%20determination.%20This%20event%20not%20only%20provides%20a%20platform%20for%20emerging%20tennis%20stars%20to%20demonstrate%20their%20abilities%20but%20also%20offers%20spectators%20the%20opportunity%20to%20witness%20some%20of%20the%20most%20exciting%20junior%20tennis%20acti%20%28View%20Full%20Event%20Description%20Here%3A%20https%3A%2F%2Ffujairahtennisclub.com%2Fevent%2Fitf-junior-tennis-championship-at-tennis-country-club-fujairah-a-premier-event%2F%29",
    },
  ];

  return (
    <div className="mt-5">
      <h1 className={`text-center ${SingleNewsStyle["Newsheading"]}`}>
      ITF Junior Tennis Championship at Tennis & Country Club Fujairah: A Premier Event
      </h1>
      <p className={"text-center mt-4 " + SingleNewsStyle["dateTime"]}>
        <i className="bx bx-calendar"></i> Jan 19, 2014 @ 6:00 am - Jan 24, 2014 @ 9:30 pm
      </p>
      <div className="mt-5">
        <p className={SingleNewsStyle["passage"]}>
        Get ready for an exciting week of top-tier tennis as the ITF Junior Tennis Championship takes center stage at the Tennis & Country Club Fujairah. From January 19th to 24th, 2014, our club will host this prestigious tournament, showcasing the best junior tennis talent from around the world. This highly anticipated event will feature 64 of the most promising young players, including 32 boys and 32 girls, all vying for the championship title.
        </p>
        <p className={SingleNewsStyle["passage"]}>
        The ITF Junior Tennis Championship is renowned for its competitive spirit and high level of play. Over the course of the week-long tournament, participants will compete in a series of matches designed to test their skills, strategies, and determination. This event not only provides a platform for emerging tennis stars to demonstrate their abilities but also offers spectators the opportunity to witness some of the most exciting junior tennis action.
        </p>
        <p className={SingleNewsStyle["passage"]}>
        Held at the world-class Tennis & Country Club Fujairah, the tournament will take advantage of our state-of-the-art facilities and exceptional courts. Our club is well-equipped to handle the demands of such a significant event, ensuring that both players and spectators enjoy a seamless and memorable experience.
        </p>
        <p className={SingleNewsStyle["passage"]}>
        With its focus on junior tennis development and competitive excellence, the ITF Junior Tennis Championship at Tennis & Country Club Fujairah promises to be a highlight of the tennis calendar. Whether you are a player, coach, or tennis enthusiast, this tournament is an unmissable opportunity to see future tennis stars in action.
        </p>
        <p className={SingleNewsStyle["passage"]}>
        Mark your calendars for January 19th through 24th, 2014, and join us at the Tennis & Country Club Fujairah for a week of thrilling tennis competition and sporting excellence. Don’t miss the chance to be part of this premier tennis event and witness the rising stars of the sport.
        </p>
      </div>
      <div className="mt-4">
        <DropAction items={items} />
      </div>
      <div className="mt-5"></div>
      <div className="mt-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-6">
            <h4 className={SingleNewsStyle["subHeading"]}>Details</h4>
            <div className="mt-3">
              <span className={SingleNewsStyle["Contentlabel"]}>Start:</span>
              <p className={SingleNewsStyle["dataDmSans"]}>
              Jan 19, 2014 @ 6:00 am
              </p>
            </div>
            <div className="mt-3">
              <span className={SingleNewsStyle["Contentlabel"]}>End:</span>
              <p className={SingleNewsStyle["dataDmSans"]}>
              Jan 24, 2014 @ 9:30 pm
              </p>
            </div>
            <div className="mt-3">
              <span className={SingleNewsStyle["Contentlabel"]}>
                Event Category:
              </span>
              <p className={SingleNewsStyle["dataDmSans"]}>TennisClubEvents</p>
            </div>
            <div className="mt-3">
              <span className={SingleNewsStyle["Contentlabel"]}>
                Event Tags:
              </span>
              <p className={SingleNewsStyle["dataDmSans"]}>
                coach, court, training
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <h4 className={SingleNewsStyle["subHeading"]}>Organizer</h4>
            <p className={SingleNewsStyle["passage"]}>
              Tennis & Country Club Fujairah
            </p>
            <div className="mt-3">
              <span className={SingleNewsStyle["Contentlabel"]}>Phone</span>
              <p className={SingleNewsStyle["dataDmSans"]}>+97192244880</p>
            </div>
            <div className="mt-3">
              <span className={SingleNewsStyle["Contentlabel"]}>Email</span>
              <p className={SingleNewsStyle["dataDmSans"]}>
                info@fujairahtennisclub.ae
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12">
            <h4 className={SingleNewsStyle["subHeading"]}>Venue</h4>
            <p className={SingleNewsStyle["passage"]}>TennisClub Club</p>
            <div className="mt-3">
              <p className={SingleNewsStyle["dataDmSans"]}>
                Tennis & Country Club Fujairah, Fujairah, Fujairah United Arab
                Emirates
              </p>
            </div>
            <div className="mt-3">
              <a
                href="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Tennis+%26amp%3B+Country+Club+Fujairah%2C+Fujairah%2C+Fujairah+United+Arab+Emirates"
                target="_blank"
                className={SingleNewsStyle["greenColor"]}
              >
                <i className="bx bx-plus"></i> Google Map
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d462340.7886990595!2d56.297298!3d25.134426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef45601bd17ed33%3A0xbd4ae0627415337f!2sTennis%20Country%20Club%20Fujairah!5e0!3m2!1sen!2sus!4v1738700026683!5m2!1sen!2sus"
              className="img-fluid"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="d-flex justify-content-end ">
        
          <Link
            className={SingleNewsStyle["link"]}
            href="/event/tennis-and-country-club-fujairah-is-delighted-to-announce-our-summer-camp"
          >
            Next <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItfJunior;
