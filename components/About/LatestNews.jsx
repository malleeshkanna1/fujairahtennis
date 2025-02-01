import React from "react";
import LatestNewsStyles from "./css/LatestNews.module.css";
import Link from "next/link";

const LatestNews = () => {
  const latestNewsData = [
    {
      image: "Tennis-3",
      title:
        "Tennis and Country Club Fujairah celebrates UAE Sports Day with full spirit",
      link: "tennis-and-country-club-fujairah-celebrates-uae-sports-day-with-full-spirit",
    },
    {
      image: "FTCC-Tennis-winners",
      title:
        "Tennis and Country Club Fujairah marks National Sports Day in style",
      link: "tennis-and-country-club-fujairah-marks-national-sports-day-in-style",
    },
    {
      image: "FTCC-2",
      title:
        "Tennis & Country Club Fujairah’s Squash Championship gives juniors a major boost",
      link: "tennis-country-club-fujairahs-squash-championship-gives-juniors-a-major-boost",
    },
  ];

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1 className={LatestNewsStyles["intro-heading"]}>Latest News</h1>
      </div>
      <div className="container mt-3">
        <div className="row">
          {latestNewsData.map((data, i) => (
            <div className="col-md-6 col-lg-4 d-flex mt-4 mt-lg-0" key={i}>
              <div
                className={`${LatestNewsStyles["card"]} d-flex flex-column w-100`}
              >
                <Link href={data.link} className="text-decoration-none">
                  <div className={LatestNewsStyles["image-container"]}>
                    <img
                      src={`/images/aboutus/${data.image}.jpg`}
                      alt={data.title}
                    />
                  </div>
                  <div
                    className={`${LatestNewsStyles["card-content"]} d-flex flex-column`}
                  >
                    {data.title}
                    <h5 className={LatestNewsStyles["news-tagline"]}>News</h5>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
