import React, { useState } from 'react';
import BookingButton from './BookingButton';

const Section = () => {
  const [activeTab, setActiveTab] = useState('Idea');

  const tabDetails = [
    {
      name: 'Idea',
      imageSrc: 'https://cdn-icons-png.flaticon.com/256/10134/10134814.png',
      heading:"Your vision is unique.",
      description: 'Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.',
    },
    {
      name: 'Design',
      imageSrc: 'https://cdn-icons-png.flaticon.com/256/11355/11355571.png',
      heading:"Crafting the blueprint for success",
      description: 'Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.',
    },
    {
      name: 'Develop',
      imageSrc: 'https://cdn-icons-png.flaticon.com/256/9394/9394519.png',
      heading:"Turning blueprints into reality.",
      description: 'We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.',
    },
    {
      name: 'Launch',
      imageSrc: 'https://cdn-icons-png.flaticon.com/256/6596/6596459.png',
      heading:"Your launchpad to the market.",
      description: 'We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.',
    },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const activeTabDetails = tabDetails.find((tab) => tab.name === activeTab);

  return (
    <div className="py-20 mx-32 max-md:mx-4 ">
      <div className="mb-12 max-w-[50rem]  max-md:text-center">
        <p className="text-[2rem] leading-[32px] sm:text-[2.2rem] text-white sm:leading-[2.5rem] lg:text-[3rem] lg:leading-[3rem]">
          From{' '}
          <span className="text-[#60a6e7] capitalize">Spark</span> to{' '}
          <span className="text-[#60a6e7] capitalize">Spotlight</span>: we take you every step of the way to success.
        </p>
      </div>

      <div className="flex flex-col mt-10 max-md:mx-4  md:flex-row items-center justify-between">
        {/* Tabs Section */}
        <div className="flex flex-col w-96 md:flex-row basis-1/2 max-md:mx-4  mb-8 md:mb-0">
          <div className="w-full max-md:px-4 ">
            <div className="flex flex-row justify-between max-md:w-full max-md:px-4 py-2 px-2 w-full border-2 border-light-blue mb-12 rounded-full ">
              {tabDetails.map((tab) => (
                <div
                  key={tab.name}
                  className={`overflow-hidden max-md:py-2  max-md:text-sm max-md:px-1 max-md:text-center rounded-full text-center text-xl py-4 px-4 font-medium cursor-pointer transition-all duration-300 w-24 ${
                    activeTab === tab.name ? 'bg-light-blue text-black w-32 max-md:w-24  ' : 'bg-transparent text-white'
                  }`}
                  onClick={() => handleTabClick(tab.name)}
                >
                  {tab.name}
                </div>
              ))}
            </div>

            <p className="text-[3rem] sm:text-[2rem] font-[500] text-white leading-8 max-md:text-3xl sm:leading-8 mb-12">
            {activeTabDetails.heading}
            </p>

            <p className="text-gray-500 text-2xl mb-8 leading-7">
              {activeTabDetails.description}
            </p>

            <div className="relative w-fit group">
              <BookingButton />
              <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="basis-1/2 relative flex justify-center mt-6 md:mt-0">
          <img
            alt={`${activeTabDetails.name}-image`}
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]"
            src={activeTabDetails.imageSrc}
            style={{ color: 'transparent' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
