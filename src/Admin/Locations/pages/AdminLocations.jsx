import React from 'react'
import { AdminHeader } from '../../components/AdminHeader'
import { LocationTable } from '../components/LocationTable'

export const AdminLocations = () => {
  return (
    <div>
    <AdminHeader title='Locations' />
    <LocationTable />
  </div>
  )
}
