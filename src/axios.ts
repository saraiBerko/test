import axios from 'axios'

function createAxiosInstance () {
  const instance = axios.create({
    baseURL: 'localhost:8080'
  })
  return instance
}
export const axiosInstance = createAxiosInstance()