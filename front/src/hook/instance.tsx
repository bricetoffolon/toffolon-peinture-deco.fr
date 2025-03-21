import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_HOST}`,
    timeout: 1000,
    withCredentials: true,
});

export default instance;
