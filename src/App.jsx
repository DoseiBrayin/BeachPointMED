import { AdminRoutes } from './router/AdminRoutes'
import UserRoutes from './router/UserRoutes'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setUser } from './auth/AuthSlices/authSlice.js'

function App () {
  const dispatch = useDispatch()
  const user2 = JSON.parse(localStorage.getItem('user') || '{}')

  useEffect(() => {
    dispatch(setUser(user2))
  }, [])

  const user = {
    userType: 'admin' // Here you can change the user type to 'user' to see the user routes for the moment
  }
  return (
    user.userType === 'user'
      ? <UserRoutes />
      : <AdminRoutes />
  )
}

export default App
