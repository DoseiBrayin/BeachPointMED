import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminDashboard } from '../Admin/Dashboard/pages/AdminDashboard'
import { AdminReservations } from '../Admin/Reservations/pages/AdminReservations'
import { AdminLocations } from '../Admin/Locations/pages/AdminLocations'
import { AdminUsers } from '../Admin/Users/pages/AdminUsers'
import { AdminProducts } from '../Admin/Products/pages/AdminProducts'

export const AdminRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/reservations" element={<AdminReservations />} />
            <Route path="/admin/locations" element={<AdminLocations />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/products" element={<AdminProducts />} />
        </Routes>
    </BrowserRouter>
  )
}
