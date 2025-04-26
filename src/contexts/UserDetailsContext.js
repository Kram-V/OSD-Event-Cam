import { createContext, useContext, useState, useEffect } from 'react'

const UserDetailsContext = createContext()

function UserDetailsProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const [token, setToken] = useState(() => {
    return localStorage.getItem('token') || null
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }

    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }
  }, [user, token])

  const getUserDetails = (userDetails, userToken) => {
    setUser(userDetails)
    setToken(userToken)
  }

  const updateUserDetails = (userDetails) => {
    setUser(userDetails)
  }

  const removeUserDetails = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return (
    <UserDetailsContext.Provider
      value={{ user, token, getUserDetails, updateUserDetails, removeUserDetails }}
    >
      {children}
    </UserDetailsContext.Provider>
  )
}

function useUserDetailsContext() {
  const context = useContext(UserDetailsContext)
  if (!context) throw new Error('useUserDetailsContext must be used within UserDetailsProvider')
  return context
}

export { UserDetailsProvider, useUserDetailsContext }
