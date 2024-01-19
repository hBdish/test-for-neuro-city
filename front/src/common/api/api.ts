import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {TOKEN} from "@/common";

class CommonHttpClient {
  client: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.client = axios.create(config)

    // данный интерцептор вписывает аксесс ключ в Header
    this.client.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer ${localStorage.getItem(TOKEN)}`

      return config
    })
  }


  get<T>(url: string, config?: AxiosRequestConfig) {
    return this.client.get<T>(url, config).then(({data}) => data)
  }

  post<T>(url: string, body?: any, config?: AxiosRequestConfig) {
    return this.client.post<T>(url, body, config).then(({data}) => data)
  }
}

const $api = new CommonHttpClient({
  withCredentials: true,
  baseURL: 'http://localhost:6002/api/v1'
})

export {$api}