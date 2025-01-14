import React, { useState, useEffect } from "react";

const Brands = ({ brandsData, onBrandClick, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % brandsData.length); // Cycle through all tabs
    }, 5000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [brandsData.length]);

  useEffect(() => {
    if (onBrandClick) {
      onBrandClick(brandsData[activeIndex]?.name);
    }
  }, [activeIndex, brandsData, onBrandClick]);

  const handleBrandClick = (brandName, index) => {
    setActiveIndex(index); // Manually set the active tab
    if (onBrandClick) {
      onBrandClick(brandName);
    }
  };

  return (
    <div className={`w-full overflow-x-scroll hide-scrollbar ${className || ""}`}>
      <div className="w-full border-[2px] border-[#06438C] rounded-full grid grid-cols-5 min-w-[750px]">
        {brandsData?.map((brand, index) => (
          <button
            key={index}
            onClick={() => handleBrandClick(brand.name, index)}
            className={`w-full p-2 cursor-pointer transition-all duration-300 ${
              brand.extraClasses
            } ${activeIndex === index ? " bg-customBlue rounded-full text-white" : ""}`}
          >
            <div className="w-fit h-14 mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
              <img
                alt={brand.alt}
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                className={`w-full ${
                  brand.name === "Starks" ? `w-20 h-14 text-white rounded-full` : ""
                } ${
                  brand.name === "Iwaria" ? `w-30 h-14 text-white rounded-full` : ""
                }  ${
                  brand.name === "Beaupreneur" ? `w-44 h-14 text-white rounded-full` : ""
                }`}
                src={brand.imgSrc}
              />
              {brand.name === "Starks" && <span>{brand.name}</span>}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Brands;
