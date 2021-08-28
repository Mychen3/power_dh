import routes from "@/router/router";
import useStore from '@/store/index'

const store = useStore()

let showone_level: any = [];

(function () {
    let showTitleArr = routes.filter(item => {
        return item.meta?.title
    })
    for (const item of showTitleArr) {
        if (item.one_level) {
            if ( store.user.level == '1') {
                // @ts-ignore
                for (const keyChildren of item.children) {
                    showone_level.push(keyChildren)
                }
            } else {
                  const securityArr = item.children?.filter((items:any)=>{
                      return !items.security
                  })
                 securityArr?.forEach(keys=>{
                     showone_level.push(keys)
                 })
            }
        } else {
            showone_level.push(item)
        }
    }
})()

export default showone_level
