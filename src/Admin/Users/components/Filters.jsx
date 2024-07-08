import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter, onSearch } from '../UsersSlices/userAdminSlice'

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

  const dispatch = useDispatch()
  return (
    <div className="flex w-full justify-between">
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
        <button className="bg-[#1570EF] text-white text-[14px] px-6 py-2 rounded-lg">
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
