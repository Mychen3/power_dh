import axios from '@/http/axios'
import {message} from 'ant-design-vue'

const req = (url: string, methods: string): Function => {
    return (data: object): object => {
        return new Promise(async (resolve, reject) => {
            switch (methods) {
                case 'get' || 'GET':
                     axios({url:url, params:data}).then(res=>{resolve(res)}).catch(err=>{ message.error('请求开小差了！'); resolve(err) })
                    break;
                case 'post' || 'POST' || 'put' || 'PUT':
                     axios.post(url, data).then(res=>{resolve(res)}).catch(err=>{  message.error('请求开小差了！'); resolve(err)})
                    break;
                default:
                    reject('请求失败')
            }
        })
    }
}

export default req
