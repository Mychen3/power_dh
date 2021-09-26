import {reactive, ref} from 'vue'

import {regusterFrom,logonFrom} from '../hooks/login'

const regusterFrom = reactive<regusterFrom>({
    nickname: '',
    email: '',
    password: '',
    twoPassword: '',
    phone: '',
    phoneCode: ''
})

const loginFrom = reactive<logonFrom>({
    email: '',
    password:''
})

// 控制卡片
const showLogin = ref<boolean>(true)

//登录按钮
const btnLoding = ref<boolean>(false)




const regusterRules = {
    nickname: [
        {
            required: true, message: '请输入您的名字', trigger: 'blur'
        },
    ],
    email: [
        {
            required: true, message: '请输入正确的邮箱', type: 'email', trigger: 'blur'
        }
    ],
    phone: [
        {
            required: true, pattern: /^1[0-9]{10}$/, message: '请输入11位手机号码', trigger: 'blur'
        }
    ],
    phoneCode: [
        {
            required: true, message: '请输入短信验证码', trigger: 'blur'
        }
    ],
    password: [
        {
            required: true, message: '请输入您的密码', trigger: 'change'
        },
        {
            min: 3, max: 13, message: '请输入3至13位的密码', trigger: 'change'
        },
    ],
    twoPassword: [
        {
            validator(rule: any, value: any, callback: any) {
                if (value === '') {
                    return Promise.reject('请输入密码')
                } else if (value !== regusterFrom.password) {
                    return Promise.reject('俩次输入的密码不一致！')
                } else {
                    return Promise.resolve();
                }
            }
        }
    ]
}
export {
    regusterRules,
    regusterFrom,
    loginFrom,
    showLogin,
    btnLoding,

}
