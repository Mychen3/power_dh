import http from '@/http/http'

// 添加文章
export const addArticle_req = http('/article/addArticle','post')
// 文章列表
export const ArticleList_req = http('/article/queryArticle','get')
// 通过id查询
export const ArticleId_req = http('/article/queryIdArticle','get')
// 随机查询为文章
export const queryRandom_req = http('/article/queryRandom','get')
