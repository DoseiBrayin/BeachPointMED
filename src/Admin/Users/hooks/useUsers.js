import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetUsersQuery } from '../UsersSlices/userAdminAPI'

export const useUsers = () => {
  const [users, setUsers] = useState([])
  const userTypeFilter = useSelector((state) => state.userFiltersAdmin.selected)
  const search = useSelector((state) => state.userFiltersAdmin.search)
  const { data, isError, isLoading } = useGetUsersQuery()

  useEffect(() => {
    setUsers(data?.data)
  }, [data])

  const filters = ({ userType, searchValue }) => {
    if (userType === 'all' && searchValue === '') return users
    return users.filter((user) => {
      if (userType === 'all' && searchValue !== '') {
        return user.name.toLowerCase().includes(searchValue.toLowerCase())
      }
      if (userType !== 'all' && searchValue === '') {
        return user.type_rol === userType
      }
      return user.type_rol === userType && user.name.toLowerCase().includes(searchValue.toLowerCase())
    })
  }

  const usersFiltered = filters({ userType: userTypeFilter, searchValue: search }) // Pasar filter directamente, asumiendo que es una propiedad de user

  return {
    usersFiltered,
    isLoading,
    isError
  }
}
