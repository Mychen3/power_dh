import {getDayTask_req} from "api/task/task";
import {list, listData} from "view/workbench/hooks/benchList";
import {reactive} from "vue";


const list_data = reactive({
    DayList: [{}]
}) as list

/*
* @name:获取当天日期待办
* @param:
* @return: promise
* */
const getDayList = async () => {
    const req_data = await getDayTask_req()
    if (req_data.data.statusCode == 200) {
        list_data.DayList.length = 0
        req_data.data.data.forEach((item: listData): void => {
            list_data.DayList.push(item)
        })
    }
}


export {
    getDayList,
    list_data
}
