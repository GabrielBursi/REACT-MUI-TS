import { AxiosError } from "axios";

export default function errorInterceptor(error: AxiosError){
    if (error.message === 'Network Error') return Promise.reject(new Error('Erro de conexão. '))
    if (error.response?.status === 401){

        // Do something
    }
    return Promise.reject(error);
}