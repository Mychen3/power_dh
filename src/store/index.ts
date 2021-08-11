import {defineStore} from 'pinia'

export default defineStore({
    id: 'user',
    state(){
        return {
            user: {},
            token: '',
        }
    }
})
