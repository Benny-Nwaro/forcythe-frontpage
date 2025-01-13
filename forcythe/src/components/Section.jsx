import React, { useState } from 'react';
import BookingButton from './BookingButton';

const Section = () => {
  const [activeTab, setActiveTab] = useState('Idea');

  const tabDetails = [
    {
      name: 'Idea',
      imageSrc: 'https://cdn-icons-png.flaticon.com/256/10134/10134814.png',
      description: 'Nurture your idea into a blueprint for success.',
    },
    {
      name: 'Design',
      imageSrc: 'https://cdn-icons-png.flaticon.com/256/11355/11355571.png',
      description: 'Transform your idea into a visual masterpiece.',
    },
    {
      name: 'Develop',
      imageSrc: 'https://cdn-icons-png.flaticon.com/256/9394/9394519.png',
      description: 'Bring your vision to life with cutting-edge development.',
    },
    {
      name: 'Launch',
      imageSrc: 'https://cdn-icons-png.flaticon.com/256/6596/6596459.png',
      description: 'Launch your project and watch it grow.',
    },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const activeTabDetails = tabDetails.find((tab) => tab.name === activeTab);

  return (
    <div className="section-padding py-20 lg:mx-32">
      <div className="mb-12 xl:mb-0 max-w-[45rem]">
        <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] text-white sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem]">
          From{' '}
          <span className="text-[#60a6e7] capitalize">Spark</span> to{' '}
          <span className="text-[#60a6e7] capitalize">Spotlight</span>: we take you every step of the way to success.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Tabs Section */}
        <div className="flex flex-col md:flex-row basis-1/2 mb-8 md:mb-0">
          <div className="md:pr-10">
            <div className="border-2 border-accent2 mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5">
              {tabDetails.map((tab) => (
                <div
                  key={tab.name}
                  className={`overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 w-24 ${
                    activeTab === tab.name ? 'bg-blue-600 text-white' : 'bg-transparent text-white'
                  }`}
                  onClick={() => handleTabClick(tab.name)}
                >
                  {tab.name}
                </div>
              ))}
            </div>

            <p className="text-[1.8rem] sm:text-[2rem] font-[500] text-white leading-8 sm:leading-8 mb-12">
              Your vision is unique.
            </p>

            <p className="text-white text-base md:text-lg mb-8 leading-7">
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
