import React, { useEffect, useRef } from "react";

const SkillsCarouselReverse = () => {
  const carouselItems = [
    { src: "https://images.unsplash.com/photo-1736439170342-442627c6baea?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "carousel-item-0" },
    { src: "https://images.unsplash.com/photo-1735798036875-313e94b7a281?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D", alt: "carousel-item-1" },
    { src: "https://images.unsplash.com/photo-1735488883510-df8a5c83a8fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D", alt: "carousel-item-2" },
    { src: "https://images.unsplash.com/photo-1736083821029-665b513718f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D", alt: "carousel-item-3" },
    { src: "https://plus.unsplash.com/premium_photo-1727342635651-6695593ee0d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D", alt: "carousel-item-4" },
    { src: "https://plus.unsplash.com/premium_photo-1734607187626-030b7c9de592?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D", alt: "carousel-item-5" },
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const carouselContainer = carouselRef.current;

    const scrollBackward = () => {
      if (carouselContainer) {
        carouselContainer.scrollLeft -= 1; // Scroll in reverse direction
        if (carouselContainer.scrollLeft <= 0) {
          carouselContainer.scrollLeft =
            carouselContainer.scrollWidth - carouselContainer.offsetWidth;
        }
      }
    };

    const scrollInterval = setInterval(scrollBackward, 10); // Adjust speed with this interval

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex gap-5 items-center w-full h-[340px] overflow-x-scroll scroll-smooth shadow-2xl shadow-black"
        style={{
          whiteSpace: "nowrap",
        }}
      >
        {carouselItems.concat(carouselItems).map((item, index) => (
          <div
            key={index}
            className="relative w-[500px] h-[500px] flex-shrink-0"
          >
            {/* Animated Background */}
            <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse">Hello world</div>

            {/* Carousel Image */}
            <img
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              src={item.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarouselReverse;
