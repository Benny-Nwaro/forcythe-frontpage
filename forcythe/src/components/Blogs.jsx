import React from "react";

const BlogCard = ({ blog }) => {
  const { href, imageSrc, alt, category, author, date, title } = blog;

  return (
    <a
      href={href}
      className="w-full pb-5 rounded-xl relative overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-500"
    >
      {/* Image Section */}
      <div className="relative h-60 sm:h-52 md:h-48 mb-4">
        <div className="absolute inset-0 bg-accent bg-opacity-10 rounded-xl animate-pulse z-0"></div>
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover rounded-xl transition-transform duration-300 transform group-hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="pl-4 md:pl-5 relative">
        <div className="absolute left-0 top-[50%] transform -translate-y-[50%] w-1 h-[90%] bg-white group-hover:translate-x-2 transition-transform duration-300"></div>
        <p className="text-sm md:text-base font-semibold text-accent mb-1">
          {category}
        </p>
        <div className="text-xs md:text-sm text-gray-500 flex items-center mb-3">
          <span>{author}</span>
          <span className="mx-2 w-1 h-1 bg-gray-400 rounded-full"></span>
          <span>{date}</span>
        </div>
        <h6 className="text-base md:text-lg lg:text-xl font-semibold text-white line-clamp-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h6>
      </div>
    </a>
  );
};

const Blogs = () => {
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
    <div className="blogs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 p-4">
      {blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
