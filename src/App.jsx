import { AdminRoutes } from './router/AdminRoutes'
import UserRoutes from './router/UserRoutes'

function App () {
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
