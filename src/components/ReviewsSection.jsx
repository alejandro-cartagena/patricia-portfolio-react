import React from "react";
import ReviewCard from "./ReviewCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviewCardData = [
  {
    name: "Christina",
    img: "/reviewImages/christina.jpg",
    review:
      "Patricia's 3D renderings truly brought our project to life. The quality and attention to detail were exceptional, and her work exceeded all of our expectations.",
  },
  {
    name: "Akashi",
    img: "/reviewImages/akashi.jpg",
    review:
      "Fantastic work from Patricia! The photorealistic renderings were absolutely stunning. We couldn't have asked for a better outcome for our project.",
  },
  {
    name: "Ryan",
    img: "/reviewImages/ryan.jpg",
    review:
      "Patricia was professional, timely, and incredibly talented. Her 3D renderings were top-notch, and we highly recommend her services for any rendering needs.",
  },
  {
    name: "Alex",
    img: "/reviewImages/alex.jpg",
    review:
      "Working with Patricia was a pleasure. She transformed our ideas into breathtaking visuals, and we couldn't be happier with the final results received.",
  },
  {
    name: "Darshan",
    img: "/reviewImages/darshan.jpg",
    review:
      "Great communication and outstanding renderings. Patricia consistently delivers high-quality work, making her our go-to expert for 3D visualizations and renders.",
  },
  {
    name: "Jessica",
    img: "/reviewImages/jessica.jpg",
    review:
      "We were thoroughly impressed with Patricia's creativity and the quality of her work. Her 3D renderings added immense value to our project and brought our vision to life.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function ReviewsSection() {
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <h2 className="reviews__heading">Happy Customers</h2>
        {/* <div className="reviews__container"> */}
        <Slider {...settings}>
          {reviewCardData.map((data, index) => {
            return (
              <ReviewCard
                key={index}
                name={data.name}
                img={data.img}
                review={data.review}
              />
            );
          })}
        </Slider>
        {/* </div> */}
      </div>
    </section>
  );
}

export default ReviewsSection;
