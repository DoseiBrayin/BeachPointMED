import React, { useEffect } from 'react'
import { BookingSection } from '../components/BookingSection'
import { Hero } from '../components/Hero'
import { Instagram } from '../components/Instagram'
import { PlaySection } from '../components/PlaySection'
import { WhoWeAre } from '../components/WhoWeAre'
import { Footer } from '../components/Footer'
import { useLocalStorage } from '../../Hooks/useLocalStorage'
import { useCountdown } from '../../Hooks/useCountdown'

export const Landing = () => {
  const { removeItem } = useLocalStorage({ key: 'order' })
  const { resetCountdown } = useCountdown()

  useEffect(() => {
    removeItem()
    resetCountdown()
  }, [])

  return (
    <div>
    <Hero />
    <PlaySection />
    <BookingSection />
    <Instagram />
    <WhoWeAre />
    <Footer />
    </div>
  )
}
