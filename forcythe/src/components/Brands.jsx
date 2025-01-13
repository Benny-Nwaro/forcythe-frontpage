import React, { useState } from "react";

const Brands = ({ brandsData, onBrandClick, className }) => {
  const [activeBrand, setActiveBrand] = useState(null);

  const handleBrandClick = (brandName) => {
    setActiveBrand(brandName);
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
            onClick={() => handleBrandClick(brand.name)}
            className={`w-full p-2 cursor-pointer transition-all duration-300 ${
              brand.extraClasses
            } ${activeBrand === brand.name ? " bg-customBlue rounded-full text-white" : ""}`}
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
