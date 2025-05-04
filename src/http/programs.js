import api from './api'

export const getAllPrograms = () => api.get('api/programs')
export const createProgram = (data) => api.post('api/programs', data)
export const updateProgram = (data, id) => api.put(`api/programs/${id}`, data)
