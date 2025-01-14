const BlogCard = ({ blog }) => {
    const { href, imageSrc, alt, category, author, date, title } = blog;
  
    return (
      <a
        href={href}
        className="w-full h-full pb-5 rounded-[1.5rem] relative overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl hover:border-b-2 hover:border-l-2 hover:border-r-2 hover:border-blue-400 transition-all duration-500"
      >
        {/* Image Section */}
        <div className="relative h-full mb-4 max-md:h-52 sm:h-64 md:h-72 lg:h-80">
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
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">Blog</h1>
          <div className="absolute left-0 top-[50%] transform -translate-y-[50%] w-1 h-[90%] bg-white group-hover:translate-x-2 transition-transform duration-300"></div>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-accent mb-1">
            {category}
          </p>
          <div className="text-sm sm:text-base md:text-lg text-gray-500 flex items-center mb-3">
            <span>{author}</span>
            <span className="mx-2 w-2 h-2 bg-white rounded-full"></span>
            <span>{date}</span>
          </div>
          <h6 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white line-clamp-2 group-hover:text-accent transition-colors duration-300">
            {title}
          </h6>
        </div>
      </a>
    );
  };
export default BlogCard  