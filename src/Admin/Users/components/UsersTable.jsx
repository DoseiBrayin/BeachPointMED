import React, { useState } from 'react'
import { useUserTable } from '../hooks/useUserTable'
import { RenderTableRows } from './RenderTableRows'
import { PaginationButtons } from './PaginationButtons'
import { useUsers } from '../hooks/useUsers'
import Modal from '../../../components/Modal'
import { CreateUser } from './CreateUser'

const thStyle = 'text-start font-normal text-[12px] text-[#667085]'

export const UsersTable = () => {
  const { usersFiltered: users, isLoading, error } = useUsers()
  const { currentPage, totalPages, handleClick, prevPage, nextPage } = useUserTable({ itemsPerPage: 10, data: users })
  const itemsPerPage = 10
  const [showInfoUserModal, setShowInfoUserModal] = useState(false)

  if (error && error.data.detail.message === "404: {'message': 'There are no users registered', 'data': None, 'status': 'error', 'status_code': 404}") {
    return (
      <div className='w-full justify-center flex items-center h-[400px]'>
        <p>There are no users</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='w-full justify-center flex items-center h-[400px]'>
        <p>Loading...</p>
      </div>
    )
  }

  if (users?.length === 0) {
    return (
      <div className='w-full justify-center flex items-center h-[400px]'>
        <p>No data available</p>
      </div>
    )
  }

  return (
    <div className='px-5'>
      <Modal onClose={() => setShowInfoUserModal(false)} isOpen={showInfoUserModal}>
      <Modal.Header className='flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-28">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
            </svg>
          </Modal.Header>
          <Modal.Body classNamePadre='flex justify-center w-full' classNameHijo='flex flex-col justify-center items-center w-full'>
            <CreateUser />
          </Modal.Body>
      </Modal>
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
          <RenderTableRows open={() => setShowInfoUserModal(true)} currentPage={currentPage} data={users} itemsPerPage={itemsPerPage} />
        </tbody>
      </table>
      <PaginationButtons currentPage={currentPage} totalPages={totalPages} handleClick={handleClick} prevPage={prevPage} nextPage={nextPage} />
    </div>
  )
}
