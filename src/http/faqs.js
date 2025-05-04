import api from './api'

export const getAllFaqs = () => api.get('api/faqs')
export const createFaq = (data) => api.post('api/faqs', data)
export const updateFaq = (data, id) => api.put(`api/faqs/${id}`, data)
export const deleteFaq = (id) => api.delete(`api/faqs/${id}`)
