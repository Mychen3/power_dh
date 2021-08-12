import http from '@/http/http'

// 登录接口
export const login_req = http('/user/login','post')
// 退出接口
export const signout_req = http('/user/signout','get')
