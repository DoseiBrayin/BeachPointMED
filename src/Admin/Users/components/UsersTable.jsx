import React, { useState } from 'react'

const thStyle = 'text-start font-normal text-[12px] text-[#667085]'
const tdStyle = 'text-start font-normal text-[14px] text-[#5D6679]'

const pagSelectedStyle = 'text-[#1366D9] text-[14px] px-4 py-2 font-medium rounded-lg bg-[#F7F9FC]'
const pagNotSelectedStyle = 'text-[#858D9D] text-[14px] px-4 py-2 font-medium rounded-lg'

export const UsersTable = ({ users, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1)

  if (users.length === 0) {
    return (
      <div className='w-full justify-center flex items-center h-[400px]'>
        <p>No data available</p>
      </div>
    )
  }

  const totalPages = Math.ceil(users.length / itemsPerPage)

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const prevPage = () => {
    if (currentPage === 1) return
    setCurrentPage((prev) => prev - 1)
  }

  const nextPage = () => {
    if (currentPage === totalPages) return
    setCurrentPage((prev) => prev + 1)
  }

  const renderTableRows = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const itemsToDisplay = users.slice(startIndex, endIndex)
    return itemsToDisplay.map((user) => (
      <tr className='h-[55px] border-[1px] border-[#E8F1FD]' key={user.cedula}>
        <td className={`${tdStyle} pl-6`}>{user.name}</td>
        <td className='text-start text-[14px]'>{user.type_rol}</td>
        <td className={tdStyle}>August 10, 2024</td>
        <td className={tdStyle}>300.650 COP</td>
        <td className={tdStyle}></td>
      </tr>
    ))
  }

  const renderPaginationButtons = () => {
    const buttons = []
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          disabled={i === currentPage}
          className={currentPage === i ? pagSelectedStyle : pagNotSelectedStyle}
        >
          {i}
        </button>
      )
    }
    return (
      <div className='flex w-ful justify-between mt-10 px-10'>
        <button
          className={currentPage === 1 ? 'cursor-default opacity-25 flex gap-2 border-[1px] justify-center items-center px-2 rounded-md text-[#667085]' : 'flex gap-2 border-[1px] justify-center items-center px-2 rounded-md text-[#667085]'}
          onClick={() => prevPage()}
        >
          <img src="/AdminPagination/left.svg" alt="" />
          Previous
        </button>
        <div className='max-w-[40%] w-full flex justify-between lg:max-w-[30%]'>
          {buttons}
        </div>
        <button
          className={currentPage === totalPages ? 'cursor-default opacity-25 flex gap-2 border-[1px] justify-center items-center px-2 rounded-md text-[#667085]' : 'flex gap-2 border-[1px] justify-center items-center px-2 rounded-md text-[#667085]'}
          onClick={() => nextPage()}
        >
          Next
          <img src="/AdminPagination/right.svg" alt="" />
        </button>
      </div>
    )
  }

  return (
    <div className='px-5'>
      <table className='w-full border-[1px] border-[#E8F1FD] mt-7'>
        <thead className='h-[38px] bg-[#F7F9FC]'>
          <tr>
            <th className={`${thStyle} pl-6`}>Name</th>
            <th className={thStyle}>User Type</th>
            <th className={thStyle}>Last Login</th>
            <th className={thStyle}>Lifetime Spend</th>
            <th className={`${thStyle} pr-6`}></th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
      {renderPaginationButtons()}
    </div>
  )
}
