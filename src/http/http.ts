import axios from '@/http/axios'


const req = (url: string, methods: string): Function => {

    return (data: object): object => {
        return new Promise(async (resolve, reject) => {
            switch (methods) {
                case 'get' || 'GET':
                   axios.get(url, data).then(res=>{resolve(res)}).catch(err=>{resolve(err)})
                    break;
                case 'post' || 'POST':
                     axios.post(url, data).then(res=>{resolve(res)}).catch(err=>{resolve(err)})
                    break;
                default:
                    reject('请求失败')
            }
        })
    }
}

export default req
