import api from './api'

export const getAllEducationLevels = () => api.get('api/education-levels')
export const createEducationLevel = (data) => api.post('api/education-levels', data)
export const updateEducationLevel = (data, id) => api.put(`api/education-levels/${id}`, data)
