import http from '@/http/http'

// 添加待办任务
export const addTask_req = http('/Task/addTask','post')
// 获取当天任务
export const getDayTask_req = http('/Task/queryDayTask','get')
// 完成任务
export const successTask_req = http('/Task/successTask','get')
// 查询所有任务
export const queryTask_req = http('/Task/queryTask','get')
// 通过id删除任务
export const delTask_req = http('/Task/delTask','get')

