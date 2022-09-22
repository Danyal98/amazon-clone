import axios from 'axios'
import { backendRoot } from './backendInfo'

const axiosInstance = axios.create({
    baseURL: backendRoot,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token') ? 'Bearer ' + localStorage.getItem('access_token') : null,
        'Content_Type': 'application/json',
        accept: 'application/json'
    },
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        if (
            error.response.data.code === 'token_not_valid' &&
            error.response.status === 401 &&
            error.response.statusText === 'unauthorized'
        ) {
            const refreshToken = localStorage.getItem('refresh_token');
            if (refreshToken) {
                const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));
                const now = Math.ceil(Date.now() / 1000);
                console.log(tokenParts.exp);

                if (tokenParts.exp > now) {
                    return axiosInstance
                        .post('accounts/token/refresh/', { refresh: refreshToken })
                        .then((response) => {
                            localStorage.setItem('access_token', response.data.access);
                            localStorage.setItem('refresh_token', response.data.refresh);

                            axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + response.data.access;
                            originalRequest.headers['Authorization'] = 'Bearer ' + response.data.access;

                            return axiosInstance(originalRequest);
                        })
                        .catch((err) => {
                            console.log(err)
                        });
                }
                else {
                    console.log('Refresh token is expired', tokenParts.exp, now);
                    window.location.href = '/login/'
                }
            }
        }
    }
)

export default axiosInstance;