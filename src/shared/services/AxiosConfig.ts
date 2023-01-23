import axios from "axios";
import errorInterceptor from "./ErrorInterceptor";
import responseInterceptor from "./ResponseInterceptor";

const Api = axios.create({
    baseURL: "http://localhost:3333"
})

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error)
)

export default Api