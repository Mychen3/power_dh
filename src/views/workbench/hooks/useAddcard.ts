import {form_data} from './useFormData'
import {addCard_req} from 'api/card/cardAPi'
import {validateType} from './formdata'
import {message} from 'ant-design-vue'


/*
* @name: 添加卡片
* @param: dom: form表单的dom
* @return:void
* */
const addCard = async (dom:validateType):Promise<void> => {
    if (await dom.validate()){
         const data_req = await addCard_req(form_data)
        if (data_req.data.statusCode == 200){
            message.success('添加成功')
              Object.keys(form_data).forEach(key=>{
                    // @ts-ignore
                  form_data[key] = ''
              })

        }else {
            message.error('添加失败')
        }

    }
}


export default addCard
