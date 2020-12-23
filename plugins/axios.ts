import { Auth } from '@nuxtjs/auth-next'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

interface AxiosPluginProps {
  $axios: NuxtAxiosInstance
  $auth: Auth
}

export default function ({ $axios, $auth }: AxiosPluginProps) {
  $axios.setBaseURL(process.env.apiUrl || '')
  $axios.interceptors.request.use((config) => {
    config.headers.Authorization = ''
    config.headers['app-id'] = '5fe15ab7ef25ccdc011d2883'
    return config
  })
}
