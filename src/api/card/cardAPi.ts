import http from '@/http/http'

// 添加卡片
export const addCard_req = http('/card/addCard','get')
// 获取卡片
export const getCard_req = http('/card/getCard','get')
// 点赞卡片
export const givelike_req= http('/card/ongiveLike','get')
