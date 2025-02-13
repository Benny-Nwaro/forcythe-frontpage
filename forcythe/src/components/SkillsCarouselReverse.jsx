import React from "react";
import Marquee from "react-fast-marquee";

function SkillsCarouselReverse() {
  const projects = [
    {
      src: "https://images.unsplash.com/photo-1736439170342-442627c6baea?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "project-image-0",
    },
    {
      src: "https://images.unsplash.com/photo-1735798036875-313e94b7a281?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D",
      alt: "project-image-1",
    },
    {
      src: "https://images.unsplash.com/photo-1735488883510-df8a5c83a8fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
      alt: "project-image-2",
    },
    {
      src: "https://images.unsplash.com/photo-1736083821029-665b513718f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
      alt: "project-image-3",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1727342635651-6695593ee0d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
      alt: "project-image-4",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1734607187626-030b7c9de592?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
      alt: "project-image-5",
    },
  ];

  return (
    <div className="w-full">
      <Marquee direction="right" speed={50} delay={5}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-[400px] h-[400px] overflow-y-clip rounded-lg bg-slate-900 bg-opacity-20 flex-shrink-0 mx-4"
          >
            {/* Animated Background */}
            <div className="bg-accent z-50 w-full h-full bg-black absolute top-0 left-0 blur-2xl bg-opacity-80  mt-24 "></div>

            {/* Project Image */}
            <img
              alt={project.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover rounded-lg -z-10"
              src={project.src}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default SkillsCarouselReverse;
