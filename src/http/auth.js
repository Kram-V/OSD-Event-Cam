import api from './api'

export const login = (credentials) => api.post('api/login', credentials)

export const register = (data) => api.post('api/register', data)

export const forgotPassword = (data) => api.post('api/forgot-password', data)

export const resetPassword = (data, token, email) =>
  api.post(`api/reset-password/${token}/${email}`, data)

export const logout = () => api.post('api/logout')
