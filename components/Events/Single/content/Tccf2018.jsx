import React from "react";
import SingleNewsStyle from "../../css/SingleEvent.module.css";
import DropAction from "./DropAction";
import Link from "next/link";

const Tccf2018 = () => {
  const items = [
    {
      label: "Google Calendar",
      icon: "",
      link: "https://www.google.com/calendar/event?action=TEMPLATE&dates=20180321T060000/20180423T213000&text=Train%20with%20the%20Best%20at%20Tennis%20%26%23038%3B%20Country%20Club%20Fujairah&details=Join+the+Tennis+%26amp%3B+Country+Club+Fujairah%2C+the+United+Arab+Emirates%27+premier+destination+for+world-class+tennis+coaching.+Since+our+establishment+in+1964%2C+we+have+dedicated+ourselves+to+creating+life-changing+opportunities+through+tennis.+Our+expert+coaching+team+blends+fun+with+learning+in+a+holistic+environment%2C+making+us+a+leading+choice+for+tennis+enthusiasts+at+all+levels.At+Tennis+%26amp%3B+Country+Club+Fujairah%2C+we+offer+a+variety+of+tailored+programs+designed+to+cater+to+every+skill+level.+Whether+you%27re+aspiring+to+reach+the+global+stage+or+simply+aiming+for+personal+growth%2C+our+programs+are+crafted+to+meet+your+unique+needs.+Our+My+Tennis+Club+Journey+pathway+provides+a+clear+and+structured+roadmap+for+tennis+progress%2C+ensuring+that+every+step+of+your+tennis+journey+is+both+meaningful+and+rewarding.Our+commitment+to+excellence+is+evident+in+our+approach+and+our+culture.+We+foster+an+environment+where+passion+meets+professionalism%2C+and+where+players+are+encouraged+to+%28View+Full+event+Description+Here%3A+https%3A%2F%2Ffujairahtennisclub.com%2Fevent%2Ftrain-with-the-best-at-tennis-country-club-fujairah%2F%29&location=TennisClub%20Club,%20Tennis%20&%20Country%20Club%20Fujairah,%20Fujairah,,%20Fujairah,%20United%20Arab%20Emirates&trp=false&ctz=UTC+0&sprop=website:https://fujairahtennisclub.com",
    },
    {
      label: "iCalendar",
      icon: "",
      link: "webcal://fujairahtennisclub.com/event/train-with-the-best-at-tennis-country-club-fujairah/?ical=1",
    },
    {
      label: "Outlook 365",
      icon: "",
      link: "https://outlook.office.com/owa/?path=/calendar/action/compose&rrv=addevent&startdt=2018-03-21T06%3A00%3A00%2B00%3A00&enddt=2018-04-23T21%3A30%3A00%2B00%3A00&location=TennisClub%20Club,%20Tennis%20&%20Country%20Club%20Fujairah,%20Fujairah,,%20Fujairah,%20United%20Arab%20Emirates&subject=Train%20with%20the%20Best%20at%20Tennis%20%26%20Country%20Club%20Fujairah&body=Join%20the%20Tennis%20%26amp%3B%20Country%20Club%20Fujairah%2C%20the%20United%20Arab%20Emirates%27%20premier%20destination%20for%20world-class%20tennis%20coaching.%20Since%20our%20establishment%20in%201964%2C%20we%20have%20dedicated%20ourselves%20to%20creating%20life-changing%20opportunities%20through%20tennis.%20Our%20expert%20coaching%20team%20blends%20fun%20with%20learning%20in%20a%20holistic%20environment%2C%20making%20us%20a%20leading%20choice%20for%20tennis%20enthusiasts%20at%20all%20levels.At%20Tennis%20%26amp%3B%20Country%20Club%20Fujairah%2C%20we%20offer%20a%20variety%20of%20tailored%20programs%20designed%20to%20cater%20to%20every%20skill%20level.%20Whether%20you%27re%20aspiring%20to%20reach%20the%20global%20stage%20or%20simply%20aiming%20for%20personal%20growth%2C%20our%20programs%20are%20crafted%20to%20meet%20your%20unique%20needs.%20Our%20My%20Tennis%20Club%20Journey%20pathway%20provides%20a%20clear%20and%20structured%20roadmap%20for%20tennis%20progress%2C%20ensuring%20that%20every%20step%20of%20your%20tennis%20journey%20is%20both%20meaningful%20and%20rewarding.Our%20commitment%20to%20excellence%20is%20evident%20in%20our%20approach%20and%20our%20culture.%20W%20%28View%20Full%20Event%20Description%20Here%3A%20https%3A%2F%2Ffujairahtennisclub.com%2Fevent%2Ftrain-with-the-best-at-tennis-country-club-fujairah%2F%29",
    },
    {
      label: "Outlook Live",
      icon: "",
      link: "https://outlook.live.com/owa/?path=/calendar/action/compose&rrv=addevent&startdt=2018-03-21T06%3A00%3A00%2B00%3A00&enddt=2018-04-23T21%3A30%3A00%2B00%3A00&location=TennisClub%20Club,%20Tennis%20&%20Country%20Club%20Fujairah,%20Fujairah,,%20Fujairah,%20United%20Arab%20Emirates&subject=Train%20with%20the%20Best%20at%20Tennis%20%26%20Country%20Club%20Fujairah&body=Join%20the%20Tennis%20%26amp%3B%20Country%20Club%20Fujairah%2C%20the%20United%20Arab%20Emirates%27%20premier%20destination%20for%20world-class%20tennis%20coaching.%20Since%20our%20establishment%20in%201964%2C%20we%20have%20dedicated%20ourselves%20to%20creating%20life-changing%20opportunities%20through%20tennis.%20Our%20expert%20coaching%20team%20blends%20fun%20with%20learning%20in%20a%20holistic%20environment%2C%20making%20us%20a%20leading%20choice%20for%20tennis%20enthusiasts%20at%20all%20levels.At%20Tennis%20%26amp%3B%20Country%20Club%20Fujairah%2C%20we%20offer%20a%20variety%20of%20tailored%20programs%20designed%20to%20cater%20to%20every%20skill%20level.%20Whether%20you%27re%20aspiring%20to%20reach%20the%20global%20stage%20or%20simply%20aiming%20for%20personal%20growth%2C%20our%20programs%20are%20crafted%20to%20meet%20your%20unique%20needs.%20Our%20My%20Tennis%20Club%20Journey%20pathway%20provides%20a%20clear%20and%20structured%20roadmap%20for%20tennis%20progress%2C%20ensuring%20that%20every%20step%20of%20your%20tennis%20journey%20is%20both%20meaningful%20and%20rewarding.Our%20commitment%20to%20excellence%20is%20evident%20in%20our%20approach%20and%20our%20culture.%20W%20%28View%20Full%20Event%20Description%20Here%3A%20https%3A%2F%2Ffujairahtennisclub.com%2Fevent%2Ftrain-with-the-best-at-tennis-country-club-fujairah%2F%29",
    },
  ];

  return (
    <div className="mt-5">
      <h1 className={`text-center ${SingleNewsStyle["Newsheading"]}`}>
        Experience an Unforgettable Brunch Event at TCCF on February 23, 2018
      </h1>
      <p className={"text-center mt-4 " + SingleNewsStyle["dateTime"]}>
        <i className="bx bx-calendar"></i> Feb 23, 2018 @ 6:00 am - 9:30 pm
      </p>
      <div className="mt-5">
        <p className={SingleNewsStyle["passage"]}>
          Join us at TCCF on February 23, 2018, for a spectacular brunch
          experience featuring a delicious assortment of mouth-watering dishes.
          Our brunch event promises to be a highlight, offering a diverse menu
          of gourmet brunch options that cater to all tastes and preferences.
          From rich, savory entrees to delightful sweet treats, our selection of
          lip-smacking dishes is designed to satisfy your cravings and make your
          brunch memorable.
        </p>
        <p className={SingleNewsStyle["passage"]}>
          Your brunch ticket grants you more than just exceptional food. Enjoy a
          range of family-friendly activities specifically tailored to entertain
          children. We have organized various fun activities for kids to ensure
          that the younger guests have a fantastic time while you savor your
          meal. In addition to the vibrant activities, your admission includes
          full access to our refreshing pool area, perfect for a leisurely swim
          or relaxing by the water.
        </p>
        <p className={SingleNewsStyle["passage"]}>
          The event will be accompanied by an upbeat music playlist, creating a
          lively and enjoyable atmosphere throughout the day. The music adds to
          the festive ambiance, making it a perfect setting for socializing and
          unwinding with friends and family.
        </p>
        <p className={SingleNewsStyle["passage"]}>
          Our brunch at TCCF is more than just a meal; it’s a chance to
          experience great food, engaging entertainment, and a relaxing
          environment all in one place. With a wide variety of dishes and
          activities, there’s something for everyone to enjoy. Whether you’re
          planning a family outing or a gathering with friends, our brunch event
          is designed to offer a memorable and enjoyable experience.
        </p>
        <p className={SingleNewsStyle["passage"]}>
          Mark your calendar for February 23, 2018, and join us for an
          extraordinary brunch event at TCCF. Don’t miss out on the opportunity
          to indulge in fantastic food, engage in fun activities, and enjoy a
          day of relaxation and entertainment. We can’t wait to welcome you to
          this special occasion!
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
              <span className={SingleNewsStyle["Contentlabel"]}>DATE:</span>
              <p className={SingleNewsStyle["dataDmSans"]}>Feb 23, 2018</p>
            </div>
            <div className="mt-3">
              <span className={SingleNewsStyle["Contentlabel"]}>Time:</span>
              <p className={SingleNewsStyle["dataDmSans"]}>6:00 am - 9:30 pm</p>
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
              <p className={SingleNewsStyle["dataDmSans"]}>coach, court, training</p>
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
              <p className={SingleNewsStyle["dataDmSans"]}>info@fujairahtennisclub.ae</p>
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
        <div className="d-flex justify-content-between ">
        <Link className={SingleNewsStyle["link"]} href='/event/participate-in-the-inaugural-local-tennis-tournament-at-tennis-and-country-club-fujairah'>
          <i className="bx bx-left-arrow-alt"></i>  Prev 
          </Link>
          <Link className={SingleNewsStyle["link"]} href='/event/train-with-the-best-at-tennis-country-club-fujairah'>
            Next <i className="bx bx-right-arrow-alt"></i> 
          </Link>
     
        </div>
      </div>
    </div>
  );
};

export default Tccf2018;
