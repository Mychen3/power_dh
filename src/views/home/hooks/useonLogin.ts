import {login_req} from '@/api/use/useApi'
import {loginFrom, btnLoding} from '../hooks/loginData'
import useStore from '@/store/index'
import {message} from 'ant-design-vue'

/*
* @name: 登录接口
* @param: emit defineEmits的对象
* @return: Promise
* */

const on_login = async (emit:Function): Promise<void> => {
  try {
      if (loginFrom.password != '' && loginFrom.email != '') {
          btnLoding.value = true
          const store = useStore()
          const dataReq = await login_req(loginFrom)
          if (dataReq.data.statusCode == 200) {
              btnLoding.value = false
              store.token = dataReq.data.data.token
              store.user = dataReq.data.data
              window.sessionStorage.setItem('user',JSON.stringify(dataReq.data.data))
              window.sessionStorage.setItem('token',dataReq.data.data.token)
              // 登录第一次提示后面刷新不提示
              window.sessionStorage.setItem('loginTip','0')
              emit('closeLogin')
              message.success("登录成功")
          }else {
              btnLoding.value = false
          }
      }else {

          message.warning('请您输入邮箱和密码登录！');
      }
  }catch (e) {
      btnLoding.value = false
      message.warning('请稍后尝试，服务器出现了一点点问题');
  }

}
export default on_login


