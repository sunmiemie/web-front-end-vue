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
    return Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (!res || res.type !== "success") {
      // 将业务失败交给调用方的 catch，避免以 undefined 伪装成功响应。
      const error = new Error(res && (res.message || res.msg) || '车辆数据请求失败')
      error.response = response
      return Promise.reject(error)
    }
    return response
  },
)

export default service
