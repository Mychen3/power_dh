import {queryTypeList_req} from 'api/article/article'
import {message} from 'ant-design-vue'

const getArticleTypeList = async (typeId:number):Promise<void> => {
    const res_data =  await queryTypeList_req({article_type:typeId})
     if (res_data.data.statusCode == '200'){

         return res_data.data
     }else {
         message.warning('数据请求失败')
     }
}
export default getArticleTypeList


