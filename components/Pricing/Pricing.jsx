import React from "react";
import PricingStyle from "./css/Pricing.module.css";
import PricingTable from "./PricingTable";

const Pricing = () => {
  const TableData1 = {
    rows: [
      "Adult Tennis Product",
      "Coach:Player Ratio",
      "Session Court Time",
      "Price Per Session (AED)",
      "12 Sessions (AED)",
    ],
    data: [
      ["Ladies Morning", "1 to 8", "60mins", 55, 525],
      ["Fast Track/Beginners", "1 to 8", "60mins", 65, 630],
      ["Improver Coach & Matchplay", "1 to 8", "60mins", 65, 630],
      ["Intermediate Coach & Matchplay", "1 to 8", "60mins", 65, 630],
      ["Advance Coach & Matchplay", "1 to 8", "60mins", 65, 630],
      ["Cardio Tennis", "1 to 8", "60mins", 35, 315],
      ["Club Social Night", "N/A", "120mins", "FREE", "N/A"],
    ],
  };

  const TableData2 = {
    rows: [
      "Private Lessons",
      "Session Court Time",
      "Per Session (AED)",
      "10 Session (AED)",
    ],
    data: [
      ["1 to 1", "60 mins", 210, 1885],
      ["", "45 mins", 170, 1470],
      ["", "30 mins", 130, 1050],
      ["1 to 2", "60 mins", 270, 2355],
      ["", "45 mins", 230, 1980],
      ["", "30 mins", 180, 1600],
      ["1 to 3", "60 mins", 315, 2930],
      ["", "45 mins", 295, 2720],
      ["", "30 mins", 275, 2510],
    ],
  };

  const TableData3 = {
    rows: [
      "Adult Tennis Product",
      "Coach:Player Ratio",
      "Session Court Time",
      "Price Per Session (AED)",
      "12 Sessions (AED)",
    ],
    data: [
      ["Ladies Morning", "1 to 8", "60mins", 65, 625],
      ["Fast Track/Beginners", "1 to 8", "60mins", 75, 735],
      ["Improver Coach & Matchplay", "1 to 8", "60mins", 75, 735],
      ["Intermediate Coach & Matchplay", "1 to 8", "60mins", 75, 735],
      ["Advance Coach & Matchplay", "1 to 8", "60mins", 75, 735],
      ["Cardio Tennis", "1 to 8", "60mins", 50, 475],
      ["Club Social Night", "N/A", "120mins", 55, "N/A"],
    ],
  };

  const TableData4 = {
    rows: [
      "Private Lessons",
      "Session Court Time",
      "Per Session (AED)",
      "10 Session (AED)",
    ],
    data: [
      ["1 to 1", "60 mins", 230, 2095],
      ["", "45 mins", 190, 1675],
      ["", "30 mins", 145, 1255],
      ["1 to 2", "60 mins", 275, 2445],
      ["", "45 mins", 245, 2175],
      ["", "30 mins", 210, 1785],
      ["1 to 3", "60 mins", 325, 3025],
      ["", "45 mins", 320, 2825],
      ["", "30 mins", 295, 2625],
    ],
  };

  const TableData5 = {
    rows: [
      "Adult Tennis Product",
      "Coach:Player Ratio",
      "Session Court Time",
      "Price Per Session (AED)",
      "12 Sessions (AED)",
    ],
    data: [
      ["Toddlers 4-6 years old", "1 to 4", "30mins", 55, 470],
      ["", "1 to 6", "45mins", 60, 575],
      ["Young Biscuits 7-9 years old", "1 to 6", "45mins", 60, 575],
      ["", "1 to 8", "60mins", 70, 680],
      ["Top Biscuits 10- above", "1 to 8", "60mins", 70, 680],
    ],
  };

  const TableData6 = {
    rows: [
      "Private Lessons",
      "Session Court Time",
      "Per Session (AED)",
      "10 Session (AED)",
    ],
    data: [
      ["1 to 1", "60 mins", 210, 1885],
      ["", "45 mins", 170, 1500],
      ["", "30 mins", 130, 1050],
      ["1 to 2", "60 mins", 265, 2355],
      ["", "45 mins", 220, 1990],
      ["", "30 mins", 180, 1600],
      ["1 to 3", "60 mins", 315, 2925],
      ["", "45 mins", 295, 2725],
      ["", "30 mins", 275, 2525],
    ],
  };

  const TableData7 = {
    rows: [
      "Adult Tennis Product",
      "Coach:Player Ratio",
      "Session Court Time",
      "Price Per Session (AED)",
      "12 Sessions (AED)",
    ],
    data: [
      ["Toddlers 4-6 years old", "1 to 4", "30mins", 60, 575],
      ["", "1 to 6", "45mins", 70, 680],
      ["Young Biscuits 7-9 years old", "1 to 6", "45mins", 70, 680],
      ["", "1 to 8", "60mins", 80, 785],
      ["Top Biscuits 10- above", "1 to 8", "60mins", 80, 785],
    ],
  };

  const TableData8 = {
    rows: [
      "Private Lessons",
      "Session Court Time",
      "Per Session (AED)",
      "10 Session (AED)",
    ],
    data: [
      ["1 to 1", "60 mins", 230, 2095],
      ["", "45 mins", 188, 1675],
      ["", "30 mins", 145, 1255],
      ["1 to 2", "60 mins", 275, 2455],
      ["", "45 mins", 245, 2165],
      ["", "30 mins", 210, 1790],
      ["1 to 3", "60 mins", 335, 3015],
      ["", "45 mins", 315, 2825],
      ["", "30 mins", 295, 2615],
    ],
  };

  const TableData9 = {
    rows: ["Classes", "Member", "Non-Member"],
    data: [
      ["INDIVIDUAL-1 HOUR", "95 AED EACH", "130 AED EACH"],
      ["INDIVIDUAL LESSONS-10 CLASSES", "750 AED EACH", "950 AED EACH"],
      [
        "COUPLE LESSONS-10 CLASSES",
        "1050 AED PER COUPLE",
        "1200 AED PER COUPLE",
      ],
      [
        "GROUP LESSONS-10 CLASSES (3 PAX)",
        "575 AED PER REACH",
        "650 AED PER REACH",
      ],
    ],
  };

  const TableData10 = {
    rows: ["Classes", "Pricing"],
    data: [
      ["Private (1 Student, 1 Coach / 1 Session)", "200 AED"],
      ["Semi-Private (2 Students, 1 Coach / 1 Session)", "230 AED"],
      ["4+1 Session (Private)", "800 AED"],
      ["4+1 Session (Semi-Private)", "1000 AED"],
    ],
  };

  const TableData11 = {
    rows: ["Classes", "Prices"],
    data: [
      [
        "1 Month Gym Only Membership with 10 Session Personal Training",
        "900.00 AED",
      ],
      [
        "3 Months Gym Only Membership with 25 Session Personal Training",
        "1400.00 AED",
      ],
      ["10 Session Personal Training", "900 AED"],
      ["20 Session Personal Training", "1500 AED"],
      ["30 Session Personal Training", "2100 AED"],
      ["40 Session Personal Training", "3200 AED"],
      ["Diet Program", "500 AED"],
      ["10 Couple Sessions", "1200 AED"],
      ["Group Training (up to 5 participants)", "349 AED"],
    ],
  };

  const TableData12 = {
    "rows": ["Classes", "Member", "Non-Member"],
    "data": [
      ["1 Session", "77.00 AED", "87.00 AED"],
      ["4 Session", "220.00 AED", "280.00 AED"],
      ["8 Session", "550.00 AED", "620.00 AED"]
    ]
  }

  const TableData13= {
    "rows": ["Classes", "Pricing"],
    "data": [
      ["1 Session", "50.00 AED"],
      ["4 Session", "150.00 AED"],
      ["8 Session", "300.00 AED"]
    ]
  }

  const TableData14 = {
    "rows": ["Classes", "Prices"],
    "data": [
      ["Half Month Package", "150.00 AED"],
      ["Monthly Package", "300.00 AED"],
      ["1 Session", "55.00 AED"]
    ]
  }
  
  const TableData15 = {
    "rows": ["Classes", "Prices"],
    "data": [
      ["10 Sessions", "900.00 AED"],
      ["20 Sessions", "1500.00 AED"],
      ["30 Sessions", "2100.00 AED"],
      ["40 Sessions", "3200.00 AED"],
      ["Diet Program", "500.00 AED"],
      ["10 Couple Sessions", "1200.00 AED"],
      ["Group Training (Up to 5 Participants)", "349.00 AED Each"]
    ]
  }
  
  const TableData16 = {
    "rows": ["Classes", "Prices"],
    "data": [
      ["1 Month Gym Only Membership with 10 Session Personal Training", "900.00 AED"],
      ["3 Months Gym Only Membership with 25 Session Personal Training", "1400.00 AED"]
    ]
  }
  
  const TableData17={
    "rows": ["Classes", "Member", "Non-Member"],
    "data": [
      ["1 Session", "77.00 AED", "87.00 AED"],
      ["4 Session", "220.00 AED", "280.00 AED"],
      ["8 Session", "550.00 AED", "620.00 AED"]
    ]
  }
  
  

  return (
    <div className="mt-5 mb-5">
      <div className="d-flex justify-content-center ">
        <h1 className={PricingStyle["intro-heading"]}>Our Pricing</h1>
      </div>
      <div className="mt-5 container">
        <div className="text-center">
          <h2 className={PricingStyle["BlackText"]}>
            Fujairah Tennis and Country Club
          </h2>
          <h2 className={PricingStyle["GreenText"]}>
            Adult Tennis Prices - MEMBERS
          </h2>
        </div>
        <br />
        <br />
        <PricingTable tableData={TableData1} />
        <PricingTable tableData={TableData2} />
        <div className="text-center mt-5">
          <h2 className={PricingStyle["BlackText"]}>
            Fujairah Tennis and Country Club
          </h2>
          <h2 className={PricingStyle["GreenText"]}>
            Adult Tennis Prices - Non MEMBERS
          </h2>
        </div>
        <br />
        <br />
        <PricingTable tableData={TableData3} />
        <PricingTable tableData={TableData4} />
        <div className="text-center mt-5">
          <h2 className={PricingStyle["BlackText"]}>
            Fujairah Tennis and Country Club
          </h2>
          <h2 className={PricingStyle["GreenText"]}>
            Junior Tennis Prices - MEMBERS
          </h2>
        </div>
        <br />
        <br />
        <PricingTable tableData={TableData5} />
        <PricingTable tableData={TableData6} />
        <div className="text-center mt-5">
          <h2 className={PricingStyle["BlackText"]}>
            Fujairah Tennis and Country Club
          </h2>
          <h2 className={PricingStyle["GreenText"]}>
            Junior Tennis Prices - Non MEMBERS
          </h2>
        </div>
        <br />
        <br />
        <PricingTable tableData={TableData7} />
        <PricingTable tableData={TableData8} />
        <div className="mt-5 container-lg">
          <div className="row align-items-stretch">
            <div className="col-md-6 d-flex">
              <img
                src="/images/pricing/pricing-1.jpg"
                alt=""
                className={`img-fluid  ${PricingStyle["object-fit-covered"]}`}
              />
            </div>
            <div className="col-md-6 mt-3 mt-md-0">
              <h2 className={PricingStyle["BlackText"]}>
                SWIMMING LESSON PACKAGES
              </h2>
              <PricingTable tableData={TableData9} />
            </div>
          </div>
          <div className="row align-items-stretch mt-5">
            <div className="col-md-6 mt-3 mt-md-0">
              <h2 className={PricingStyle["BlackText"]}>
                Paddle Tennis LESSON PACKAGES
              </h2>
              <PricingTable tableData={TableData10} />
            </div>
            <div className="col-md-6 d-flex">
              <img
                src="/images/pricing/pricing-2.jpg"
                alt=""
                className={`img-fluid  ${PricingStyle["object-fit-covered"]}`}
              />
            </div>
          </div>
          <div className="mt-5">
            <h2 className={`text-center ${PricingStyle["BlackText"]}`}>GYM LESSON PACKAGES</h2>
            <PricingTable tableData={TableData11} />
          </div>
          <div className="mt-5">
            <h2 className={`text-center ${PricingStyle["BlackText"]}`}>GYmnastic LESSON PACKAGES</h2>
            <h5 className={`text-center ${PricingStyle["subText"]}`}>Maryana's Classes (Monday/Wednesday)</h5>
            <PricingTable tableData={TableData12} />
          </div>
          <div className="mt-3">
            <h5 className={`text-center ${PricingStyle["subText"]}`}>Khaled’s Classes (Friday/Saturday/Sunday)</h5>
            <PricingTable tableData={TableData13} />
          </div>

          <div className="mt-5">
            <h2 className={`text-center ${PricingStyle["BlackText"]}`}>KickBoxing LESSON PACKAGES</h2>
            <h5 className={`text-center ${PricingStyle["subText"]}`}>Kick Boxing (Tuesday/Thursday)</h5>
            <PricingTable tableData={TableData14} />
          </div>
          <div className="mt-3">
            <h5 className={`text-center ${PricingStyle["subText"]}`}>Personal Training Prices</h5>
            <PricingTable tableData={TableData15} />
          </div>
          <div className="mt-3">
            <h5 className={`text-center ${PricingStyle["subText"]}`}>Membership Offers</h5>
            <PricingTable tableData={TableData16} />
            <p className={PricingStyle['highlight-text']}>1 Month Personal Training with Free Use of Pool, Gym, Jacuzzi, Sauna (Includes 10 Session Personal Training)</p>
          </div>
          <div className="row align-items-stretch mt-5">
            <div className="col-md-6 mt-3 mt-md-0">
              <h2 className={PricingStyle["BlackText"]}>
              Ballet LESSON PACKAGES
              </h2>
              <PricingTable tableData={TableData17} />
            </div>
            <div className="col-md-6 d-flex">
              <img
                src="/images/pricing/pricing-3.jpg"
                alt=""
                className={`img-fluid  ${PricingStyle["object-fit-covered"]}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
