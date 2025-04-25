import api from './api'

export const getAllUsers = () => api.get('api/get-users')

export const createUser = (data) => api.post('api/create-user', data)

export const deactivateAccount = (id) => api.put(`api/deactivate-account/${id}`)
export const activateAccount = (id) => api.put(`api/activate-account/${id}`)
export const approveUser = (id) => api.put(`api/approve-email/${id}`)
export const disapproveUser = (id) => api.put(`api/disapprove-email/${id}`)
export const changeRole = (id, data) => api.put(`api/change-role/${id}`, data)
