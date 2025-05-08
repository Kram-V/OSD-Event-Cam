import api from './api'

export const getAllUserInstructions = () => api.get('api/user-instructions')
export const createUserInstruction = (data) => api.post('api/user-instructions', data)
export const updateUserInstruction = (data, id) => api.put(`api/user-instructions/${id}`, data)
export const deleteUserInstruction = (id) => api.delete(`api/user-instructions/${id}`)
