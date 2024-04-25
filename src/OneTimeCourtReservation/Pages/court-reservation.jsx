import React from 'react'
import { Main } from '../components/main'
import { Calendar } from '../components/calendar'

export const CourtReservationCalendar = () => {
  return (
    <>
    <section className="hidden md:block">
      <Main />
    </section>
      <section className="md:hidden flex flex-col w-full h-[80vh] items-center justify-around">
          <header>
            <h1 className='text-2xl font-inter text-[#2E2E2E] font-[800] '>Select Date</h1>
          </header>
          <main className="w-[80%] justify-center flex flex-col items-center m-2 mt-4 rounded-2xl shadow-2xl borderborder-gray-200">
            <Calendar />

          </main>
      </section>
    </>
  )
}
