import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AdminDashboard } from '../Admin/Dashboard/pages/AdminDashboard'
import { AdminReservations } from '../Admin/Reservations/pages/AdminReservations'
import { AdminLocations } from '../Admin/Locations/pages/AdminLocations'
import { AdminUsers } from '../Admin/Users/pages/AdminUsers'
import { AdminProducts } from '../Admin/Products/pages/AdminProducts'
import { AdminNavbar } from '../Admin/components/AdminNavbar'
import { CourtDateProvider } from '../context/CourtsDateContext'

export const AdminRoutes = () => {
  return (
    <BrowserRouter>
      <div className='flex min-h-screen'>
        <CourtDateProvider>
        <AdminNavbar />
        <div className='w-full'>
          <Routes>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/reservations" element={<AdminReservations />} />
              <Route path="/admin/locations" element={<AdminLocations />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/products" element={<AdminProducts />} />
              <Route path="*" element={<Navigate to={'/admin/dashboard'} />} />
          </Routes>
        </div>
        </CourtDateProvider>
      </div>
    </BrowserRouter>
  )
}
