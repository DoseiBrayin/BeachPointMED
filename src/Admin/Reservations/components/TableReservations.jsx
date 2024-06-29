import React, { useState } from 'react'
import { AdminHeader } from '../../components/AdminHeader'
import dayjs from 'dayjs'
import ModalReservations from '../../../components/Modal'
import { Calendar } from '../../../OneTimeCourtReservation/components/calendar'

export const TableReservations = ({ reservations, itemsPerPage }) => {
  const thStyle = 'text-center font-normal text-[12px] text-[#667085]'
  const tdStyle = 'text-center text-[#5D6679] font-inter font-[400] text-[14px]'
  const [showModal, setShowModal] = useState(false)
  const [showModal2, setShowModal2] = useState(false)

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
        <div className='flex items-center justify-between mx-6 my-3'>
          <div className='flex gap-4'>
            <button className='px-4 py-1 rounded-[20px] text-[#5D6679] border-[1px] border-[#5D6679] text-[14px] cursor-pointer h-fit' onClick={allDates}>All Dates</button>
            <button className='px-4 py-1 rounded-[20px] text-[#5D6679] border-[1px] border-[#5D6679] text-[14px] cursor-pointer h-fit' onClick={() => setShowModal(!showModal)}>Day view</button>
          </div>
          <div className='flex gap-5'>
          <button className='bg-[#1570EF] text-white text-[14px] px-6 py-2 rounded-lg'>Create Reservation</button>
            <div className='flex border-gray-400 border rounded-lg py-1 px-3 cursor-pointer'>
              <img src="/public/AdminFilters/sort-ascending.svg" alt="" />
              <button onClick={() => setShowModal2(!showModal2)}>filter</button>
            </div>
            <div className='flex border-gray-400 border rounded-lg py-1 px-3 cursor-pointer'>
              <img src="/public/AdminFilters/Filter.svg" alt="" />
              <button>Sort</button>
            </div>
            <div className='border-2 flex items-center rounded-md px-2 gap-1'>
              <img src="/Search.svg" className='w-[24p] h-[24px]' alt="" />
              <input
              className='focus:outline-none'
              type="text"
              placeholder='Search by name'
              onChange={handleSearch}/>
          </div>
          </div>
        </div>
      </header>

      <main className='w-full h-full flex flex-col rounded-2xl px-5'>
        <table className='w-full border-[1px] border-[#E8F1FD] mt-7 '>
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
              <tr key={reservation.id} className='border-[1px] border-[#E8F1FD] h-[55px]'>
                <td className={`${tdStyle} underline`} onClick={() => console.log('hola')}>{reservation.name}</td>
                <td className={tdStyle}>{reservation.location}</td>
                <td className={tdStyle}>{reservation.date}</td>
                <td className={tdStyle}>{reservation.time}</td>
                <td className={tdStyle}>{reservation.court}</td>
                <td className={tdStyle}>{reservation.value}</td>
                <td className={tdStyle}>
                  <button className='rounded-xl mr-2 bg-[#2E2E2E] text-white p-2 shadow-lg text-sm'>Modify</button>
                  <button className='rounded-xl bg-[#BB1818]  text-white p-2 shadow-lg text-sm'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr className='h-[4rem] mt-2'>
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
        <ModalReservations isOpen={showModal} onClose={() => setShowModal(false)}>
          <ModalReservations.Header>Header del modelo</ModalReservations.Header>
          <ModalReservations.Body classNamePadre='flex justify-center' classNameHijo='border border-gray-300 rounded-lg flex flex-col justify-center items-center ' >
            <Calendar />
          </ModalReservations.Body>
          <ModalReservations.Footer className='gap-4 flex items-center'>
          </ModalReservations.Footer>
        </ModalReservations>

        <ModalReservations isOpen={showModal2} onClose={() => setShowModal2(false)}>
          <ModalReservations.Header>Header del modelo</ModalReservations.Header>
          <ModalReservations.Body classNamePadre='flex justify-center' classNameHijo='border border-gray-300 rounded-lg flex flex-col justify-center items-center ' >
            <h1>Ome carechimba</h1>
          </ModalReservations.Body>
          <ModalReservations.Footer className='gap-4 flex items-center'>
          </ModalReservations.Footer>
        </ModalReservations>

    </section>
  )
}
