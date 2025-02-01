"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import TestimonialStyles from "./css/Testimonial.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      id: 0,
      name: "Alper Uygur",
      location: "Sacramento",
      image: "/images/testimonial/alper-uygur.jpg",
      text: "Tennis & Country Club caters to players of all skill levels, making it an ideal choice for everyone. In just one year, I’ve noticed remarkable progress in both my game and my children’s skills. The expert coaches and trainers are among the best, dedicated to helping us improve. We truly appreciate the care and personalized attention we receive. If you’re seeking a great place to enjoy tennis and enhance your skills, Tennis & Country Club is highly recommended.",
    },
    {
      id: 1,
      name: "Simon Choren",
      location: "New York",
      image: "/images/testimonial/simon-choren.jpg",
      text: "I am extremely satisfied with the outstanding support and attention provided by Tennis & Country Club. Their dedicated staff has significantly improved my skills and boosted my confidence, allowing me to participate in my first South Florida tournament. I highly recommend Tennis & Country Club for players of all levels looking to elevate their game in a supportive and professional environment.",
    },
    {
      id: 2,
      name: "Pablo Peraza",
      location: "San Diego",
      image: "/images/testimonial/pablo-peraza.jpg",
      text: "I've been part of Tennis & Country Club for 6 months, and both the classes and atmosphere are outstanding. My skills have improved daily, and I genuinely enjoy every session. I commend the team for their professionalism and dedication to making this table tennis club a success. I’m extremely grateful for the exceptional coaching and support.",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setActiveSlide(current),
  };

  const handleImageClick = (index) => {
    setActiveSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className={TestimonialStyles.testimonialContainer}>
      <div className="mt-5 container">
        <div className="d-flex d-md-block justify-content-center">
          <div>
          <p className={TestimonialStyles.smallText}>About Us</p>
          <h1 className={TestimonialStyles["intro-heading"]}>Testimonials</h1>
          </div>
        </div>
    
        <div className="row align-items-center">
          <div className="col-md-4  order-2 order-md-1">
            <div className="row">
              {testimonials.map((data, i) => (
                <div className="col-xl-4 mt-3 mt-md-0" key={i}>
                  <div className="row">
                    <div className="col-4 col-md-12">
                      <div
                        className={TestimonialStyles.profileContainer}
                        onClick={() => handleImageClick(i)}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={data.image}
                          alt={data.name}
                          className={
                            i !== testimonials[activeSlide].id
                              ? TestimonialStyles.DisabledprofileImage
                              : TestimonialStyles.profileImage
                          }
                        />
                      </div>
                    </div>
                    <div className="col-8  col-md-12 mt-2 mt-md-3">
                      <div
                        className={
                          i !== testimonials[activeSlide].id
                            ? TestimonialStyles.DisabledprofileText
                            : TestimonialStyles.profileText
                        }
                      >
                        <h4>{data.name}</h4>
                        <p>{data.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-8 mt-4 mt-md-0 order-1 order-md-2 position-relative">
            <Slider ref={sliderRef} {...sliderSettings}>
              {testimonials.map((testimonial, i) => (
                <div key={i} className={TestimonialStyles.slide}>
                  <p className={TestimonialStyles.testimonialText}>
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </Slider>
            <button
              className={TestimonialStyles.slideButton}
              onClick={() => sliderRef.current.slickPrev()}
            >
              <i className="bx bxs-chevron-left"></i>
            </button>{" "}
            &nbsp;&nbsp;
            <button
              className={TestimonialStyles.slideButton}
              onClick={() => sliderRef.current.slickNext()}
            >
              <i className="bx bxs-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
