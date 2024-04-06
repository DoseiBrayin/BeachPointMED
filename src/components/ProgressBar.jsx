import React from 'react'

export const ProgressBar = ({ percentage = '30%' }) => {
  return (
    <div className='hidden md:flex md:flex-col w-full max-w-[64.75rem]'>
        <h1 className='text-[#2E2E2E] text-[30px] font-[700]'>Progress</h1>
        <div className='flex w-full bg-[#E3E3E3] h-[1rem] rounded-[4px]'>
            <div style={{ width: percentage }} className='h-[100%] bg-[#91D0FF] rounded-l-[4px]'>

            </div>
        </div>
    </div>
  )
}
