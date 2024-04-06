import React from 'react'
import { Courts } from '../components/Courts'
import { ProgressBar } from '../../components/ProgressBar'
import { Refreshments } from '../components/Refreshments'
import { getGrandTotalPrice } from '../hooks/getGrandTotalPrice'

export const MyCartReservationPage = () => {
  return (
    <div className='flex flex-col items-center md:px-5'>
        <div className='w-[100%] flex items-center justify-center'>
            <ProgressBar percentage='33%'/>
        </div>
        <div className='max-w-[64.75rem] w-[100%] flex justify-center md:justify-start'>
            <h1 className='font-inter text-[#2E2E2E] text-[24px] font-[800] text-center mt-5 md:text-[45px] md:font-[700]'>Confirm Your Selections</h1>
        </div>
        <Courts />
        <Refreshments />
        <div className="flex justify-center items-center gap-5 px-3 rounded-md mt-2 h-[26px] bg-black">
            <h1 className="font-[700] font-inter text-[14px] text-white">Grand Total</h1>
            <p className="text-[14px] font-inter text-white font-[400]">{getGrandTotalPrice()} COP</p>
        </div>
    </div>
  )
}
