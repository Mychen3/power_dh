interface columns{
    task_id:number,
    task_title:string,
    task_content:string,
    task_state:number,
    task_startDate:Date|string,
    task_endDate:Date|string
}

interface listData extends columns {
    columns:{title:string,dataIndex?:string,align?:string,key?:string,slots?:{customRender?:string}}[]
    data:columns[] | [{}]
}

interface queryParam{
    task_start_date:Date|null|string,
    task_state:number|null,
    pageSize:number,
    current:number
}


export {
    listData as listDataType,
    queryParam,
    columns as columnsType
}
