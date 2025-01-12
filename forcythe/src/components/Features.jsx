import React from "react";
// import "../assets/styles/card.css"

const FeatureCard = ({ title, backgroundImage, description }) => {
  return (
    <div className="card b">
      <div className="w-full h-full">
      <p>
      {title}
    </p>

      </div>
  </div>
  );
};

const Features = () => {
  const features = [
    {
      title: "Experience",
      description:
        "Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
      backgroundImage: "https://plus.unsplash.com/premium_photo-1689902335785-b187c1c324f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Quick Support",
      description:
        "Always there when you need us, ensuring smooth operations at every stage of your growth.",
      backgroundImage: "../images/whisper-img.jpg",
    },
    {
      title: "Cost Savings",
      description:
        "Cost-effective solutions without compromising on quality.",
      backgroundImage: "../images/whisper-img.jpg",
    },
  ];

  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          backgroundImage={feature.backgroundImage}
        />
      ))}
    </div>
  );
};

export default Features;
