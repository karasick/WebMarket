import axios from "axios";
import AuthService from "../api/AuthService";
import {ACCESS_TOKEN_LOCAL_KEY} from "../utils/consts";

export const API_URL = 'http://localhost:5000/'

const $host = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL || API_URL
})

const $authHost = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL || API_URL
})

const authInterceptor = config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN_LOCAL_KEY)}`
    return config
}

const refreshTokenInterceptorOnError = async (error) => {
    const originalRequest = error.config;

    if(error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const responseData = await AuthService.refresh()

            localStorage.setItem(ACCESS_TOKEN_LOCAL_KEY, responseData.accessToken);
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