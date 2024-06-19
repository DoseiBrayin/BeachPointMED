import { useState } from 'react'

const userTypes = {
  ALL: 'all',
  CUSTOMERS: 'customer',
  EMPLOYEES: 'employee',
  ADMIN: 'admin'
}

export const useFilters = ({ users }) => {
  const [selected, setSelected] = useState(userTypes.ALL)
  const [filters, setFilters] = useState({
    typeUser: userTypes.ALL,
    searchText: ''
  })

  const onSearch = (e) => {
    setFilters({ ...filters, searchText: e.target.value })
  }

  const changeFilter = (filter) => {
    setSelected(filter)
    setFilters({ ...filters, typeUser: filter })
  }

  const filterUsers = (users) => {
    return users?.filter((user) => {
      if (filters.typeUser === userTypes.ALL) {
        return user.name.toLowerCase().includes(filters.searchText.toLowerCase())
      }
      return user.type_rol === filters.typeUser && user.name.toLowerCase().includes(filters.searchText.toLowerCase())
    })
  }

  const filteredUsers = filterUsers(users)

  return {
    selected,
    setSelected,
    filters,
    setFilters,
    onSearch,
    changeFilter,
    filterUsers,
    filteredUsers
  }
}
