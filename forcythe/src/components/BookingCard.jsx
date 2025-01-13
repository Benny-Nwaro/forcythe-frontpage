import React, { useState, useEffect } from "react";
import BookingButton from "./BookingButton";

function BookingCard() {
  const [headingText, setHeadingText] = useState("");
  const [paragraphText, setParagraphText] = useState("");
  const fullHeadingText = "We build products that shape a better future";
  const fullParagraphText =
    "We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invoke sector-wide transformation.";

  useEffect(() => {
    let headingIndex = 0;
    let paragraphIndex = 0;

    const animateHeading = () => {
      if (headingIndex < fullHeadingText.length-1) {
        setHeadingText((prev) => prev + fullHeadingText[headingIndex]);
        headingIndex++;
        setTimeout(animateHeading, 100); // Recursive timeout for smooth animation
      } else {
        animateParagraph(); // Start paragraph animation after heading
      }
    };

    const animateParagraph = () => {
      if (paragraphIndex < fullParagraphText.length-1) {
        setParagraphText((prev) => prev + fullParagraphText[paragraphIndex]);
        paragraphIndex++;
        setTimeout(animateParagraph, 50); // Recursive timeout for smooth animation
      }
    };

    animateHeading(); // Start heading animation

    return () => {
      // Cleanup on component unmount
      headingIndex = fullHeadingText.length;
      paragraphIndex = fullParagraphText.length;
    };
  }, []);

  return (
    <div className="w-full lg:h-[500px] bg-white lg:mx-32 max-md:mx-4 bg-opacity-10 p-10 rounded-[4rem] max-md:rounded-[2rem]">
      <div className="min-h-[180px]">
        <h1 className="sm:text-[4rem] text-white lg:text-8xl font-medium leading-[1] mb-7">
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
        <p className="text-white text-base md:text-lg mb-8 leading-7">
          {paragraphText}
        </p>
      </div>
      <div className="mb-5">
        <BookingButton/>
      </div>
    </div>
  );
}

export default BookingCard;
