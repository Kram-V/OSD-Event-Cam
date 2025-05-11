import api from './api'

export const getAllReports = (params) => api.get(`api/reports`, { params })
export const getReport = (id) => api.get(`api/reports/${id}`)
export const markAsResolved = (id) => api.put(`api/reports/${id}`)
