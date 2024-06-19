import React from 'react'

export const OverviewComponent = ({ date, text, data }) => {
  return (
    <div className='w-[23%] flex place-items-end gap-3'>
    <div>
    <h4 className='text-gray-400' >{date}</h4>
    <h3 className='font-inter font-[500] text-[#5D6679]'>{text}</h3>
    </div>
    <h2 className='text-[#1366D9] text-2xl font-semibold'>23</h2>
  </div>
  )
}
