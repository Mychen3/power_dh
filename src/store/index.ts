import {defineStore} from 'pinia'

interface user {
    token: string,
    user: {
        email: string,
        level?: string,
        nickname: string,
        phone: string,
        token: string,
    }
}
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
        }
    }
})
