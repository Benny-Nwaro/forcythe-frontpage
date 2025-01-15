import React from "react";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { LuYoutube } from "react-icons/lu";
import logo from "../assets/images/logo.png";

function FooterSection() {
  return (
    <div className="section-padding py-10 lg:mx-32 max-md:mx-5 bg-secondaryBackground">
      <div className="lg:grid lg:grid-cols-3 my-10">
        {/* Subscription Form */}
        <div className="max-w-lg mb-10 lg:mb-0">
          <div className="w-full grid grid-cols-4 mb-5">
            <input
              className="py-4 col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-lg placeholder:text-gray-500 max-md:py-2 max-md:text-sm"
              placeholder="Your Email Address"
              type="text"
            />
            <button className="py-3 h-full bg-white text-black hover:bg-[#064386] hover:text-white custom-animate  rounded-e-full text-base font-semibold border border-l-0 max-md:text-sm border-white">
              Subscribe
            </button>
          </div>
          <div className="flex gap-3  pt-5 text-white items-center">
            <div className="w-5 h-5 border-2 rounded-full bg-transparent border-white cursor-pointer flex items-center justify-center">
              <input
                className="hidden"
                id="agreement"
                type="checkbox"
                name="agreement"
              />
            </div>
            <label
              htmlFor="agreement"
              className="text-lg cursor-pointer "
            >
              I agree to receive other notifications from Forcythe
            </label>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid text-white grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0">
          <div className="lg:pl-14 md:col-span-2 md:pr-10">
            <img
              alt="Forcythe logo"
              // width="130"
              // height="9"
              className="mb-5 md:mb-8 text-4xl"
              src={logo}
            />
            <p className="text-xl text-gray-500 leading-normal font-normal">
              We are the growth company for businesses looking to scale. We are
              dedicated to transforming businesses with bespoke digital
              solutions that drive growth.
            </p>
            <div className="mt-10 flex flex-row justify-between  items-center gap-2 max-md:mx-auto">
              {/* Social Icons */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/forcythe/"
                className="w-12 h-12 cursor-pointer text-blue-300 rounded-full border-[2px] border-blue-300 p-2 flex justify-center items-center"
              >
                <LuFacebook size={30} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/forcythe"
                className="w-12 h-12 cursor-pointer text-blue-300 rounded-full border-[2px] border-blue-300 p-1 flex justify-center items-center"
              >
                <FaInstagram size={30} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/forcythe_"
                className="w-12 h-12 cursor-pointer  text-blue-300 rounded-full border-[2px] border-blue-300 p-2 flex justify-center items-center"
              >
                <FaXTwitter size={30} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/forcythe/"
                className="w-12 h-12 cursor-pointer text-blue-300 rounded-full border-[2px] border-blue-300 p-2  flex justify-center items-center"
              >
                <FaLinkedinIn size={30} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/@forcythe"
                className="w-12 h-12cursor-pointer text-blue-300 rounded-full border-[2px] border-blue-300 p-2 flex justify-center items-center"
              >
                <LuYoutube size={30} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:pl-10">
            <h3 className="mb-8 text-4xl font-bold">Company</h3>
            <ul className="flex flex-col gap-2 text-blue-300 text-xl">
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/services#portfolio", label: "Portfolio" },
                { href: "/studio", label: "Studio" },
                { href: "/foundation", label: "Foundation" },
                { href: "/career", label: "Careers" },
                { href: "/blog", label: "Blog" },
              ].map(({ href, label }, idx) => (
                <li key={idx} className="text-base text-accent2 font-medium">
                  <a href={href}>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className=" border-t-[1px] border-accent border-blue-300">
        <p className="text-accent2 text-blue-300 text-sm mt-5 text-center md:text-left">
          Copyright © 2024 Forcythe. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default FooterSection;
