import axios from 'axios'

export const http = axios.create({
    baseURL:'http://localhost:5000/',
    headers:{'x-access-token':window.localStorage.getItem('access_token')
    }
})