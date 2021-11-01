import {getQueryArticleList, ArticleId_req,updateArticle} from 'api/article/article'

export interface articleList {
    columns: { title: string, align: string, dataIndex?: string, key: string }[],
    tableData: articleLisType[],
}

export type articleLisType =
    { article_id: number, article_title: string,article_content?:string, article_startDate: string, article_type: number, updatedAt: string }
    | undefined

export interface queryParam {
    article_title: string | undefined,
    article_type: number | undefined,
    current: number,
    pageSize: number
}

export interface editorData {
    editorText: string|undefined,
    editorTitle: string|undefined
    editorType: number | undefined | string
    article_id?:number
}

/*
* @name: 查询文章列表
* @param:query_Param => 文章的参数
* @return:Promise
* */
export const getArticleList = async (query_Param: queryParam): Promise<{ data: articleLisType[]; count: number } | void> => {
    let responseArticleList = await getQueryArticleList(query_Param)
    if (responseArticleList.data.statusCode == 200) {
        return {data: responseArticleList.data.data, count: responseArticleList.data.count}
    }
}

/*
* @name: 通过id查询
* @param:article_id => 文章的id
* @return:Promise
* */
export const getArticleDetail = async (article_id:number|undefined):Promise<Promise<articleLisType> | void> => {
        const responseArticleDetail = await ArticleId_req({article_id: article_id})
               if (responseArticleDetail.data.statusCode == 200){
                    return responseArticleDetail.data.data
               }
}

/*
* @name: 通过id修改
* @return:Promise
* */
export const updateArticleDetail = async (params:editorData):Promise<boolean> => {
    const updateResult = await updateArticle({...params})
             return updateResult.data.statusCode == 200;
}
