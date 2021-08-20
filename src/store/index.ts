import {defineStore} from 'pinia'
import user from './store'

export default defineStore({
    id: 'user',
    state():user {
        return {
            user: {
                email: '',
                level: '',
                nickname: '',
                phone: '',
                token: '',
            },
            token: '',
            clientWidth:document.documentElement.clientWidth
        }
    }
})
