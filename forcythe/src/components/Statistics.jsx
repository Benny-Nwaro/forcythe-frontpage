import React, { useEffect, useState } from 'react';

const Statistics = () => {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [teamLeads, setTeamLeads] = useState(0);
  const [years, setYears] = useState(0);

  // Function to animate counting
  const animateCount = (target, setValue) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < target) {
        count++;
        setValue(count);
      } else {
        clearInterval(interval);
      }
    }, 20);
  };

  useEffect(() => {
    animateCount(50, setClients);
    animateCount(120, setProjects);
    animateCount(10, setTeamLeads);
    animateCount(10, setYears);
  }, []);

  return (
    <div 
      className="py-10 md:py-10 xl:py-28 border-t-2 border-blue-500 rounded-t-full lg:mx-32"
    
    >
      <div className="max-w-[52rem] mx-auto bg-[url('/images/arc.svg')] lg:bg-[url('/images/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
        <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
          <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white">
              <span className="opacity-0" style={{ opacity: 1 }}>
                We{' '}
              </span>
              <span className="opacity-0" style={{ opacity: 1 }}>
                build{' '}
              </span>
              <span className="opacity-0" style={{ opacity: 1 }}>
                solutions{' '}
              </span>
              <span className="opacity-0" style={{ opacity: 1 }}>
                that{' '}
              </span>
              <span className="opacity-0" style={{ opacity: 1 }}>
                help{' '}
              </span>
              <span className="opacity-0 text-[#60a6e7]" style={{ opacity: 1 }}>
                businesses{' '}
              </span>
              <span className="opacity-0" style={{ opacity: 1 }}>
                of{' '}
              </span>
              <span className="opacity-0" style={{ opacity: 1 }}>
                all{' '}
              </span>
              <span className="opacity-0" style={{ opacity: 1 }}>
                sizes{' '}
              </span>
              <span className="opacity-0" style={{ opacity: 1 }}>
                to{' '}
              </span>
              <span className="opacity-0 text-[#60a6e7]" style={{ opacity: 1 }}>
                scale{' '}
              </span>
            </p>
          </div>

          {/* Stats Grid Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-12 px-6">
            <div className="flex flex-col items-center gap-3 text-left w-full text-white">
              <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-semibold">
                {clients}+
              </div>
              <span className="text-[15px] sm:text-base md:text-lg">Clients</span>
            </div>

            <div className="flex flex-col items-center gap-3 text-left w-full text-white">
              <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-semibold">
                {projects}+
              </div>
              <span className="text-[15px] sm:text-base md:text-lg">Projects</span>
            </div>

            <div className="flex flex-col items-center gap-3 text-left w-full text-white">
              <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-semibold">
                {teamLeads}+
              </div>
              <span className="text-[15px] sm:text-base md:text-lg">Team Leads</span>
            </div>

            <div className="flex flex-col items-center gap-3 text-left w-full text-white">
              <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-semibold">
                {years}+
              </div>
              <span className="text-[15px] sm:text-base md:text-lg">Glorious Years</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
