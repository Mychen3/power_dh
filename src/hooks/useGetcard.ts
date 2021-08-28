import {getCard_req} from 'api/card/cardAPi'
/*
* @name: 获取图片
* @param: type: 卡片板块
* @return:void
* */

const getCard = async (cardType:number):Promise<object | undefined> => {
   const req_data  = await getCard_req({cardType:cardType})
         if (req_data?.data?.statusCode == 200 ){
             return req_data.data
         }else{
            return {}
         }
}

export default getCard

