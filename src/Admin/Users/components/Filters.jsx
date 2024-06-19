import React from 'react'

const notSelectedStyle =
  'px-4 py-1 rounded-[20px] text-[#5D6679] border-[1px] text-[14px] cursor-pointer h-fit'
const SelectedStyle =
  'px-4 py-1 rounded-[20px] text-[#0F50AA] border-[#0F50AA] bg-[#E8F1FD] border-[1px] text-[14px] cursor-pointer h-fit'

const userTypes = {
  ALL: 'all',
  CUSTOMERS: 'customer',
  EMPLOYEES: 'employee',
  ADMIN: 'admin'
}

export const Filters = ({ changeFilter, selected, onSearch }) => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-[10px]">
        <div
          onClick={() => changeFilter(userTypes.ALL)}
          className={
            selected === userTypes.ALL ? SelectedStyle : notSelectedStyle
          }
        >
          All
        </div>
        <div
          onClick={() => changeFilter(userTypes.CUSTOMERS)}
          className={
            selected === userTypes.CUSTOMERS ? SelectedStyle : notSelectedStyle
          }
        >
          Customers
        </div>
        <div
          onClick={() => changeFilter(userTypes.EMPLOYEES)}
          className={
            selected === userTypes.EMPLOYEES ? SelectedStyle : notSelectedStyle
          }
        >
          Employees
        </div>
        <div
          onClick={() => changeFilter(userTypes.ADMIN)}
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
            onChange={(e) => onSearch(e)}
            className="focus:outline-none"
            type="text"
            placeholder="Search by name"
          />
        </div>
      </div>
    </div>
  )
}
