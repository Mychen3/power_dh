import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import baseURL from "@/http/baseURL";
import useStore from '@/store/index'
import {message} from 'ant-design-vue'

const store = useStore()
const serve = axios.create({});
serve.defaults.timeout = 10000;
serve.defaults.baseURL = baseURL
serve.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'


serve.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    config.headers['Authorization'] = 'Bearer ' + store.token // 让每个请求携带自定义token
    return config
})

serve.interceptors.response.use((response: AxiosResponse): AxiosResponse => {
    // 清空用户数据
    const clearUse = () => {
        window.sessionStorage.clear();
        store.user = {
            email: '',
            level: '',
            nickname: '',
            phone: '',
            token: '',
        }
        store.token = ''
    }
    if (response.data.statusCode == 200) {
        return response
    } else if (response.data.statusCode == 410) {
        message.warning(response.data.msg)
    } else if (response.data.statusCode == 400) {
        message.warning(response.data.msg)
    } else if (response.data.statusCode == 401) {
        message.warning(response.data.msg)
    } else if (response.data.statusCode == 403) {
        message.warning(response.data.msg)
        clearUse()
    } else if (response.data.statusCode == 506) {
        message.warning(response.data.msg)
    } else if (response.data.statusCode == 500) {
        message.warning(response.data.msg)
    }
    return response
})


export default serve
