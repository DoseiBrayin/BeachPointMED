import React from 'react'
import { AdminHeader } from '../../components/AdminHeader'

export const AdminReservations = () => {
  return (
    <section className='h-screen flex flex-col'>
      <header>
      <AdminHeader title='Reservations' />
        <div className='flex justify-between mx-6 my-3'>
          <div className='flex gap-4'>
            <button className='rounded-full border border-[#989FAD] p-1 px-2'>All Dates</button>
            <button className='rounded-full border border-[#989FAD] p-1 px-2'>Day view</button>
          </div>
          <div className='flex gap-5'>
            <button>Create Reservation</button>
            <div className='flex'>
              <img src="" alt="" />
              <button>filter</button>
            </div>
            <div className='flex'>
              <img src="" alt="" />
              <button>Sort</button>
            </div>
            <div>
            <img src="" alt="" />
            <input className='border border-black' type="search" />
            </div>
          </div>
        </div>
      </header>

      <main className='w-full h-full flex flex-col items-center'>
      <table className='w-full p-20 '>
        <thead>
            <th>User ID</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
            <th>Court #</th>
            <th>Value</th>
            <th>Modify</th>
        </thead>
        <tbody>
          <tr>
            <td className='text-center'>Alexander</td>
            <td className='text-center'>Ciudad del rio</td>
            <td className='text-center'>thurs, August 10, 2023</td>
            <td className='text-center'>8-9am</td>
            <td className='text-center'>1</td>
            <td className='text-center'>75.000 COP</td>
            <td className='text-center'>
              <button className='rounded-lg mr-2 bg-black text-white p-1'>Modify</button>
              <button className='rounded-lg bg-[#BB1818] text-white p-1 '>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      </main>
    </section>
  )
}
