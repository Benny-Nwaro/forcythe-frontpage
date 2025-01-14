import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SkillsCarousel from '../components/SkillsCarousel'
import FooterSection from '../components/FooterSection'
import SkillsCarouselReverse from '../components/SkillsCarouselReverse'
import Features from '../components/Features'
import Blogs from '../components/Blogs'
import Testimonials from '../components/Testimonials'
import Section from '../components/Section'
import Statistics from '../components/Statistics'
import ReadyToScale from '../components/ReadyToScale'
import SuccessMotionText from '../components/SuccessMotionText'

function HomePage() {
  return (
    <div >
        <Navbar/>
        <HeroSection/>
          <div className="flex space-x-2 mt-20 max-md:mt-20 max-md:mx-4 justify-center lg:mt-24 max-md:my-10 flex-wrap ">
              <SuccessMotionText/>
        </div>
        <div className=' flex flex-col space-y-10  '>
          <SkillsCarousel/>
          <SkillsCarouselReverse/>
        </div>
        <div className='mt-20 max-md:mt-5 max-md:pb-64'>
        <Testimonials/>
        </div>
        <div className='mt-96'>
        <Section/>
        </div>
        <div className='lg:mt-20 max-md:mt-10'>
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