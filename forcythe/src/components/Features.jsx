import React, { useEffect, useState } from "react";
import "../assets/styles/card.css";
import { TbStack2 } from "react-icons/tb";

const Features = () => {
  const features = [
    {
      title: "Experience",
      description:
        "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
    },
    {
      title: "Quick Support",
      description:
        "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
    },
    {
      title: "Cost Savings",
      description:
        "Maximizing impact, minimizing costs. Efficiency is key. We provide cost-effective solutions without compromising on quality.",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const target = document.querySelector(".features-container");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <div className="py-14 mx-32 max-md:mx-5">
      <div className="text-center text-white mb-10">
        <p className="text-2xl text-light-blue max-md:text-4xl lg:text-4xl leading-tight">
          Your best call for <span className="capitalize">B2B/B2C</span> product innovation
        </p>
      </div>
      <div
        className={`features-container flex flex-row justify-between max-md:flex-col text-white ${
          isVisible ? "animate-appear" : ""
        }`}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="card relative  w-full max-md:mb-10 flex flex-col items-center rounded-2xl transition-transform duration-500 hover:scale-105"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative z-10 bg-black w-full h-full hover:border-2 hover:border-blue-500 max-md:p-5 sm:p-10 rounded-2xl hover:shadow-lg">
              <div className="w-fit p-2 bg-light-blue bg-opacity-60 rounded-2xl mb-5">
                <TbStack2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-4xl text-left text-white font-medium mb-5">
                {feature.title}
              </h4>
              <p className="text-gray-500 text-left text-2xl">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
