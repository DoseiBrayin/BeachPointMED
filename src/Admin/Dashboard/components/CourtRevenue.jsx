import React from 'react'

export const CourtRevenue = ({ location, courtNumber, price }) => {
  return (
    <div className='w-[23%] p-4 py-6 flex flex-col g border border-[#D0D3D9] rounded-lg shadow-lg'>
    <h3 className='text-[#5D6679] text-lg'>{location}</h3>
    <h2 className='text-2xl font-semibold text-[#5D6679]'>{courtNumber}</h2>
    <strong className='text-[#1366D9] text-2xl'>{price}<span className='text-[#858D9D] font-normal text-lg'>COP/day</span></strong>
  </div>

  )
}
