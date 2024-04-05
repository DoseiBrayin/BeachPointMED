import React from 'react'
import {BookingSection} from "../components/BookingSection"
import {Hero} from "../components/Hero"
import {Instagram} from "../components/Instagram"
import {PlaySection} from "../components/PlaySection"
import {WhoWeAre} from "../components/WhoWeAre"
import {Navbar} from "../components/Navbar"

export const Landing = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <PlaySection />
    <BookingSection />
    <Instagram />
    <WhoWeAre />
    </div>
  )
}
