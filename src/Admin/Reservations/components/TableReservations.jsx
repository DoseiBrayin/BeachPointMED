import React, { useState } from 'react'
import { AdminHeader } from '../../components/AdminHeader'
import dayjs from 'dayjs'

export const TableReservations = ({ reservations, itemsPerPage }) => {
  const thStyle = 'text-center font-normal text-[12px] text-[#667085]'

  const [currentPage, setCurrentPage] = useState(0)
  const [search, setSearch] = useState('')
  const [filteredReservations, setFilteredReservations] = useState([])
  const [viewAll, setViewAll] = useState(true) // Nuevo estado para controlar la vista
  const today = dayjs().format('YYYY-MM-DD')

  if (reservations?.length < 1) {
    return (
      <div className='w-full justify-center'>
        <p>No data available</p>
      </div>
    )
  }

  const getFilteredReservations = () => {
    const data = viewAll ? reservations : filteredReservations
    if (search.length === 0) {
      return data.slice(currentPage, currentPage + itemsPerPage)
    }

    const filtered = data.filter(reservation => reservation.name.toLowerCase().includes(search.toLowerCase()))
    return filtered.slice(currentPage, currentPage + itemsPerPage)
  }

  const nextPage = () => {
    const data = viewAll ? reservations : filteredReservations
    if (data.length > currentPage + itemsPerPage) {
      setCurrentPage(currentPage + itemsPerPage)
    }
  }

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - itemsPerPage)
    }
  }

  const handleSearch = ({ target }) => {
    setCurrentPage(0)
    setSearch(target.value)
  }

  const allDates = () => {
    setViewAll(true)
    setCurrentPage(0)
  }

  const dayView = () => {
    const filteredByDay = reservations.filter(reservation => reservation.date === today)
    setFilteredReservations(filteredByDay)
    setViewAll(false)
    setCurrentPage(0)
  }

  return (
    <section className='h-screen flex flex-col'>
      <header>
        <AdminHeader title='Reservations' />
        <div className='flex justify-between mx-6 my-3'>
          <div className='flex gap-4'>
            <button className='rounded-full border border-[#989FAD] p-1 px-2' onClick={allDates}>All Dates</button>
            <button className='rounded-full border border-[#989FAD] p-1 px-2' onClick={dayView}>Day view</button>
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
              <input
                className='border border-black'
                type="search"
                value={search}
                onChange={handleSearch}
              />
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
            {getFilteredReservations().map((reservation) => (
              <tr key={reservation.id}>
                <td className='text-center'>{reservation.name}</td>
                <td className='text-center'>{reservation.location}</td>
                <td className='text-center'>{reservation.date}</td>
                <td className='text-center'>{reservation.time}</td>
                <td className='text-center'>{reservation.court}</td>
                <td className='text-center'>{reservation.value}</td>
                <td className='text-center'>
                  <button className='rounded-lg mr-2 bg-black text-white p-1'>Modify</button>
                  <button className='rounded-lg bg-[#BB1818] text-white p-1 '>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan="7">
                <div className='flex justify-between mx-3'>
                  <button onClick={previousPage}>Previous</button>
                  <button onClick={nextPage}>Next</button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </main>
    </section>
  )
}
