import {addArticle_req} from 'api/article/article'
import {message} from 'ant-design-vue'

interface editorData {
    editorText: string,
    editorTitle: string
    editorType: number | undefined | string
}

/*
* @name: 添加文章
* @param:editorData => 发布文章的参数
* @return:void
* */
const addArticle = async (editorData: editorData): Promise<void> => {
    if (editorData.editorType != undefined && editorData.editorType != '') {
        let data_req = await addArticle_req(editorData)
        if (data_req.data.statusCode == 200) {
            message.success('添加成功')
            for (let item in editorData) {
                // @ts-ignore
                editorData[item] = ''
            }
        }
    } else {
        message.warning('请选择分类')
    }
}




export default addArticle
