import React, { useEffect, useState } from 'react'

function AnimatedHeader(props) {
    const [headingText, setHeadingText] = useState("");
    
  
    useEffect(() => {
        let fullHeadingText = props.text
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

  return (
    <h1 className="text-[3.5rem] text-white sm:text-[3rem] lg:text-[4rem] font-normal leading-[1] mb-7 text-center max-md:text-2xl">
    {headingText.split("Motion").map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index === 0 && headingText.includes("Motion") && (
          <span className="text-accent text-blue-500">Motion</span>
        )}
      </React.Fragment>
    ))}
  </h1>
  )
}

export default AnimatedHeader