import React from "react";
import BookingButton from "./BookingButton";

const ReadyToScale = () => {
  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 py-10 text-center">
      <div className="w-full sm:max-w-[45rem] mx-auto">
        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] text-white leading-[2.5rem] sm:leading-[4rem] lg:leading-[5rem] mb-6">
          <span className="text-[#60a6e7]">Ready to Scale?</span>
          <br /> Join successful brands that chose us as their
          <span className="text-[#60a6e7]"> growth accelerator</span>
        </h2>
        <div className="w-fit mx-auto mb-5">
          <div className="relative w-fit group">
            <BookingButton />
            <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToScale;
