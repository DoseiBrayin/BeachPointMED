import React from 'react'
import { AdminHeader } from '../../components/AdminHeader'
import { ProductsTable } from '../components/ProductsTable'

export const AdminProducts = () => {
  return (
    <div>
      <AdminHeader title='Products' />
      <div className='px-5 mt-10'>
        <div className='flex gap-3 justify-end w-full'>
          <button className='bg-[#1570EF] text-white text-[14px] px-6 py-2 rounded-lg'>Create User</button>
          <div className='border-2 flex items-center rounded-md px-2 gap-1'>
            <img src="/Search.svg" className='w-[24p] h-[24px]' alt="" />
            <input className='focus:outline-none' type="text" placeholder='Search by name'/>
          </div>
        </div>
        <ProductsTable />
      </div>
    </div>
  )
}
