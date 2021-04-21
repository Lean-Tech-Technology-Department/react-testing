import axios from 'axios'
import { DEFAULT_ROUTE } from './routes'
import { API_URL } from '../../config'

const commonAxiosConfig = { timeout: 10000 }

export const getPosts = async() => {
  return axios.get(`${API_URL}${DEFAULT_ROUTE()}`, { ...commonAxiosConfig, method: 'GET' })
}

console.log(API_URL)

export const createPost = async(payload) => {
  return axios.post(`${API_URL}${DEFAULT_ROUTE()}`, { ...commonAxiosConfig, data: payload })
}

export const updatePost = async(payload) => {
  return axios.put(`${API_URL}${DEFAULT_ROUTE(payload.id)}`, { ...commonAxiosConfig, data: payload })
}

export const deletePost = async(id) => {
  return axios.delete(`${API_URL}${DEFAULT_ROUTE(id)}`, { ...commonAxiosConfig })
}
