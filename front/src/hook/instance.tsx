import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST == undefined && typeof window !== 'undefined'
        ? `${window.location.origin}/api`
        : process.env.NEXT_PUBLIC_HOST || '',
    timeout: 5000,
    withCredentials: true,
});

export default instance;
