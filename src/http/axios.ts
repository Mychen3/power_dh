import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import baseURL from "@/http/baseURL";

const serve = axios.create({});
serve.defaults.timeout = 10000;
serve.defaults.baseURL = baseURL

serve.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

serve.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
      console.log(config)
    return config
})

serve.interceptors.response.use((response: AxiosResponse): AxiosResponse => {
    console.log(response)
    return response
})


export default serve
