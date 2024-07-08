import React from 'react'
import { AdminHeader } from '../../components/AdminHeader'
import { UsersTable } from '../components/UsersTable'
import { Filters } from '../components/Filters'

export const AdminUsers = () => {
  return (
    <div>
      <AdminHeader />
      <div className="flex px-5 mt-10">
        <Filters />
      </div>
      <UsersTable />
    </div>
  )
}
