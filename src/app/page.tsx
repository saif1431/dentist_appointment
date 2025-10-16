import Footer from '@/components/landing/Footer'
import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import HowItWorks from '@/components/landing/HowItWorks'
import PricingSection from '@/components/landing/PricingSection'
import WhatToAsk from '@/components/landing/WhatToAsk'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

async function  Homepage() {

const user = await currentUser();

if(user){
  redirect("/dashboard")
}

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