import React, { useEffect, useState } from "react";
import BookingButton from "./BookingButton";

const AnimatedText = () => {
  const [headingText, setHeadingText] = useState("");
  const [headingAnimationDone, setHeadingAnimationDone] = useState(false);

  const fullHeadingText = "We build products that shape a better future";

  useEffect(() => {
    let headingIndex = 0;

    const animateHeading = () => {
      if (headingIndex < fullHeadingText.length - 1) {
        setHeadingText((prev) => prev + fullHeadingText[headingIndex]);
        headingIndex++;
        setTimeout(animateHeading, 100);
      } else {
        setTimeout(() => setHeadingAnimationDone(true), 500); // Wait before starting paragraph animation
      }
    };

    animateHeading();

    return () => {
      headingIndex = fullHeadingText.length; // Cleanup
    };
  }, []);

  useEffect(() => {
    if (headingAnimationDone) {
      const spans = document.querySelectorAll(".animated-text span");
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add("opacity-100");
        }, index * 400); // Increased delay for slower animation
      });
    }
  }, [headingAnimationDone]);

  return (
    <div className="w-full bg-white bg-opacity-15 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
      <div className="mx-auto">
        <div className="min-h-[180px]">
          <h1 className="text-[3.5rem] text-white sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7">
            {headingText.split("products").map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index === 0 && headingText.includes("products") && (
                  <span className="text-accent text-blue-500">products</span>
                )}
              </React.Fragment>
            ))}
          </h1>
        </div>
        <div className="mb-8 max-w-3xl">
          <div>
            <p className="text-gray-300 text-base md:text-2xl mb-8 leading-7">
              <div className="animated-text">
                {[
                  "We’re ",
                  "the ",
                  "architects ",
                  "of ",
                  "digital ",
                  "excellence ",
                  "across ",
                  "industries. ",
                  "We ",
                  "redefine ",
                  "business ",
                  "with ",
                  "cutting-edge ",
                  "digital ",
                  "strategies ",
                  "that ",
                  "invoke ",
                  "sector-wide ",
                  "transformation. ",
                ].map((word, index) => (
                  <span
                    key={index}
                    className="opacity-0 transition-opacity duration-500"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </p>
          </div>
        </div>
        <div className="mb-5">
          <div className="relative w-fit group">
            <BookingButton />
            <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
