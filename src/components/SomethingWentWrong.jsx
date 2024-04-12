import React from 'react'
import { NavLink } from 'react-router-dom'

export const SomethingWentWrong = () => {
  return (
    <div className='w-full h-[300px] flex flex-col justify-center gap-3 items-center'>
        <h1>Ohh Something Went Wrong!</h1>
        <NavLink to={'/'} className={'px-5 bg-[#0d6ff4] text-[#fff] py-1 rounded-lg'}>Go Back</NavLink>
    </div>
  )
}
