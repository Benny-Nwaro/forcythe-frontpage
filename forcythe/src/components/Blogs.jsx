import React, { useEffect, useState } from "react";
import BookingButton from "./BookingButton";

const BlogCard = ({ blog }) => {
  const { href, imageSrc, alt, category, author, date, title } = blog;

  return (
    <a
      href={href}
      className="w-full h-full pb-5 rounded-[1.5rem] relative overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl hover:border-b-2 hover:border-l-2 hover:border-r-2 hover:border-blue-400 transition-all duration-500"
    >
      {/* Image Section */}
      <div className="relative h-full max-md:h-52 lg:h-80 mb-4">
        <div className="absolute inset-0 bg-accent bg-opacity-10 rounded-xl animate-pulse z-0"></div>
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover rounded-[1.5rem] transition-transform duration-300 transform group-hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="pl-4 md:pl-5 relative">
        <h1 className="text-white text-2xl font-semibold">Blog</h1>
        <div className="absolute left-0 top-[50%] transform -translate-y-[50%] w-1 h-[90%] bg-white group-hover:translate-x-2 transition-transform duration-300"></div>
        <p className="text-xl md:text-xl  font-semibold text-accent mb-1">
          {category}
        </p>
        <div className="text-xl md:text-xl text-gray-500 flex items-center mb-3">
          <span>{author}</span>
          <span className="mx-2 w-2 h-2 bg-white rounded-full"></span>
          <span>{date}</span>
        </div>
        <h6 className="text-base max-md:text-2xl lg:text-4xl font-semibold text-white line-clamp-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h6>
      </div>
    </a>
  );
};

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
