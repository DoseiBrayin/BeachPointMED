import React from 'react'

export const AdminHeader = ({ title }) => {
  return (
    <div className='min-h-[89px] px-6 pt-8'>
        <div className='w-full flex items-center justify-between'>
            <h1 className=' font-[700] text-[40px]'>Admin Portal</h1>
            <img src="/AdminNavbar/Content.svg" alt="" />
        </div>
        <div>
            <p className='text-[#858D9D] text-[26px]'>{title}</p>
        </div>
    </div>
  )
}
