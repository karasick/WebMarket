import axios from "axios";
import AuthService from "../api/AuthService";

export const API_URL = 'http://localhost:5000/'

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL || API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL || API_URL
})

const authInterceptor = config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

const refreshTokenInterceptorOnError = async (error) => {
    const originalRequest = error.config;

    if(error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await AuthService.refresh()

            localStorage.setItem('token', response.data.accessToken);
            return $authHost.request(originalRequest)
        }
        catch (e) {
            console.log("User is not authorized.")
        }
    }
}

$authHost.interceptors.request.use(authInterceptor)
$authHost.interceptors.response.use(config => {return config}, refreshTokenInterceptorOnError)

export {
    $host,
    $authHost
}