import React from "react";
import worldImage from "../assets/images/worldImage.png";
import BookingCard from "./BookingCard";
import AnimatedText from "./AnimatedText";

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
      {/* <BookingCard/> */}
      <div className="mx-32 max-md:mx-4"> 
      <AnimatedText/>
      </div>
     
    </div>
  );
};

export default HeroSection;
