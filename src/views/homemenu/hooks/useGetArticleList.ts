import {ArticleList_req} from 'api/article/article'
import {reactive} from 'vue'

interface ArticleLis {
    list: {[key: string]: number | string }[]
}

const ArticleList = reactive<ArticleLis>({
    list: []
})

const getArticleList = async (): Promise<void> => {
    ArticleList.list.length = 0
    const req = await ArticleList_req({pageSize: 15})
        if (!req.data.length){
            req.data.data.forEach((item:any)=>{
                   ArticleList.list.push(item)
               })
        }
}

export {
    ArticleList,
    getArticleList
}
