import axios from 'axios'

const service = axios.create({
  baseURL: "/foton",
  timeout: 50000
})

// Request interceptors
service.interceptors.request.use(
  (config) => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    // if (UserModule.token) {
    //   config.headers['token'] = UserModule.token
      config.headers['token'] = "550ee13c0360457c99dee23aba0aa6f7"
    // }
    return config
  },
  (error) => {
  }
)

// Response interceptors
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.type != "success") {
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      }
    } else {
      return response
    }
  },
)

export default service
