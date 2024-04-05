import React from 'react'
import { PlaySection } from '../components/PlaySection'
import { Hero } from '../components/Hero'
import { BookingSection } from '../components/BookingSection'
import { Instagram } from '../components/Instagram'
import { WhoWeAre } from '../components/WhoWeAre'
import { Footer } from '../components/Footer'

export const Landing = () => {
  return (
    <div>
      <Hero />
      <PlaySection />
      <BookingSection />
      <Instagram />
      <WhoWeAre />
      <Footer />
      <h1>brayan es gei</h1>
    </div>
  )
}
