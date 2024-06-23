import React from 'react'
import HeroSection from './_components/HeroSection'
import CardsSection from './_components/CardsSection'
import AddYourOwnSection from './_components/AddYourOwnSection'
import TestimonialSection from './_components/TestimonialSection'
import GetStartedSection from './_components/GetStartedSection'
function page() {
  return (
    <div>
        
        <HeroSection/>
        <CardsSection/>
        <AddYourOwnSection/>
        <TestimonialSection />
        <GetStartedSection />
    </div>
  )
}

export default page