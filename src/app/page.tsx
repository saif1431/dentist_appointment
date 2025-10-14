import Footer from '@/components/landing/Footer'
import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import HowItWorks from '@/components/landing/HowItWorks'
import PricingSection from '@/components/landing/PricingSection'
import WhatToAsk from '@/components/landing/WhatToAsk'
import React from 'react'

function Homepage() {
  return (
    <div>
  <Header/>
  <Hero/>
  <HowItWorks/>
  <WhatToAsk/>
  <PricingSection/>
  <Footer/>
    </div>
  )
}

export default Homepage