import React, { useEffect, useRef } from "react";

const SkillsCarousel = () => {
  const projects = [
    { src: "/images/Project Images/stac.svg", alt: "project-image-0" },
    { src: "/images/Project Images/activity.svg", alt: "project-image-1" },
    { src: "/images/Project Images/africaFund.svg", alt: "project-image-2" },
    { src: "/images/Project Images/starks.svg", alt: "project-image-3" },
    { src: "/images/Project Images/exec-pro.svg", alt: "project-image-4" },
    { src: "/images/Project Images/phone.svg", alt: "project-image-5" },
  ];

  const forwardRef = useRef(null);
  const reverseRef = useRef(null);

  useEffect(() => {
    const scrollCarousel = (ref, direction) => {
      if (ref.current) {
        ref.current.scrollLeft += direction; // Adjust scroll direction
        // Reset the scroll position when reaching the end or start
        if (direction > 0 && ref.current.scrollLeft >= ref.current.scrollWidth / 2) {
          ref.current.scrollLeft = 0;
        } else if (direction < 0 && ref.current.scrollLeft <= 0) {
          ref.current.scrollLeft = ref.current.scrollWidth / 2;
        }
      }
    };

    const forwardInterval = setInterval(() => scrollCarousel(forwardRef, 2), 20); // Forward scroll
    const reverseInterval = setInterval(() => scrollCarousel(reverseRef, -2), 20); // Reverse scroll

    return () => {
      clearInterval(forwardInterval);
      clearInterval(reverseInterval);
    };
  }, []);

  return (
    <div
      className="flex flex-col gap-5 bg-gradient-to-t from-[#030516] via-transparent to-[#030516] py-8"
    >
      {/* Forward Scrolling Carousel */}
      <div
        ref={forwardRef}
        className="flex items-center gap-5 overflow-hidden whitespace-nowrap scroll-smooth"
      >
        {projects.concat(projects).map((project, index) => (
          <div
            key={`forward-${index}`}
            className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex-shrink-0"
          >
            <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
            <img
              src={project.src}
              alt={project.alt}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Reverse Scrolling Carousel */}
      <div
        ref={reverseRef}
        className="flex items-center gap-5 overflow-hidden whitespace-nowrap scroll-smooth"
      >
        {projects.concat(projects).map((project, index) => (
          <div
            key={`reverse-${index}`}
            className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex-shrink-0"
          >
            <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
            <img
              src={project.src}
              alt={project.alt}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;
