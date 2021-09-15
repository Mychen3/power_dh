interface formData {
    title: string,
    imgurl: string,
    content: string,
    git_hub: string,
    home: string,
    cardType: null | number
}

interface validateType {
    validate: Function
}

export interface taskData {
    task_id?:number|null,
    task_title: string,
    task_content: string,
    task_state?: number,
    task_startDate: Date|string,
    task_endDate?: Date|string,
}



export {
    formData,
    validateType,
}
