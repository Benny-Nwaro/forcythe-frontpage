import React from "react";
import BookingButton from "./BookingButton";

const ReadyToScale = () => {
  return (
    <div className="mx-32 max-md:mx-4 py-10 text-center">
      <div className="max-w-[45rem] mx-auto">
        <h2 className="text-[4rem] max-md:text-[2rem] text-white leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[3rem] lg:leading-[3rem] mb-6">
          <span className="text-blue-500">Ready to Scale?</span>
          <br /> Join successful brands that chose us as their
          <span className="text-blue-500"> growth accelerator</span>
        </h2>
        <div className="w-fit mx-auto mb-5">
          <div className="relative w-fit group">
          <BookingButton/>
            <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToScale;
