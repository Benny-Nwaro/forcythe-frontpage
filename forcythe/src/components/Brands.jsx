import React from "react";

const Brands = () => {
  const brands = [
    {
      name: "Starks",
      imgSrc: "/images/starks.svg",
      alt: "Starks Associate",
      extraClasses: "rounded-s-full",
    },
    {
      name: "ExecutivePros",
      imgSrc: "/images/ExecutivePros Logo.svg",
      alt: "ExecutivePros",
      extraClasses: "",
    },
    {
      name: "Stac AI",
      imgSrc: "/images/stacai.svg",
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
      extraClasses: "rounded-e-full bg-accent3",
    },
  ];

  return (
    <div className="w-full overflow-x-scroll hide-scrollbar">
      <div className="w-full border-[1px] border-[#06438C] rounded-full grid grid-cols-5 min-w-[750px]">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={`w-full p-[1.1rem] cursor-pointer transition-all duration-300 ${brand.extraClasses}`}
          >
            <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
              <img
                alt={brand.alt}
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                className={`w-full ${brand.name === "Iwaria" ? "w-20" : ""} ${
                  brand.name === "Beaupreneur" ? "w-36" : ""
                }`}
                src={brand.imgSrc}
              />
              {brand.name && <span>{brand.name}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
