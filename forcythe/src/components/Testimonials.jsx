import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Brands from "./Brands";

const Testimonials = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  // Default brand selection when the component mounts
  useEffect(() => {
    const defaultBrand = "Starks";
    handleBrandSelection(defaultBrand);
  }, []);

  // Handle brand selection
  const handleBrandSelection = (brandName) => {
    setSelectedBrand(brandName);
  };
    useEffect(() => {
      const spans = document.querySelectorAll('.animated-text span');
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add('opacity-100');
        }, index * 100); // Delay each span appearance
      });
    }, []);

  // Dummy data for testimonials
  const testimonials = [
    {
      brand: "ExecutivePros",
      title: "ExecutivePros",
      description:
        "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned them into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",
      author: "Testimony, Co-founder",
      imageSrc:
        "https://cdn-jamfh.nitrocdn.com/nAHVBUOgwDBrJMHUWmnpCOHYFNJcvlgF/assets/images/optimized/rev-f6c740b/www.stark-stark.com/wp-content/uploads/2023/08/thomas-kellerman-lawyer.jpg",
    },
    {
      brand: "Starks",
      title: "CreativeWorks",
      description:
        "Their designs and creativity are unmatched! The team worked collaboratively and helped us achieve a web presence that truly reflects our brand.",
      author: "Alex Smith, CEO",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmZC5fycFQNQ6lvPenS34eJKIEZDkF9Xg7A&s",
    },
    {
      brand: "Iwaria",
      title: "Innovative Minds",
      description:
        "A fantastic experience working with this team. Their attention to detail and dedication to understanding our needs resulted in outstanding outcomes.",
      author: "Jane Doe, Founder",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ctYbhVWz2nUvsCsyjO7X0fi_CqIZtfkHXw&s",
    },
    {
      brand: "Beaupreneur",
      title: "Beaupreneur",
      description:
        "Our collaboration was seamless and resulted in designs that exceeded our expectations. The team’s approach made a significant difference in our brand's online presence.",
      author: "Emily Johnson, Founder",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcjjbyT7RgZGo5hz2auM8JSZGlxhKXMxHpQ&s",
    },
    {
      brand: "StacAI",
      title: "StacAI",
      description:
        "Their solutions are innovative and cutting-edge. Working with them was a breeze, and they delivered everything on time with outstanding quality.",
      author: "Michael Carter, CTO",
      imageSrc:
        "https://imageio.forbes.com/specials-images/imageserve/6312063960005b4ab0213eba/Allow-us-to-lead-your-business-to-greatness/960x0.jpg?height=509&width=711&fit=bounds",
    },
  ];

  // Brands list
  const brandsList = [
    {
      name: "Starks",
      imgSrc:
        "https://media.licdn.com/dms/image/v2/C4D0BAQEIz4Motf7EMA/company-logo_200_200/company-logo_200_200/0/1643367870874?e=2147483647&v=beta&t=oXdwILAwSMjZGGyTo6i9n6kdvwEHp9-JH4eYPzmWWF0",
      alt: "Starks Associate",
      extraClasses: "",
    },
    {
      name: "ExecutivePros",
      imgSrc: "https://executivepros.co/assets/logo-k--SNeiu.png",
      alt: "ExecutivePros",
      extraClasses: "",
    },
    {
      name: "StacAI",
      imgSrc: "https://stac.ai/shared/stac-ai-logo.svg",
      alt: "Stac AI",
      extraClasses: "",
    },
    {
      name: "Iwaria",
      imgSrc: "https://iwaria.com/wp-content/themes/iwaria-prime/images/logo-white.png",
      alt: "Iwaria",
      extraClasses: "",
    },
    {
      name: "Beaupreneur",
      imgSrc: "https://www.beaupreauenmauges.fr/templates/images/logo-Beaupreau-en-Mauges.png",
      alt: "Beaupreneur",
      extraClasses: "",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="mb-8 max-md:mb-2 max-md:mt-10 max-md:w-5/6 text-center w-2/3 mx-auto">
          <div className="">
            <p className="text-white text-base md:text-6xl max-md:text-3xl max-md:font-semibold mb-8 leading-7">
              <div className="animated-text">
                <span className="opacity-0 transition-opacity duration-500"> Discover{" "}the
                </span>
                <span className="opacity-0 transition-opacity duration-500 text-[#60a6e7]"> transformative stories
                </span>
                <span className="opacity-0 transition-opacity duration-500"> of startups that scaled new heights with us.
                </span>
              </div>
            </p>
          </div>
        </div>

      {/* Brands Component */}
      <div className="relative">
        <Brands
          brandsData={brandsList}
          onBrandClick={handleBrandSelection}
          className="lg:px-32"
        />
      </div>

      {/* Testimonial Card */}
      <div className=" lg:mx-32  lg:mb-40">
        {brandsList.map((brand, index) => (
          <div key={index} className="relative">
            {selectedBrand === brand.name && (
              <div className="absolute top-[120%] left-1/2 transform -translate-x-1/2 w-full h-full max-md:px-4 z-10">
                <TestimonialCard
                  testimonial={
                    testimonials.find((test) => test.brand === brand.name) || {}
                  }
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
