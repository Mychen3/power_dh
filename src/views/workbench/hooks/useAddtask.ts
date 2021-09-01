import {taskForm_data, showLoad} from '../hooks/useFormData'
import {addTask_req} from 'api/task/task'
import {message} from 'ant-design-vue'
import {validateType} from './formdata'
import {getDayList} from './useGetDayList'

/*
* @name: 添加待办事件
* @param: dom: form表单的dom
* @return:void
* */
const addTask = async (dom: validateType): Promise<void> => {
    showLoad.value = true
    if (await dom.validate().catch(() => showLoad.value = false)) {
        const data_req = await addTask_req(taskForm_data).finally(() => showLoad.value = false)
        if (data_req.data.statusCode == 200) {
            message.success('添加成功')
            Object.keys(taskForm_data).forEach(key => {
                // @ts-ignore
                taskForm_data[key] = ''
            })
            await getDayList()
            taskForm_data.task_state = 0
        }
    }
}
export default addTask

