import {getDayTask_req} from "api/task/task";
import {list, listData} from "view/workbench/hooks/benchList";
import {reactive} from "vue";

const list_data = reactive({
    DayList: [{}]
}) as list


interface dayDataType {
    completed: number;
    noCompleted: number
}


const dayData = reactive<dayDataType>({
    completed: 0,
    noCompleted: 0
})

/*
* @name:获取当天日期待办
* @param:
* @return: promise
* */
const getDayList = async ():Promise<void> => {
    const req_data = await getDayTask_req()
    if (req_data.data.statusCode == 200) {
        list_data.DayList.length = 0
        req_data.data.data.forEach((item: listData): void => {
            list_data.DayList.push(item)
        })
         getDaySet()
    }
}


/*
* @name:获取当天日期待办 => 总共几件事情和待办
* @param:{ dayData.completed 待办事件，。dayData.noCompleted 总共待办事件      }
* @return: void
* */
const getDaySet = ():void => {
    dayData.noCompleted = 0
    dayData.completed = list_data.DayList.length
    list_data.DayList.forEach((item: listData) => {
        if (item.task_state == 1) {
            dayData.noCompleted += 1
        }
    })
}


export {
    getDayList,
    list_data,
    dayData
}
