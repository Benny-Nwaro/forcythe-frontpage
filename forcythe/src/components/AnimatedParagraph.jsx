import React, { useEffect } from "react";

function AnimatedParagraph({ textArray = [] }) {
  useEffect(() => {
    const spans = document.querySelectorAll(".animated-text span");
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("opacity-100");
      }, index * 400); // Adjust delay for animation speed
    });
  }, []);

  return (
    <p className="text-gray-300 text-base md:text-2xl mb-8 leading-7">
      <div className="animated-text">
        {textArray.map((word, index) => (
          <span
            key={index}
            className="opacity-0 transition-opacity duration-500"
          >
            {word === "Motion"&&(<span className="text-accent text-blue-500">Motion</span>)}
            {/* {index === 0 && textArray.includes("Motion") && (
                <span className="text-accent text-blue-500">Motion</span>
            )} */}
          </span>
        ))}
      </div>
    </p>
  );
}

export default AnimatedParagraph;
