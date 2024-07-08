import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter, onSearch } from '../UsersSlices/userAdminSlice'
import Modal from '../../../components/Modal'

const notSelectedStyle =
  'px-4 py-1 rounded-[20px] text-[#5D6679] border-[1px] text-[14px] cursor-pointer h-fit'
const SelectedStyle =
  'px-4 py-1 rounded-[20px] text-[#0F50AA] border-[#0F50AA] bg-[#E8F1FD] border-[1px] text-[14px] cursor-pointer h-fit'

const userTypes = {
  ALL: 'all',
  CUSTOMERS: 'Usuario',
  EMPLOYEES: 'Empleado',
  ADMIN: 'Admin'
}

export const Filters = () => {
  const selected = useSelector((state) => state.userFiltersAdmin.selected)
  const [showCreateUserModal, setShowCreateUserModal] = useState(false)

  const dispatch = useDispatch()
  return (
    <div className="flex w-full justify-between">
      <Modal isOpen={showCreateUserModal} onClose={() => setShowCreateUserModal(false)}>
      <Modal.Header className='flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-28">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
            </svg>
          </Modal.Header>
          <Modal.Body classNamePadre='flex justify-center w-full' classNameHijo='flex flex-col justify-center items-center w-full'>
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
          </Modal.Body>
      </Modal>
      <div className="flex gap-[10px]">
        <div
          onClick={() => dispatch(changeFilter(userTypes.ALL))}
          className={
            selected === userTypes.ALL ? SelectedStyle : notSelectedStyle
          }
        >
          All
        </div>
        <div
          onClick={() => dispatch(changeFilter(userTypes.CUSTOMERS))}
          className={
            selected === userTypes.CUSTOMERS ? SelectedStyle : notSelectedStyle
          }
        >
          Customers
        </div>
        <div
          onClick={() => dispatch(changeFilter(userTypes.EMPLOYEES))}
          className={
            selected === userTypes.EMPLOYEES ? SelectedStyle : notSelectedStyle
          }
        >
          Employees
        </div>
        <div
          onClick={() => dispatch(changeFilter(userTypes.ADMIN))}
          className={
            selected === userTypes.ADMIN ? SelectedStyle : notSelectedStyle
          }
        >
          Admin
        </div>
      </div>
      <div className="flex gap-3">
        <button className="bg-[#1570EF] text-white text-[14px] px-6 py-2 rounded-lg"
          onClick={() => setShowCreateUserModal(true)}
        >
          Create User
        </button>
        <div className="border-2 flex items-center rounded-md px-2 gap-1">
          <img src="/Search.svg" className="w-[24p] h-[24px]" alt="" />
          <input
            onChange={(e) => dispatch(onSearch(e.target.value))}
            className="focus:outline-none"
            type="text"
            placeholder="Search by name"
          />
        </div>
      </div>
    </div>
  )
}
