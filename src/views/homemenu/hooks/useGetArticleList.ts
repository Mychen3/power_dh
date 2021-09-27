import {ArticleList_req} from 'api/article/article'
import {reactive} from 'vue'

interface ArticleLis {
    list: {[key: string]: number | string }[],
    skeletonLoading:boolean
}

const ArticleList = reactive<ArticleLis>({
    list: [],
    skeletonLoading:true,
})

const getArticleList = async (): Promise<void> => {
    ArticleList.list.length = 0
    const req = await ArticleList_req({pageSize: 15})
        if (!req.data.length){
            req.data.data.forEach((item:any)=>{
                   ArticleList.list.push(item)
               })
            ArticleList.skeletonLoading =false
        }
}

export {
    ArticleList,
    getArticleList
}
