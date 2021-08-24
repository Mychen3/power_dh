import {defineStore} from 'pinia'
import workBench from './work'

export default defineStore({
    id: 'workBench',
    state():workBench {
        return {
            cardType:{}
        }
    }
})
