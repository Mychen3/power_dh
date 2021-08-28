import {reactive,ref} from "vue";
import {formData, taskData} from './formdata'

const rules = {
    title: [{required: true, message: '请输入卡片名称', trigger: 'blur'},],
    imgurl: [{required: true, message: '图片地址', trigger: 'blur'}],
    content: [{required: true, message: '卡片内容', trigger: 'blur'}],
    git_hub: [{required: true, message: 'gihub地址', trigger: 'blur',},],
    home: [{required: true, message: '主页地址', trigger: 'blur'}],
    cardType: [{required: true, message: '请选择类型', trigger: 'change'}],
};

const taskRules = {
    task_title: [{required: true, message: '请输入任务名称', trigger: 'blur'},],
    task_content: [{required: true, message: '请输入任务内容', trigger: 'blur'}],
    task_startDate: [{required: true, message: '请选择任务开始时间', trigger: 'change',type: 'object'}],
};

const taskForm_data= reactive<taskData>({
    task_title:'',
    task_content:'',
    task_state:0,
    task_startDate:''
})

const form_data = reactive<formData>({
    title: '',
    imgurl: '',
    content: '',
    git_hub: '',
    home: '',
    cardType: null,
})
// 控制load
const showLoad =ref<boolean>(false)

export {
    rules,
    form_data,
    taskRules,
    taskForm_data,
    showLoad
}

