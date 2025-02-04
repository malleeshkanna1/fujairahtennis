import React from "react";
import SingleNewsStyle from "../../css/SingleEvent.module.css";
import DropAction from "./DropAction";
import Link from "next/link";

const TrainWiththeBest = () => {
  const items = [
    {
      label: "Google Calendar",
      icon: "",
      link: "https://www.google.com/calendar/event?action=TEMPLATE&dates=20180223T060000/20180223T213000&text=Experience%20an%20Unforgettable%20Brunch%20Event%20at%20TCCF%20on%20February%2023%2C%202018&details=Join+us+at+TCCF+on+February+23%2C+2018%2C+for+a+spectacular+brunch+experience+featuring+a+delicious+assortment+of+mouth-watering+dishes.+Our+brunch+event+promises+to+be+a+highlight%2C+offering+a+diverse+menu+of+gourmet+brunch+options+that+cater+to+all+tastes+and+preferences.+From+rich%2C+savory+entrees+to+delightful+sweet+treats%2C+our+selection+of+lip-smacking+dishes+is+designed+to+satisfy+your+cravings+and+make+your+brunch+memorable.Your+brunch+ticket+grants+you+more+than+just+exceptional+food.+Enjoy+a+range+of+family-friendly+activities+specifically+tailored+to+entertain+children.+We+have+organized+various+fun+activities+for+kids+to+ensure+that+the+younger+guests+have+a+fantastic+time+while+you+savor+your+meal.+In+addition+to+the+vibrant+activities%2C+your+admission+includes+full+access+to+our+refreshing+pool+area%2C+perfect+for+a+leisurely+swim+or+relaxing+by+the+water.The+event+will+be+accompanied+by+an+upbeat+music+playlist%2C+creating+a+lively+and+enjoyable+atmosphere+throughout+the+%28View+Full+event+Description+Here%3A+https%3A%2F%2Ffujairahtennisclub.com%2Fevent%2Fexperience-an-unforgettable-brunch-event-at-tccf-on-february-23-2018-2%2F%29&location=TennisClub%20Club,%20Tennis%20&%20Country%20Club%20Fujairah,%20Fujairah,,%20Fujairah,%20United%20Arab%20Emirates&trp=false&ctz=UTC+0&sprop=website:https://fujairahtennisclub.com",
    },
    {
      label: "iCalendar",
      icon: "",
      link: "webcal://fujairahtennisclub.com/event/experience-an-unforgettable-brunch-event-at-tccf-on-february-23-2018-2/?ical=1",
    },
    {
      label: "Outlook 365",
      icon: "",
      link: "https://outlook.office.com/owa/?path=/calendar/action/compose&rrv=addevent&startdt=2018-02-23T06%3A00%3A00%2B00%3A00&enddt=2018-02-23T21%3A30%3A00%2B00%3A00&location=TennisClub%20Club,%20Tennis%20&%20Country%20Club%20Fujairah,%20Fujairah,,%20Fujairah,%20United%20Arab%20Emirates&subject=Experience%20an%20Unforgettable%20Brunch%20Event%20at%20TCCF%20on%20February%2023%2C%202018&body=Join%20us%20at%20TCCF%20on%20February%2023%2C%202018%2C%20for%20a%20spectacular%20brunch%20experience%20featuring%20a%20delicious%20assortment%20of%20mouth-watering%20dishes.%20Our%20brunch%20event%20promises%20to%20be%20a%20highlight%2C%20offering%20a%20diverse%20menu%20of%20gourmet%20brunch%20options%20that%20cater%20to%20all%20tastes%20and%20preferences.%20From%20rich%2C%20savory%20entrees%20to%20delightful%20sweet%20treats%2C%20our%20selection%20of%20lip-smacking%20dishes%20is%20designed%20to%20satisfy%20your%20cravings%20and%20make%20your%20brunch%20memorable.Your%20brunch%20ticket%20grants%20you%20more%20than%20just%20exceptional%20food.%20Enjoy%20a%20range%20of%20family-friendly%20activities%20specifically%20tailored%20to%20entertain%20children.%20We%20have%20organized%20various%20fun%20activities%20for%20kids%20to%20ensure%20that%20the%20younger%20guests%20have%20a%20fantastic%20time%20while%20you%20savor%20your%20meal.%20In%20addition%20to%20the%20vibrant%20activities%2C%20your%20admission%20includes%20full%20access%20to%20our%20refreshing%20pool%20area%2C%20perfect%20for%20a%20leisurely%20swim%20or%20relaxing%20by%20the%20water.The%20event%20will%20be%20ac%20%28View%20Full%20Event%20Description%20Here%3A%20https%3A%2F%2Ffujairahtennisclub.com%2Fevent%2Fexperience-an-unforgettable-brunch-event-at-tccf-on-february-23-2018-2%2F%29",
    },
    {
      label: "Outlook Live",
      icon: "",
      link: "https://outlook.live.com/owa/?path=/calendar/action/compose&rrv=addevent&startdt=2018-02-23T06%3A00%3A00%2B00%3A00&enddt=2018-02-23T21%3A30%3A00%2B00%3A00&location=TennisClub%20Club,%20Tennis%20&%20Country%20Club%20Fujairah,%20Fujairah,,%20Fujairah,%20United%20Arab%20Emirates&subject=Experience%20an%20Unforgettable%20Brunch%20Event%20at%20TCCF%20on%20February%2023%2C%202018&body=Join%20us%20at%20TCCF%20on%20February%2023%2C%202018%2C%20for%20a%20spectacular%20brunch%20experience%20featuring%20a%20delicious%20assortment%20of%20mouth-watering%20dishes.%20Our%20brunch%20event%20promises%20to%20be%20a%20highlight%2C%20offering%20a%20diverse%20menu%20of%20gourmet%20brunch%20options%20that%20cater%20to%20all%20tastes%20and%20preferences.%20From%20rich%2C%20savory%20entrees%20to%20delightful%20sweet%20treats%2C%20our%20selection%20of%20lip-smacking%20dishes%20is%20designed%20to%20satisfy%20your%20cravings%20and%20make%20your%20brunch%20memorable.Your%20brunch%20ticket%20grants%20you%20more%20than%20just%20exceptional%20food.%20Enjoy%20a%20range%20of%20family-friendly%20activities%20specifically%20tailored%20to%20entertain%20children.%20We%20have%20organized%20various%20fun%20activities%20for%20kids%20to%20ensure%20that%20the%20younger%20guests%20have%20a%20fantastic%20time%20while%20you%20savor%20your%20meal.%20In%20addition%20to%20the%20vibrant%20activities%2C%20your%20admission%20includes%20full%20access%20to%20our%20refreshing%20pool%20area%2C%20perfect%20for%20a%20leisurely%20swim%20or%20relaxing%20by%20the%20water.The%20event%20will%20be%20ac%20%28View%20Full%20Event%20Description%20Here%3A%20https%3A%2F%2Ffujairahtennisclub.com%2Fevent%2Fexperience-an-unforgettable-brunch-event-at-tccf-on-february-23-2018-2%2F%29",
    },
  ];

  return (
    <div className="mt-5">
      <h1 className={`text-center ${SingleNewsStyle["Newsheading"]}`}>
        Train with the Best at Tennis & Country Club Fujairah
      </h1>
      <p className={"text-center mt-4 " + SingleNewsStyle["dateTime"]}>
        <i className="bx bx-calendar"></i> Mar 21, 2018 @ 6:00 am - Apr 23, 2018
        @ 9:30 pm
      </p>
      <div className="mt-5">
        <p className={SingleNewsStyle["passage"]}>
          Join the Tennis & Country Club Fujairah, the United Arab Emirates’
          premier destination for world-class tennis coaching. Since our
          establishment in 1964, we have dedicated ourselves to creating
          life-changing opportunities through tennis. Our expert coaching team
          blends fun with learning in a holistic environment, making us a
          leading choice for tennis enthusiasts at all levels.
        </p>
        <p className={SingleNewsStyle["passage"]}>
          At Tennis & Country Club Fujairah, we offer a variety of tailored
          programs designed to cater to every skill level. Whether you’re
          aspiring to reach the global stage or simply aiming for personal
          growth, our programs are crafted to meet your unique needs. Our My
          Tennis Club Journey pathway provides a clear and structured roadmap
          for tennis progress, ensuring that every step of your tennis journey
          is both meaningful and rewarding.
        </p>
        <p className={SingleNewsStyle["passage"]}>
          Our commitment to excellence is evident in our approach and our
          culture. We foster an environment where passion meets professionalism,
          and where players are encouraged to unlock their full potential. By
          choosing Tennis & Country Club Fujairah, you are not just signing up
          for tennis lessons; you are investing in a community dedicated to your
          success and growth.
        </p>
        <p className={SingleNewsStyle["passage"]}>
          Take the first step towards achieving your tennis goals by signing up
          for our free introductory lessons. Experience firsthand why Tennis &
          Country Club Fujairah stands out as a leader in tennis coaching. Our
          focus extends beyond simply developing players; we aim to create
          lasting life opportunities through the sport.
        </p>
        <p className={SingleNewsStyle["passage"]}>
          Why Choose Tennis & Country Club Fujairah? Our standout programs,
          passionate coaching staff, and commitment to creating exceptional
          tennis experiences make us the top choice for tennis enthusiasts in
          the UAE. Begin your journey with us today and discover how we can help
          you reach new heights in your tennis career.
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
              <p className={SingleNewsStyle["dataDmSans"]}>Mar 21, 2018 @ 6:00 am</p>
            </div>
            <div className="mt-3">
              <span className={SingleNewsStyle["Contentlabel"]}>End:</span>
              <p className={SingleNewsStyle["dataDmSans"]}>Apr 23, 2018 @ 9:30 pm</p>
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
          <Link
            className={SingleNewsStyle["link"]}
            href="/event/experience-an-unforgettable-brunch-event-at-tccf-on-february-23-2018-2"
          >
            <i className="bx bx-left-arrow-alt"></i> Prev
          </Link>
          <Link
            className={SingleNewsStyle["link"]}
            href="/event/experience-an-unforgettable-brunch-event-at-tccf-on-november-23-2024"
          >Next <i className="bx bx-right-arrow-alt"></i> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainWiththeBest;
