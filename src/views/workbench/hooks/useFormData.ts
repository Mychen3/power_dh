import {reactive} from "vue";
import {formData} from './formdata'

const rules = {
    title: [{required: true, message: '请输入卡片名称', trigger: 'blur'},],
    imgurl: [{required: true, message: '图片地址', trigger: 'blur'}],
    content: [{required: true, message: '卡片内容', trigger: 'blur'}],
    git_hub: [{required: true, message: 'gihub地址', trigger: 'blur',},],
    home: [{required: true, message: '主页地址', trigger: 'blur'}],
    cardType: [{required: true, message: '请选择类型', trigger: 'change'}],
};

const form_data = reactive<formData>({
    title: '',
    imgurl: '',
    content: '',
    git_hub: '',
    home: '',
    cardType: null,
})


export {
    rules,
    form_data
}

