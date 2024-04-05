import React from 'react'
import { BookYourCourtButton } from './BookYourCourtButton'
import { ManageReservationButton } from './ManageReservationButton'

export const BookingSection = () => {
  return (
    <div className='bg-[url("/LandingImages/BookingSection/sand.svg")] px-[15px] my-[3rem] h-[10rem] flex flex-col justify-center items-center gap-5 md:flex-row
    md:h-[13.813rem]'>
      <BookYourCourtButton />
      <ManageReservationButton backgroundBlack={true} />
    </div>
  )
}
