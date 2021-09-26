import {reactive} from "vue";

interface public_articleDetails {
    articleType: number | undefined,
    articleTitle: string | undefined

}

export const public_articleDetails = reactive<public_articleDetails>({
    articleType: undefined,
    articleTitle: undefined,
})


