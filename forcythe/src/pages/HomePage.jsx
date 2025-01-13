import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SkillsCarousel from '../components/SkillsCarousel'
import FooterSection from '../components/FooterSection'
import SkillsCarouselReverse from '../components/SkillsCarouselReverse'
import Features from '../components/Features'
import Blogs from '../components/Blogs'
import Brands from '../components/Brands'
import Testimonials from '../components/Testimonials'
import Section from '../components/Section'
import Statistics from '../components/Statistics'
import ReadyToScale from '../components/ReadyToScale'

function HomePage() {
  return (
    <div >
        <Navbar/>
        <HeroSection/>
          <div className="flex space-x-2  max-md:mx-4 justify-center lg:-mt-24 max-md:my-10 flex-wrap ">
              <span className='text-white capitalize text-7xl max-md:text-4xl'>in </span>
              <span className='text-white capitalize text-7xl max-md:text-4xl'>Success </span>
              <span className="text-[#60a6e7] capitalize text-7xl max-md:text-4xl">Motion </span>
              <span className='text-white capitalize text-7xl max-md:text-4xl'>– </span>
              <span className='text-white capitalize text-7xl max-md:text-4xl'>Our </span>
              <span className='text-white capitalize text-7xl max-md:text-4xl'>clients’ </span>
              <span className='text-white capitalize text-7xl max-md:text-4xl'>journey </span>
        </div>
        <div className='shadow-2xl shadow-gray-700 mb-10 '>
          <SkillsCarousel/>
        </div>
        {/* <div className='shadow-2xl shadow-gray-700 mb-10 '>
          <SkillsCarouselReverse/>
        </div> */}
        <div className='mt-20'>
        <Testimonials/>
        </div>
        <div className='mt-20'>
        <Section/>
        </div>
        <div className='mt-20'>
        <Features/>
        </div>
        <div className='mt-20'>
        <Statistics/>
        </div>
        <div className='mt-20'>
        <Blogs/>
        </div>
        <div className='mt-20'>
        <ReadyToScale/>
        </div>
        <FooterSection/>
    </div>
  )
}

export default HomePage