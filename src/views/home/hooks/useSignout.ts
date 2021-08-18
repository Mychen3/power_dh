import {signout_req} from '@/api/use/useApi'
import {message } from 'ant-design-vue'
import useStore from '@/store/index'

/*
@name: 退出用户
@return: void
*/
const signOut=async ():Promise<void>=>{
    const store = useStore()
   const dataReq = await signout_req()
     if (dataReq.data.statusCode == 200){
         store.token=''
         store.user = {
             email: '',
             level: '',
             nickname: '',
             phone: '',
             token: '',
         }
         window.sessionStorage.clear()
         location.reload()
         message.success('退出成功')
     }
}

export default signOut
