import { useState } from 'react'
import { AdminHeader } from '../../components/AdminHeader'
import ModalReservations from '../../../components/Modal'
import { Calendar } from '../../../OneTimeCourtReservation/components/calendar'
import { LocationFilter } from '../../../components/LocationFilter'

export const TableReservations = ({ reservations, itemsPerPage }) => {
  const thStyle = 'text-center font-normal text-[12px] text-[#667085]'
  const tdStyle = 'text-center text-[#5D6679] font-inter font-[400] text-[14px]'

  const [showModal, setShowModal] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [showModal3, setShowModal3] = useState(false)

  const [currentPage, setCurrentPage] = useState(0)
  const [search, setSearch] = useState('')
  const [filteredReservations, setFilteredReservations] = useState([])
  const [viewAll, setViewAll] = useState(true) // Nuevo estado para controlar la vista

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
            <div onClick={() => setShowModal2(!showModal2)} className='flex border-gray-400 border rounded-lg py-1 px-3 cursor-pointer'>
              <img src="/AdminFilters/Filter.svg" alt="" />
              <button>filter</button>
            </div>
            <div className='flex border-gray-400 border rounded-lg py-1 px-3 cursor-pointer'>
              <img src="/AdminFilters/sort-ascending.svg" alt="" />
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
                <td className={`${tdStyle} underline cursor-pointer`} onClick={() => setShowModal3(!showModal3)}>{reservation.name}</td>
                <td className={tdStyle}>{reservation.location}</td>
                <td className={tdStyle}>{reservation.date} - {reservation.date}</td>
                <td className={tdStyle}>{reservation.time}</td>
                <td className={tdStyle}>{reservation.court}</td>
                <td className={tdStyle}>{reservation.value}</td>
                <td className={tdStyle}>
                  <button className='rounded-xl mr-2 bg-[#2E2E2E] text-white p-2 shadow-lg text-sm'>Modify</button>
                  <button className='rounded-xl bg-[#BB1818] text-white p-2 shadow-lg text-sm'>Delete</button>
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
        <ModalReservations classNamePadre='w-[20rem] my-[2rem] mx-auto' isOpen={showModal} onClose={() => setShowModal(false)}>
          <ModalReservations.Header className='flex justify-center'>
            <h1 className='text-xl font-inter font-semibold'>Date selector</h1>
          </ModalReservations.Header>
          <ModalReservations.Body classNamePadre='flex justify-center' classNameHijo='shadow-[1px_1px_10px_1px_rgba(0,0,0,0.3)] border border-gray-300 rounded-lg flex flex-col justify-center items-center' >
            <Calendar isAdmin={true} />
          </ModalReservations.Body>
        </ModalReservations>

        <ModalReservations className='flex flex-col bg-white rounded-lg' classNamePadre='w-[20rem] my-[2rem] mx-auto' isOpen={showModal2} onClose={() => setShowModal2(false)}>
          <ModalReservations.Header className='flex justify-center'>
          <h1 className='text-xl font-inter font-semibold'>Location filter</h1>
          </ModalReservations.Header>
          <ModalReservations.Body classNameHijo='shadow-xl rounded-xl border-gray-200 border-2 p-2'>
            <LocationFilter />
          </ModalReservations.Body>
        </ModalReservations>

        <ModalReservations isOpen={showModal3} onClose={() => setShowModal3(false)}>
          <ModalReservations.Header className='flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-28">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
            </svg>
          </ModalReservations.Header>
          <ModalReservations.Body classNamePadre='flex justify-center w-full' classNameHijo='flex flex-col justify-center items-center w-full'>
            <div className='flex flex-col gap-4 w-full'>
              <div className='w-full'>
                <h3>Name</h3>
                <div className='border-2 rounded-lg p-3'>
                  Alexanader Hamilton
                </div>
              </div>
              <div className='w-full'>
                <h3>User Type</h3>
                <div className='border-2 rounded-lg p-3'>
                  Alexanader Hamilton
                </div>
              </div>
              <div className='w-full'>
                <h3>Phone Number</h3>
                <div className='border-2 rounded-lg p-3'>
                  Alexanader Hamilton
                </div>
              </div>
              <div className='w-full'>
                <h3>Email</h3>
                <div className='border-2 rounded-lg p-3'>
                  Alexanader Hamilton
                </div>
              </div>
              <div className='w-full'>
                <h3>Discount %</h3>
                <div className='border-2 rounded-lg p-3'>
                  Alexanader Hamilton
                </div>
              </div>
            </div>
          </ModalReservations.Body>
        </ModalReservations>

    </section>
  )
}
