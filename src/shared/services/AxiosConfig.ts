import { Environment } from './../environments/index';
import axios from "axios";
import errorInterceptor from "./ErrorInterceptor";
import responseInterceptor from "./ResponseInterceptor";

const Api = axios.create({
    baseURL: Environment.URL_BASE
})

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error)
)

export default Api