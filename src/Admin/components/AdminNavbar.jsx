import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const AdminNavbar = () => {
  const currentPath = useLocation().pathname
  const itemStyle = 'flex gap-[12px] h-[40px] items-center hover:bg-[#E8F1FD] hover:text-[#1366D9] rounded-[8px] px-[12px] cursor-pointer'
  const itemText = 'text-[#5D6679]'
  const pageSyle = 'flex gap-[12px] h-[40px] items-center bg-[#E8F1FD] text-[#1366D9] rounded-[8px] px-[12px]'
  const pageText = 'text-[#1366D9]'

  const DASHBOARD_PATH = '/admin/dashboard'
  const RESERVATIONS_PATH = '/admin/reservations'
  const LOCATIONS_PATH = '/admin/locations'
  const USERS_PATH = '/admin/users'
  const PRODUCTS_PATH = '/admin/products'

  return (
    <div className='w-[220px] border-2 px-3'>
      <img className='w-[56px] h-[84px] mt-8 mb-8' src="https://pub-9ce9ae707f414f62ad3249af96d412df.r2.dev/BP-logo.webp" alt="" />
      <div className='flex flex-col gap-[16px]'>

        <Link to={'/admin/dashboard'} className={currentPath === DASHBOARD_PATH ? pageSyle : itemStyle}>
          <img src="/AdminNavbar/Dashboard.svg" alt="" />
          <p className={currentPath === DASHBOARD_PATH ? pageText : itemText}>Dashboard</p>
        </Link>

        <Link to={'/admin/reservations'} className={currentPath === '/admin/reservations' ? pageSyle : itemStyle}>
          <img src="/AdminNavbar/Reservations.svg" alt="" />
          <p className={currentPath === RESERVATIONS_PATH ? pageText : itemText}>Reservations</p>
        </Link>

        <Link to={'/admin/locations'} className={currentPath === '/admin/locations' ? pageSyle : itemStyle}>
          <img src="/AdminNavbar/Locations.svg" alt="" />
          <p className={currentPath === LOCATIONS_PATH ? pageText : itemText}>Locations</p>
        </Link>

        <Link to={'/admin/users'} className={currentPath === '/admin/users' ? pageSyle : itemStyle}>
          <img src="/AdminNavbar/Users.svg" alt="" />
          <p className={currentPath === USERS_PATH ? pageText : itemText}>Users</p>
        </Link>

        <Link to={'/admin/products'} className={currentPath === '/admin/products' ? pageSyle : itemStyle}>
          <img src="/AdminNavbar/Products.svg" alt="" />
          <p className={currentPath === PRODUCTS_PATH ? pageText : itemText}>Products</p>
        </Link>
      </div>
    </div>
  )
}
