import React from 'react'
import { useUserTable } from '../hooks/useUserTable'
import { RenderTableRows } from './RenderTableRows'
import { PaginationButtons } from './PaginationButtons'
import { useUsers } from '../hooks/useUsers'

const thStyle = 'text-start font-normal text-[12px] text-[#667085]'

export const UsersTable = () => {
  const { usersFiltered: users } = useUsers()
  const { currentPage, totalPages, handleClick, prevPage, nextPage } = useUserTable({ itemsPerPage: 10, data: users })
  const itemsPerPage = 10

  // if (status === 'loading') {
  //   return (
  //     <div className='w-full justify-center flex items-center h-[400px]'>
  //       <p>Loading...</p>
  //     </div>
  //   )
  // }

  if (users.length === 0) {
    return (
      <div className='w-full justify-center flex items-center h-[400px]'>
        <p>No data available</p>
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
          <RenderTableRows currentPage={currentPage} data={users} itemsPerPage={itemsPerPage} />
        </tbody>
      </table>
      <PaginationButtons currentPage={currentPage} totalPages={totalPages} handleClick={handleClick} prevPage={prevPage} nextPage={nextPage} />
    </div>
  )
}
