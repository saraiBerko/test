import axios from 'axios'

function createAxiosInstance () {
  const instance = axios.create({
    baseURL:'',
    timeout: config.timeout,
    headers: {
      Authorization: config.authToken ? 'JWT ' + config.authToken : null
    }
  })
  return instance
}
const axiosInstance = createAxiosInstance()