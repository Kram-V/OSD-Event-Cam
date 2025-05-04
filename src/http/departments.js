import api from './api'

export const getAllDepartments = () => api.get('api/departments')
export const createDepartment = (data) => api.post('api/departments', data)
export const updateDepartment = (data, id) => api.put(`api/departments/${id}`, data)
