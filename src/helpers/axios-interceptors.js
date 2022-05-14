import axios from '@/axios'

export default function setup() {
    // Add a request interceptor
    axios.interceptors.request.use((config) => {
        const authToken = ''
        const specificString = ''
        // Do something before request is sent
        config.withCredentials = true
        if (!config.url.includes(specificString)) {
            config.headers.Authorization = `Bearer ${authToken}`
        }

        return config
    }, (error) => {
        // Do something with request error
        Promise.reject(error)
    })

    // Add a response interceptor
    axios.interceptors.response.use((response) => {
        if (response.data.error) {
            // handle errors
        }
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response
    }, (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        Promise.reject(error)
    })
}
