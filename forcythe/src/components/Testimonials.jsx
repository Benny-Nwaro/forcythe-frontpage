import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { title, description, author, imageSrc } = testimonial;

  return (
    <div
      className="mt-5 w-full md:w-[70%] lg:w-[50%] rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-accent3 lg:relative"
      style={{ left: "20%" }}
    >
      {/* Text Content Section */}
      <div className="sm:basis-[58%] pr-3">
        {/* Title */}
        <div>
          <p className="text-base font-bold mb-4">
            <span>{title}</span>
          </p>
        </div>

        {/* Description */}
        <div>
          <p className="text-base leading-7 mb-3">
            <span>{description}</span>
          </p>
        </div>

        {/* Author */}
        <div>
          <p className="text-[15px] font-semibold mb-4">
            <span>{author}</span>
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full h-[24rem] sm:w-auto sm:h-auto sm:basis-[42%] relative object-top mt-3 sm:mt-0">
        <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-xl"></div>
        <img
          alt={author}
          loading="lazy"
          decoding="async"
          className="rounded-xl relative object-top"
          src={imageSrc}
          style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", color: "transparent" }}
        />
      </div>
    </div>
  );
};

// Dummy data
const testimonials = [
  {
    title: "ExecutivePros",
    description:
      "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned them into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",
    author: "Testimony, Co-founder",
    imageSrc: "/images/executive-pro-ceo.svg",
  },
  {
    title: "CreativeWorks",
    description:
      "Their designs and creativity are unmatched! The team worked collaboratively and helped us achieve a web presence that truly reflects our brand.",
    author: "Alex Smith, CEO",
    imageSrc: "/images/creative-works-ceo.svg",
  },
  {
    title: "Innovative Minds",
    description:
      "A fantastic experience working with this team. Their attention to detail and dedication to understanding our needs resulted in outstanding outcomes.",
    author: "Jane Doe, Founder",
    imageSrc: "/images/innovative-minds-ceo.svg",
  },
];

// Component rendering the testimonials dynamically
const Testimonials = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
