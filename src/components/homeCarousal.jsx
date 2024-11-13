import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bb1 from "../assets/new/bb1.png";
import bb2 from "../assets/new/bb2.png";
import bb3 from "../assets/new/bb3.png";
import bb4 from "../assets/new/bb4.png";

import mbg1 from "../assets/new/b1.webp";
import mbg2 from "../assets/new/b2.webp";
import mbg3 from "../assets/new/b3.webp";
import mbg4 from "../assets/new/b4.webp";

const ImageCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Slide images and corresponding main images
  const images = [bb1, bb2, bb3, bb4];
  const mainImages = [mbg1, mbg2, mbg3, mbg4]; // Array for main images corresponding to slides

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setActiveSlide(current), // Update active slide index
    responsive: [
     
    ],
    customPaging: (i) => {
      const colors = [
        "bg-[#c1d0db]", // Color for first dot
        "bg-[#1f2626]", // Color for second dot
        "bg-[#b89b91]", // Color for third dot
        "bg-[#45403d]", // Color for fourth dot
      ];
      return (
        <div
          className={` w-3 h-3 rounded-full ${colors[i]} ${
            activeSlide === i ? "scale-125 transform transition-transform" : ""
          } hover:bg-opacity-70 transition-colors duration-300 cursor-pointer`}
        ></div>
      );
    },
  };

  return (
    <div className="pt-5">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`transition-transform duration-300 relative ${
              activeSlide === index ? "scale-125 z-10" : ""
            }`}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto p-3 md:p-5 pointer-events-none"
            />
          </div>
        ))}
      </Slider>

      {/* Display main image below */}
      <div className="w-full mt-5 grid place-items-center">
        <img className="h-[400px] object-contain" src={mainImages[activeSlide]} alt="Main Image" />
      </div>
    </div>
  );
};

export default ImageCarousel;
