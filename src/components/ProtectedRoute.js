import { Navigate, Outlet } from 'react-router-dom'
import { useUserDetailsContext } from '../contexts/UserDetailsContext'

const ProtectedRoute = () => {
  const { token } = useUserDetailsContext()

  if (!token) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute
