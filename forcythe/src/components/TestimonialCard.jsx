import React, { useEffect, useState } from "react";

const TestimonialCard = ({ testimonial }) => {
  const { title, description, author, imageSrc } = testimonial;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
       className={`mt-2 h-96 max-md:w-[100%] bg-customBlue lg:w-[35%] rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-accent3 lg:relative max-md:px-4 text-white transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ left: "10%", }}
    >
      {/* Text Content Section */}
      <div className="sm:basis-[58%] pr-3">
        {/* Title */}
        <div>
          <p
            className={`text-base font-bold mb-4 transition-opacity duration-700 ${
              isVisible ? "opacity-100 delay-[200ms]" : "opacity-0"
            }`}
          >
            <span>{title}</span>
          </p>
        </div>
        {/* Description */}
        <div>
          <p
            className={`text-base leading-7 mb-3 transition-opacity duration-700 ${
              isVisible ? "opacity-100 delay-[400ms]" : "opacity-0"
            }`}
          >
            <span>{description}</span>
          </p>
        </div>
        {/* Author */}
        <div>
          <p
            className={`text-[15px] font-semibold mb-4 transition-opacity duration-700 ${
              isVisible ? "opacity-100 delay-[600ms]" : "opacity-0"
            }`}
          >
            <span>{author}</span>
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div
        className={`w-full h-[24rem] sm:w-auto sm:h-auto sm:basis-[42%] relative object-top mt-3 sm:mt-0 transition-all duration-1000 delay-[800ms] ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-xl"></div>
        <img
          alt={author}
          loading="lazy"
          decoding="async"
          className="rounded-xl relative object-top"
          src={imageSrc}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: "0px",
            objectFit: "cover",
            color: "transparent",
          }}
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
