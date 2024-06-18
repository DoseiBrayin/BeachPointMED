import { Navigate } from 'react-router-dom'

export const ProtectedAdminRoutes = ({ auth, children }) => {
  if (!auth) {
    return <Navigate to="/login" />
  }
  return children
}
