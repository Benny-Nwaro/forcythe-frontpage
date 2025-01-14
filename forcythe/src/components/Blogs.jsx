import React, { useEffect, useState } from "react";
import BookingButton from "./BookingButton";
import BlogCard from "./BlogCard";



const Blogs = () => {
  const [headingText, setHeadingText] = useState("");
  const fullHeadingText = "Read our articles news and product blog";

  useEffect(() => {
    let headingIndex = 0;
    const animateHeading = () => {
      if (headingIndex < fullHeadingText.length-1) {
        setHeadingText((prev) => prev + fullHeadingText[headingIndex]);
        headingIndex++;
        setTimeout(animateHeading, 100); // Recursive timeout for smooth animation
      } 
    };
    animateHeading(); // Start heading animation
    return () => {
      // Cleanup on component unmount
      headingIndex = fullHeadingText.length;
    };
  }, []);

  const blogs = [
    {
      href: "/blog/will-ai-take-over-art",
      imageSrc:
        "https://res.cloudinary.com/dhahjsrtn/image/upload/v1716992357/Will_AI_take_over_cc9401fe38.jpg",
      alt: "Will AI take over Art?",
      category: "Blog",
      author: "The Reformist",
      date: "May 29th, 2024",
      title: "Will AI take over Art?",
    },
    {
      href: "/blog/cryptocurrency-vs-tokens",
      imageSrc:
        "https://res.cloudinary.com/dhahjsrtn/image/upload/v1716992003/Cryptocurrency_vs_token_f8865950e7.jpg",
      alt: "Cryptocurrency vs Tokens",
      category: "Blog",
      author: "The Reformist",
      date: "May 29th, 2024",
      title: "Cryptocurrency vs Tokens",
    },
    {
      href: "/blog/cryptocurrency-and-crypto-asset",
      imageSrc:
        "https://res.cloudinary.com/dhahjsrtn/image/upload/v1716991585/Cryptocurrency_and_crypto_assets_da92d172fc.jpg",
      alt: "Cryptocurrency and Crypto asset",
      category: "Blog",
      author: "The Reformist",
      date: "May 29th, 2024",
      title: "Cryptocurrency and Crypto asset",
    },
  ];

  return (
    <div className="flex flex-col">
        <div className="flex flex-row max-md:flex-col max-md:mx-4 justify-between  lg:mx-36">
        <h1 className="max-md:text-[2rem] text-white lg:text-5xl font-medium leading-[1] mb-7">
          {headingText.split("products").map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index === 0 && headingText.includes("products") && (
                <span className="text-accent text-blue-500">products</span>
              )}
            </React.Fragment>
          ))}
        </h1>

          <BookingButton/>
          
        </div>
        <div className="blogs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-32 md:gap-8 lg:gap-10 p-4">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  
  );
};

export default Blogs;
