import ManagingMind from "./Contents/ManagingMind";
import GrowingOurTennis from "./Contents/GrowingOurTennis";
import SquashChampJunior from "./Contents/SquashChampJunior";
import UaeSportsDay from "./Contents/UaeSportsDay";
import NationalSportsDay from "./Contents/NationalSportsDay";
import OvercomeTennisPressure from "./Contents/OvercomeTennisPressure";

 
 const Blogsdata = {
    "tennis-and-country-club-fujairah-marks-national-sports-day-in-style": {
      bgImage: "FTCC-Tennis-winners.jpg",
      blogtitle:
        "Tennis and Country Club Fujairah marks National Sports Day in style",
      date: "March 4, 2022",
      comments: 0,
      tag: "NEWS",
      component: <NationalSportsDay />,
    },
    "tennis-country-club-fujairahs-squash-championship-gives-juniors-a-major-boost":
      {
        bgImage: "FTCC-2.jpg",
        blogtitle:
          "Tennis & Country Club Fujairah’s Squash Championship gives juniors a major boost",
        date: "January 18, 2023",
        comments: 0,
        tag: "NEWS",
        component: <SquashChampJunior />,
      },
    "tennis-and-country-club-fujairah-celebrates-uae-sports-day-with-full-spirit":
      {
        bgImage: "UAE-Sports-Day-2024.jpg",
        blogtitle:
          "Tennis and Country Club Fujairah celebrates UAE Sports Day with full spirit",
        date: "March 9, 2024",
        comments: 0,
        tag: "NEWS",
        component: <UaeSportsDay />,
      },
    "overcome-tennis-pressure-master-your-game": {
      bgImage: "overcome.jpg",
      blogtitle: "Overcome Tennis Pressure: Master Your Game",
      date: "August 17, 2024",
      comments: 0,
      tag: "BLOG",
      component: <OvercomeTennisPressure />,
    },
    "managing-your-mind-during-challenging-times": {
      bgImage: "managing.jpg",
      blogtitle: "Managing Your Mind During Challenging Times",
      date: "August 17, 2024",
      comments: 0,
      tag: "BLOG",
      component: <ManagingMind />,
    },
    "growing-our-tennis-program-through-free-trials": {
      bgImage: "growing.jpg",
      blogtitle: "Growing Our Tennis Program Through Free Trials",
      date: "August 17, 2024",
      comments: 0,
      tag: "BLOG",
      component: <GrowingOurTennis />,
    },
  };

export default Blogsdata;
