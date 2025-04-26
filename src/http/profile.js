import api from './api'

export const updateProfile = (id, data) => api.put(`api/update-profile/${id}`, data)
