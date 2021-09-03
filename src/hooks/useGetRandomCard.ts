import {cardData} from 'view/webdevelop/documentStudy/card'
import {getCard_req} from 'api/card/cardAPi'
import {reactive} from 'vue'


// 卡片
const randomCard = reactive({
    data: [{}]
}) as cardData

/*
* @name: 随机获取多少张卡片
* @param: x:获取卡片的数量
* @return:void
* */
const getRandomCard = async (x: number): Promise<void> => {
    const data_req = await getCard_req()
    randomCard.data.length = 0;
    let randomArr: any = []
    if (data_req.data.statusCode == 200) {
        for (let i = 0; randomArr.length <= (x-1); i++) {
            randomArr.push(Math.floor(Math.random() * (data_req.data.data.length)))
            randomArr = Array.from(new Set(randomArr))
        }
        randomArr.forEach((key:number)=>{
            randomCard.data.push(data_req.data.data[key])
        })
        console.log( randomCard.data)
    }
}


export {
    randomCard,
    getRandomCard
}






