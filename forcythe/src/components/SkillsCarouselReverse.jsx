import React, { useEffect, useRef } from "react";

const SkillsCarouselReverse = () => {
  const projects = [
    { src: "https://images.unsplash.com/photo-1736439170342-442627c6baea?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "project-image-0" },
    { src: "https://images.unsplash.com/photo-1735798036875-313e94b7a281?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D", alt: "project-image-1" },
    { src: "https://images.unsplash.com/photo-1735488883510-df8a5c83a8fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D", alt: "project-image-2" },
    { src: "https://images.unsplash.com/photo-1736083821029-665b513718f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D", alt: "project-image-3" },
    { src: "https://plus.unsplash.com/premium_photo-1727342635651-6695593ee0d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D", alt: "project-image-4" },
    { src: "https://plus.unsplash.com/premium_photo-1734607187626-030b7c9de592?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D", alt: "project-image-5" },
  ];

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const startScrolling = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft -= 5; // Reverse scrolling speed
        if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2; // Reset seamlessly to the end
        }
      }
    };

    const interval = setInterval(startScrolling, 5); // Faster interval for quicker updates

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="flex gap-10 items-center w-full h-[500px] overflow-x-scroll scroll-smooth shadow-2xl shadow-black"
        style={{
          whiteSpace: "nowrap",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE and Edge
        }}
      >
        {/* Hide scrollbar for WebKit-based browsers */}
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        {projects.concat(projects).map((project, index) => (
          <div
            key={index}
            className="relative w-[500px] h-[500px] bg-slate-900 bg-opacity-20 rounded-lg flex-shrink-0"
          >
            {/* Animated Background */}
            <div className="bg-accent -z-10 w-full h-full bg-gray-800 absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>

            {/* Project Image */}
            <img
              alt={project.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full px-8 pt-8 object-cover"
              src={project.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarouselReverse;