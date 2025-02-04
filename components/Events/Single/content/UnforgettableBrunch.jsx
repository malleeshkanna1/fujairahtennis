import React from "react";
import SingleNewsStyle from "../../css/SingleEvent.module.css";
import DropAction from "./DropAction";
import Link from "next/link";

const UnforgettableBrunch = () => {
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
        Experience an Unforgettable Brunch Event at TCCF on November 23, 2024
      </h1>
      <p className={"text-center mt-4 " + SingleNewsStyle["dateTime"]}>
        <i className="bx bx-calendar"></i> Nov 23, 2024
      </p>
      <h3 className={`text-center ${SingleNewsStyle["Newsheading"]}`}>
        AED 500
      </h3>
      <div className="mt-5">
        <p className={SingleNewsStyle["passage"]}>
          Join us at TCCF on November 23, 2024, for a spectacular brunch
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
          Mark your calendar for November 23, 2024, and join us for an
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
              <p className={SingleNewsStyle["dataDmSans"]}>Nov 23, 2024</p>
            </div>
            <div className="mt-3">
              <span className={SingleNewsStyle["Contentlabel"]}>Cost:</span>
              <p className={SingleNewsStyle["dataDmSans"]}>AED 500</p>
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
        <div className="d-flex justify-content-between ">
          <Link
            className={SingleNewsStyle["link"]}
            href="/event/train-with-the-best-at-tennis-country-club-fujairah"
          >
            <i className="bx bx-left-arrow-alt"></i> Prev
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default UnforgettableBrunch;
