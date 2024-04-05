import React from 'react'
import { PlaySection } from '../components/PlaySection'
import { Hero } from '../components/Hero'
import { BookingSection } from '../components/BookingSection'

export const Landing = () => {
  return (
    <div>
      <Hero />
      <PlaySection />
      <BookingSection />
    </div>
  )
}
