import axios from 'axios'
import { DEFAULT_ROUTE } from './routes'
import { API_URL } from '../../config'

const commonAxiosConfig = { baseURL: API_URL, timeout: 10000 }

export const getPosts = async() => {
  return axios.get(DEFAULT_ROUTE(), { ...commonAxiosConfig, method: 'GET' })
}

export const createPost = async(payload) => {
  return axios.post(DEFAULT_ROUTE(payload.id), { ...commonAxiosConfig, data: payload })
}

export const updatePost = async(payload) => {
  return axios.put(DEFAULT_ROUTE(payload.id), { ...commonAxiosConfig, data: payload })
}

export const deletePost = async(id) => {
  return axios.delete(DEFAULT_ROUTE(id), { ...commonAxiosConfig })
}
