import { AxiosResponse } from 'axios';

export default function responseInterceptor (response: AxiosResponse) {
    return response; 
}