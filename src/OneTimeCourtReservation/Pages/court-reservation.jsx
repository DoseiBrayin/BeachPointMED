import React from 'react'
import { Main } from '../components/main'
import { Calendar } from '../components/calendar'

export const CourtReservationMobile = () => {
  return (
    <>
    <div className="hidden md:block">
      <Main />
    </div>
      <div className="md:hidden flex w-full h-full items-center justify-center">
        <main className="w-[60%] h-fit flex flex-col items-center m-2 mt-4 rounded-2xl shadow-xl borderborder-gray-200">
          <Calendar />
        </main>
      </div>
    </>
  )
}
