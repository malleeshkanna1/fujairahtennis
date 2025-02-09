import React from "react";
import FacilitiesStyles from "./css/Facilities.module.css";
import Followus from "./Followus";
import Image from "next/image";
import Link from "next/link";

const Facilities = () => {
  const allFacilitiesData = [
    {
      name: "Sauna",
      link: "sauna",
      desc: "Our sauna is a standout feature of the wellness amenities, offering a warm and rejuvenating space for relaxation.",
    },
    {
      name: "Jacuzzi",
      link: "jacuzzi",
      desc: "The design ensures a comfortable and inviting environment, often featuring warm water and soothing jets that offer hydrotherapy benefits.",
    },
    {
      name: "Steam Room",
      link: "steam-room",
      desc: "Our steam room is designed to provide a serene and rejuvenating experience, perfect for enhancing relaxation and promoting recovery.",
    },
  ];

  return (
    <div className="mt-5 mb-5">
      <div className="d-flex justify-content-center ">
        <h1 className={FacilitiesStyles["intro-heading"]}>Our Facilities</h1>
      </div>
      <div className="mt-5 container">
        <div className="row">
          {allFacilitiesData.map((data, i) => (
            <div key={i} className="col-md-12">
              <div
                className={`row align-items-center ${FacilitiesStyles["facility-content"]}`}
              >
                <div
                  className={`col-md-6 mt-4 ${
                    i % 2 === 0 ? "order-md-2" : "order-md-1"
                  } order-1`}
                >
                  <h3>{data.name}</h3>
                  <p>{data.desc}</p>
                  <Link href={'/services/'+data.link} className={FacilitiesStyles["learn-btn"]}>MORE DETAILS</Link>
                </div>
                <div
                  className={`col-md-6 mt-4 ${
                    i % 2 === 0 ? "order-md-1" : "order-md-2"
                  } order-2`}
                >
                  <Image
                   layout="responsive"
                   width={16}
                   height={9}
                    src={`/images/facilities/${data.link}.jpg`}
                    alt={data.name}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Followus/>
    </div>
  );
};

export default Facilities;
