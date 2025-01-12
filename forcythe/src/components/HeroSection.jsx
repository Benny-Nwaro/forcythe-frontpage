import React from "react";
import worldImage from "../assets/images/worldImage.png";
import BookingCard from "./BookingCard";

const HeroSection = () => {
  return (
    <div
      className="w-full h-[80vh] flex justify-center mt-32"
      style={{
        backgroundImage: `url(${worldImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <BookingCard/>
     
    </div>
  );
};

export default HeroSection;
