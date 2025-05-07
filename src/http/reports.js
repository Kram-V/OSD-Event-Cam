import api from './api'

export const getAllReports = () => api.get('api/reports')
export const getReport = (id) => api.get(`api/reports/${id}`)
