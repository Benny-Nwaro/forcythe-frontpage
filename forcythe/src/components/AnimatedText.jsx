import React, { useEffect } from "react";
import BookingButton from "./BookingButton";

const AnimatedText = () => {
  useEffect(() => {
    const spans = document.querySelectorAll('.animated-text span');
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('opacity-100');
      }, index * 200); // Delay each span appearance
    });
  }, []);

  return (
    <div className="w-full bg-white bg-opacity-15 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
      <div className=" mx-auto">
        <div className="min-h-[180px]">
          <h1 className=" animate-typing text-[3.5rem] text-white sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7">
            We build <span className="text-blue-800 animate-typing">products</span> that shape a better future
          </h1>
        </div>
        <div className="mb-8 max-w-3xl">
          <div className="">
            <p className="text-gray-300 text-base md:text-2xl mb-8 leading-7">
              <div className="animated-text">
                <span className="opacity-0 transition-opacity duration-500">We’re </span>
                <span className="opacity-0 transition-opacity duration-500">the </span>
                <span className="opacity-0 transition-opacity duration-500">architects </span>
                <span className="opacity-0 transition-opacity duration-500">of </span>
                <span className="opacity-0 transition-opacity duration-500">digital </span>
                <span className="opacity-0 transition-opacity duration-500">excellence </span>
                <span className="opacity-0 transition-opacity duration-500">across </span>
                <span className="opacity-0 transition-opacity duration-500">industries. </span>
                <span className="opacity-0 transition-opacity duration-500">We </span>
                <span className="opacity-0 transition-opacity duration-500">redefine </span>
                <span className="opacity-0 transition-opacity duration-500">business </span>
                <span className="opacity-0 transition-opacity duration-500">with </span>
                <span className="opacity-0 transition-opacity duration-500">cutting-edge </span>
                <span className="opacity-0 transition-opacity duration-500">digital </span>
                <span className="opacity-0 transition-opacity duration-500">strategies </span>
                <span className="opacity-0 transition-opacity duration-500">that </span>
                <span className="opacity-0 transition-opacity duration-500">invoke </span>
                <span className="opacity-0 transition-opacity duration-500">sector-wide </span>
                <span className="opacity-0 transition-opacity duration-500">transformation. </span>
              </div>
            </p>
          </div>
        </div>
        <div className="mb-5">
          <div className="relative w-fit group">
          <BookingButton/>
            <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
