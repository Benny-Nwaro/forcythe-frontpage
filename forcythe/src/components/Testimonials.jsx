import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Brands from "./Brands";

const Testimonials = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  // Default brand selection when the component mounts
  useEffect(() => {
    const brand = "Starks";
    handleBrandSelection(brand);
  }, []);

  // Handle brand selection
  const handleBrandSelection = (brandName) => {
    setSelectedBrand(brandName);
  };

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
        "https://cdn-jamfh.nitrocdn.com/nAHVBUOgwDBrJMHUWmnpCOHYFNJcvlgF/assets/images/optimized/rev-f6c740b/www.stark-stark.com/wp-content/uploads/2023/08/thomas-kellerman-lawyer.jpg",
    },
    {
      brand: "Iwaria",
      title: "Innovative Minds",
      description:
        "A fantastic experience working with this team. Their attention to detail and dedication to understanding our needs resulted in outstanding outcomes.",
      author: "Jane Doe, Founder",
      imageSrc:
        "https://cdn-jamfh.nitrocdn.com/nAHVBUOgwDBrJMHUWmnpCOHYFNJcvlgF/assets/images/optimized/rev-f6c740b/www.stark-stark.com/wp-content/uploads/2023/08/thomas-kellerman-lawyer.jpg",
    },
    {
      brand: "Beaupreneur",
      title: "Innovative Minds",
      description:
        "A fantastic experience working with this team. Their attention to detail and dedication to understanding our needs resulted in outstanding outcomes.",
      author: "Jane Doe, Founder",
      imageSrc:
        "https://cdn-jamfh.nitrocdn.com/nAHVBUOgwDBrJMHUWmnpCOHYFNJcvlgF/assets/images/optimized/rev-f6c740b/www.stark-stark.com/wp-content/uploads/2023/08/thomas-kellerman-lawyer.jpg",
    },
    {
      brand: "StacAI",
      title: "Innovative Minds",
      description:
        "A fantastic experience working with this team. Their attention to detail and dedication to understanding our needs resulted in outstanding outcomes.",
      author: "Jane Doe, Founder",
      imageSrc:
        "https://cdn-jamfh.nitrocdn.com/nAHVBUOgwDBrJMHUWmnpCOHYFNJcvlgF/assets/images/optimized/rev-f6c740b/www.stark-stark.com/wp-content/uploads/2023/08/thomas-kellerman-lawyer.jpg",
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
      imgSrc: "/images/iwaria.svg",
      alt: "Iwaria",
      extraClasses: "",
    },
    {
      name: "Beaupreneur",
      imgSrc: "/images/Beaupreneur.svg",
      alt: "Beaupreneur",
      extraClasses: "",
    },
  ];

  return (
    <div className="flex flex-col">
        <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] text-white sm:leading-[2.5rem] lg:text-[3rem] lg:leading-[3.5rem] mb-12 max-w-4xl mx-auto text-center">
          <div>
            <span className="opacity-0" style={{ opacity: 1 }}>
              Discover{" "}
            </span>
            <span className="opacity-0" style={{ opacity: 1 }}>
              the{" "}
            </span>
            <span
              className="opacity-0 text-[#60a6e7]"
              style={{ opacity: 1 }}
            >
              transformative{" "}
            </span>
            <span
              className="opacity-0 text-[#60a6e7]"
              style={{ opacity: 1 }}
            >
              stories{" "}
            </span>
            <span className="opacity-0" style={{ opacity: 1 }}>
              of{" "}
            </span>
            <span className="opacity-0" style={{ opacity: 1 }}>
              startups{" "}
            </span>
            <span className="opacity-0" style={{ opacity: 1 }}>
              that{" "}
            </span>
            <span className="opacity-0" style={{ opacity: 1 }}>
              scaled{" "}
            </span>
            <span className="opacity-0" style={{ opacity: 1 }}>
              new{" "}
            </span>
            <span className="opacity-0" style={{ opacity: 1 }}>
              heights{" "}
            </span>
            <span className="opacity-0" style={{ opacity: 1 }}>
              with{" "}
            </span>
            <span className="opacity-0" style={{ opacity: 1 }}>
              us{" "}
            </span>
          </div>
        </p>
      {/* Brands Component */}
      <div>
        <Brands
          brandsData={brandsList}
          onBrandClick={handleBrandSelection}
          className="lg:px-32"
        />
      </div>

      {/* Display selected testimonial card below the selected brand */}
      <div className="flex flex-col items-center gap-10 mt-5">
        {brandsList.map((brand, index) => (
          <div key={index} className="w-full">
            {/* If the current brand is selected, display the corresponding testimonial */}
            {selectedBrand === brand.name && (
              <div className="mt-2 w-full max-md:px-4">
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
