import React, { useEffect } from "react";
import logo from "../assets/images/logo.png"
import { HiMenuAlt2 } from "react-icons/hi";


const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY >= 5) {
        navbar?.classList.add("backdrop-blur-md");
      } else {
        navbar?.classList.remove("backdrop-blur-md");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="section-padding navbar w-full lg:px-32 fixed top-0 left-0 py-[1.8rem] flex justify-between gap-10 items-center z-30 max-md:px-5  backdrop-blur-md">
      {/* Left Section */}
      <div className="flex items-center gap-20">
        {/* Logo */}
        <a href="/">
          <img
            alt="Forcythe logo"
            width="150"
            height="20"
            decoding="async"
            className="w-28 sm:w-32 md:w-auto"
            src={logo}
          />
        </a>
        {/* Navigation Links */}
        <div className="hidden md:flex text-lg items-center gap-4 text-white">
          <a href="/about">
            <span>About</span>
          </a>
          <a href="/services">
            <span>Services</span>
          </a>
          <a href="/services#portfolio">
            <span>Portfolio</span>
          </a>
          <a href="/studio">
            <span>Studio</span>
          </a>
          <a href="/foundation">
            <span>Foundation</span>
          </a>
        </div>
      </div>

      {/* Center Section (Button) */}
      <div className="hidden md:block">
        <div className="relative w-fit group">
          <button
            data-cal-namespace=""
            data-cal-link="forcythe/discovery"
            data-cal-config='{"layout":"month_view"}'
            className="action-button custom-animate py-4 px-5 flex gap-2 items-center justify-center rounded-full bg-white text-black text-lg relative z-10 font-bold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md"
          >
            Book a Call
          </button>
          <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
        </div>
      </div>

      {/* Right Section (Menu Button) */}
      <div className="menuBtn bg-white bg-opacity-10 rounded-md p-3 md:hidden cursor-pointer">
      <HiMenuAlt2 className="text-white text-xl" />

      </div>
    </div>
  );
};

export default Navbar;
