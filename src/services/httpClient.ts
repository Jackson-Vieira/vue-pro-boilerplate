import axios from 'axios'

import {API_ENVS} from './config'

const httpClient = axios.create({
  baseURL: API_ENVS.local,
  headers: {
    'Content-Type': 'application/json',
  }
})

httpClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if(token){
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

httpClient.interceptors.response.use(
  response => {
    return response
  },
  (error) => {
    const canThrow = error.status === 0 || error.status === 500
    if (canThrow) {
      throw new Error(error)
    }
    return error
  }
)

export default httpClient;