import {login_req} from '@/api/use/useApi'
import {loginFrom, btnLoding} from '../hooks/loginData'
import useStore from '@/store/index'
import {message} from 'ant-design-vue'


const on_login = async (): Promise<void> => {

    if (loginFrom.password != '' && loginFrom.email != '') {
        btnLoding.value = true
        const store = useStore()
        const dataReq = await login_req(loginFrom)
        if (dataReq.data.statusCode == 200) {
            btnLoding.value = false
            message.success("登录成功")
        }
    }else {
        message.warning('请您输入邮箱和密码登录！');
    }
}
export {
    on_login
}
