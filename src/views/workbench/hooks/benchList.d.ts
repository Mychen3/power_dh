export interface listData {
    task_id:number|null,
    task_title:string,
    task_content:string,
    task_state:number|null,
    task_startDate:Date|null,
    task_endDate?:Date
}


export interface list extends listData  {
    DayList:listData[]
}
