import { Navigate, Outlet } from 'react-router-dom'
import { useUserDetailsContext } from '../contexts/UserDetailsContext'

const GuestRoute = () => {
  const { token } = useUserDetailsContext()

  if (token) {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}

export default GuestRoute
