import React from "react";
import SingleNewsStyle from "../../css/SingleEvent.module.css";
import DropAction from "./DropAction";
import Link from "next/link";

const SummerCamp2024 = () => {
  const items = [
    {
      label: "Google Calendar",
      icon: "",
      link: "https://www.google.com/calendar/event?action=TEMPLATE&dates=20180202T090000/20180203T223000&text=Participate%20in%20the%20Inaugural%20Local%20Tennis%20Tournament%20at%20Tennis%20and%20Country%20Club%20Fujairah%21&details=Tennis+and+Country+Club+Fujairah+is+excited+to+host+its+First+Local+Tennis+Tournament+on+February+2nd+and+3rd%2C+2018.+This+event+welcomes+men%2C+women%2C+and+children+of+all+skill+levels+to+join+in+a+weekend+of+competitive+tennis+and+community+fun.+Matches+will+start+at+9+AM+each+day%2C+providing+ample+time+for+players+to+showcase+their+abilities+and+compete+in+a+friendly+atmosphere.The+entry+fee+is+AED+50+per+person+for+each+draw%2C+which+covers+your+participation+and+contributes+to+the+overall+event+organization.+Ensure+you+register+before+the+deadline+to+secure+your+place%E2%80%94sign-ups+and+entrance+fees+close+at+10%3A30+PM+on+February+1st%2C+2018.+Don%E2%80%99t+miss+out+on+this+opportunity+to+compete+and+enjoy+the+sport%21If+you%E2%80%99re+struggling+to+find+a+partner+for+the+tournament%2C+we%E2%80%99ve+got+you+covered.+Simply+post+on+the+Event+Page+to+connect+with+other+players+looking+for+partners.+This+makes+it+easy+to+find+a+match+and+participate+in+the+tournament+without+any+stress.This+local+tennis+%28View+Full+event+Description+Here%3A+https%3A%2F%2Ffujairahtennisclub.com%2Fevent%2Fparticipate-in-the-inaugural-local-tennis-tournament-at-tennis-and-country-club-fujairah%2F%29&location=TennisClub%20Club,%20Tennis%20&%20Country%20Club%20Fujairah,%20Fujairah,,%20Fujairah,%20United%20Arab%20Emirates&trp=false&ctz=UTC+0&sprop=website:https://fujairahtennisclub.com",
    },
    {
      label: "iCalendar",
      icon: "",
      link: "webcal://fujairahtennisclub.com/event/participate-in-the-inaugural-local-tennis-tournament-at-tennis-and-country-club-fujairah/?ical=1",
    },
    {
      label: "Outlook 365",
      icon: "",
      link: "https://outlook.office.com/owa/?path=/calendar/action/compose&rrv=addevent&startdt=2018-02-02T09%3A00%3A00%2B00%3A00&enddt=2018-02-03T22%3A30%3A00%2B00%3A00&location=TennisClub%20Club,%20Tennis%20&%20Country%20Club%20Fujairah,%20Fujairah,,%20Fujairah,%20United%20Arab%20Emirates&subject=Participate%20in%20the%20Inaugural%20Local%20Tennis%20Tournament%20at%20Tennis%20and%20Country%20Club%20Fujairah%21&body=Tennis%20and%20Country%20Club%20Fujairah%20is%20excited%20to%20host%20its%20First%20Local%20Tennis%20Tournament%20on%20February%202nd%20and%203rd%2C%202018.%20This%20event%20welcomes%20men%2C%20women%2C%20and%20children%20of%20all%20skill%20levels%20to%20join%20in%20a%20weekend%20of%20competitive%20tennis%20and%20community%20fun.%20Matches%20will%20start%20at%209%20AM%20each%20day%2C%20providing%20ample%20time%20for%20players%20to%20showcase%20their%20abilities%20and%20compete%20in%20a%20friendly%20atmosphere.The%20entry%20fee%20is%20AED%2050%20per%20person%20for%20each%20draw%2C%20which%20covers%20your%20participation%20and%20contributes%20to%20the%20overall%20event%20organization.%20Ensure%20you%20register%20before%20the%20deadline%20to%20secure%20your%20place%E2%80%94sign-ups%20and%20entrance%20fees%20close%20at%2010%3A30%20PM%20on%20February%201st%2C%202018.%20Don%E2%80%99t%20miss%20out%20on%20this%20opportunity%20to%20compete%20and%20enjoy%20the%20sport%21If%20you%E2%80%99re%20struggling%20to%20find%20a%20partner%20for%20the%20tournament%2C%20we%E2%80%99ve%20got%20you%20covered.%20Simply%20post%20on%20the%20Event%20Page%20to%20connect%20with%20other%20players%20looking%20for%20partners.%20This%20makes%20it%20%28View%20Full%20Event%20Description%20Here%3A%20https%3A%2F%2Ffujairahtennisclub.com%2Fevent%2Fparticipate-in-the-inaugural-local-tennis-tournament-at-tennis-and-country-club-fujairah%2F%29",
    },
    {
      label: "Outlook Live",
      icon: "",
      link: "https://outlook.live.com/owa/?path=/calendar/action/compose&rrv=addevent&startdt=2018-02-02T09%3A00%3A00%2B00%3A00&enddt=2018-02-03T22%3A30%3A00%2B00%3A00&location=TennisClub%20Club,%20Tennis%20&%20Country%20Club%20Fujairah,%20Fujairah,,%20Fujairah,%20United%20Arab%20Emirates&subject=Participate%20in%20the%20Inaugural%20Local%20Tennis%20Tournament%20at%20Tennis%20and%20Country%20Club%20Fujairah%21&body=Tennis%20and%20Country%20Club%20Fujairah%20is%20excited%20to%20host%20its%20First%20Local%20Tennis%20Tournament%20on%20February%202nd%20and%203rd%2C%202018.%20This%20event%20welcomes%20men%2C%20women%2C%20and%20children%20of%20all%20skill%20levels%20to%20join%20in%20a%20weekend%20of%20competitive%20tennis%20and%20community%20fun.%20Matches%20will%20start%20at%209%20AM%20each%20day%2C%20providing%20ample%20time%20for%20players%20to%20showcase%20their%20abilities%20and%20compete%20in%20a%20friendly%20atmosphere.The%20entry%20fee%20is%20AED%2050%20per%20person%20for%20each%20draw%2C%20which%20covers%20your%20participation%20and%20contributes%20to%20the%20overall%20event%20organization.%20Ensure%20you%20register%20before%20the%20deadline%20to%20secure%20your%20place%E2%80%94sign-ups%20and%20entrance%20fees%20close%20at%2010%3A30%20PM%20on%20February%201st%2C%202018.%20Don%E2%80%99t%20miss%20out%20on%20this%20opportunity%20to%20compete%20and%20enjoy%20the%20sport%21If%20you%E2%80%99re%20struggling%20to%20find%20a%20partner%20for%20the%20tournament%2C%20we%E2%80%99ve%20got%20you%20covered.%20Simply%20post%20on%20the%20Event%20Page%20to%20connect%20with%20other%20players%20looking%20for%20partners.%20This%20makes%20it%20%28View%20Full%20Event%20Description%20Here%3A%20https%3A%2F%2Ffujairahtennisclub.com%2Fevent%2Fparticipate-in-the-inaugural-local-tennis-tournament-at-tennis-and-country-club-fujairah%2F%29",
    },
  ];

  return (
    <div className="mt-5">
      <h1 className={`text-center ${SingleNewsStyle["Newsheading"]}`}>
        Tennis and Country Club Fujairah is delighted to announce our Summer
        Camp
      </h1>
      <p className={"text-center mt-4 " + SingleNewsStyle["dateTime"]}>
        <i className="bx bx-calendar"></i> Jan 19, 2014 @ 6:00 am - Jan 24, 2014
        @ 9:30 pm
      </p>
      <div className="mt-5">
        <p className={SingleNewsStyle["passage"]}>
          Tennis and Country Club Fujairah is delighted to announce our Summer
          Camp, designed to offer an unforgettable summer experience for
          children. Our Summer Camp promises a variety of engaging and fun
          activities that ensure your kids will be entertained all season long.
          From the moment they arrive, they’ll be immersed in an environment
          filled with excitement and learning.
        </p>
        <p className={SingleNewsStyle["passage"]}>
          Our Summer Camp features a diverse schedule of activities that include
          tennis lessons, outdoor sports, creative arts, and interactive games.
          Each day is thoughtfully planned to balance spontaneity with
          structure, providing a mix of fun and educational experiences that
          cater to different interests and age groups.
        </p>
        <p className={SingleNewsStyle["passage"]}>
          To support a healthy lifestyle, we offer a selection of nutritious
          snacks throughout the day. These snacks are designed to keep campers
          energized and focused, complementing our dynamic activity schedule.
          Our aim is to create a vibrant and stimulating atmosphere where
          children can thrive both physically and mentally.
        </p>
        <p className={SingleNewsStyle["passage"]}>
          Our experienced staff is dedicated to creating a positive and
          supportive environment where kids can build new friendships, develop
          skills, and enjoy their summer to the fullest. The camp is designed to
          foster personal growth and confidence in a setting that encourages
          creativity and teamwork.
        </p>
        <p className={SingleNewsStyle["passage"]}>
          Register your child for our Summer Camp at Tennis and Country Club
          Fujairah and give them the chance to experience a summer filled with
          laughter, learning, and new adventures. With our well-rounded program
          and enthusiastic team, your child will have an amazing summer that
          they’ll remember for years to come. Don’t miss this opportunity—enroll
          now and let the summer fun begin!
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
        <div className="d-flex justify-content-between ">
          <Link
            className={SingleNewsStyle["link"]}
            href="/event/itf-junior-tennis-championship-at-tennis-country-club-fujairah-a-premier-event"
          >
            <i className="bx bx-left-arrow-alt"></i> Prev
          </Link>
          <Link
            className={SingleNewsStyle["link"]}
            href="/event/participate-in-the-inaugural-local-tennis-tournament-at-tennis-and-country-club-fujairah"
          >
            Next <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SummerCamp2024;
