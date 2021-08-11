import {login_req} from '@/api/use/useApi'
import {loginFrom} from '../hooks/loginData'
import useStore from '@/store/index'

const on_login = async ():Promise<void> => {
    const dataReq = await login_req(loginFrom)
       if (dataReq.data.statusCode == 200){



       }
}
export {
    on_login
}
