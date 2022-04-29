import axios from 'axios'

export const BASE_URL = 'https://social-network.samuraijs.com/api/1.0'

const $api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers:{
    "API-KEY": "3e44241f-8914-4ee5-8ed5-66fc80a59f89",
  }
})

// $api.interceptors.request.use(config => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
//   return config;
// })


export default $api;