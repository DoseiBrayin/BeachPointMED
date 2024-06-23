import React from 'react'
import { AdminHeader } from '../../components/AdminHeader'
import mockReservations from '../../mocks/reserveData.json'

export const AdminReservations = ({ reservations, itemsPerPage }) => {
  const thStyle = 'text-center font-normal text-[12px] text-[#667085]'

  if (reservations?.length === 0) {
    return (
      <div className='w-full justify-center flex items-center h-[400px]'>
        <p>No data available</p>
      </div>
    )
  }

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

      <main className='w-full h-full flex flex-col rounded-2xl px-5'>
      <table className='w-full border-[1px] border-[#E8F1FD] mt-7'>
        <thead className='h-[38px] bg-[#F7F9FC]'>
          <tr>
              <th className={`${thStyle} pl-6`}>User ID</th>
              <th className={thStyle}>Location</th>
              <th className={thStyle}>Date</th>
              <th className={thStyle}>Time</th>
              <th className={thStyle}>Court #</th>
              <th className={thStyle}>Value</th>
              <th className={`${thStyle}`}>Modify</th>
            </tr>
        </thead>
        <tbody>
    {
      mockReservations.map((reservation) => (
        <tr key={reservation.id}>
        <td className='text-center'>{reservation.first_name}</td>
        <td className='text-center'>{reservation.location}</td>
        <td className='text-center'>{reservation.time}</td>
        <td className='text-center'>{reservation.time}</td>
        <td className='text-center'>{reservation.court}</td>
        <td className='text-center'>{reservation.value}</td>
        <td className='text-center'>
          <button className='rounded-lg mr-2 bg-black text-white p-1'>Modify</button>
          <button className='rounded-lg bg-[#BB1818] text-white p-1 '>Delete</button>
        </td>
      </tr>
      ))

    }

        </tbody>
      </table>
      </main>
    </section>
  )
}
