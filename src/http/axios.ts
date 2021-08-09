import axios, {AxiosRequestConfig, AxiosResponse} from "axios";


const serve = axios.create({});
serve.defaults.timeout = 10000;
serve.defaults.baseURL = ''

serve.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'


serve.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {

    return config
})

serve.interceptors.response.use((response: AxiosResponse): AxiosResponse => {

    return response
})


export default serve
