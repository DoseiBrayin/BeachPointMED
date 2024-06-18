import React, { useState } from 'react'

const filters = {
  ALL: 'All',
  CUSTOMERS: 'Customers',
  EMPLOYEES: 'Employees',
  ADMIN: 'Admin'
}

export const Filters = () => {
  const [selected, setSelected] = useState(filters.ALL)
  const notSelectedStyle = 'px-4 py-1 rounded-[20px] text-[#5D6679] border-[1px] text-[14px] cursor-pointer h-fit'
  const SelectedStyle = 'px-4 py-1 rounded-[20px] text-[#0F50AA] border-[#0F50AA] bg-[#E8F1FD] border-[1px] text-[14px] cursor-pointer h-fit'

  const changeFilter = (filter) => {
    setSelected(filter)
  }

  return (
    <div className='flex gap-[10px]'>
      <div onClick={() => changeFilter(filters.ALL)} className={selected === filters.ALL ? SelectedStyle : notSelectedStyle}>
          All
      </div>
      <div onClick={() => changeFilter(filters.CUSTOMERS)} className={selected === filters.CUSTOMERS ? SelectedStyle : notSelectedStyle}>
        Customers
      </div>
      <div onClick={() => changeFilter(filters.EMPLOYEES)} className={selected === filters.EMPLOYEES ? SelectedStyle : notSelectedStyle}>
        Employees
      </div>
      <div onClick={() => changeFilter(filters.ADMIN)} className={selected === filters.ADMIN ? SelectedStyle : notSelectedStyle}>
        Admin
      </div>
    </div>
  )
}
