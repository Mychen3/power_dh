import routes from "@/router/router";

let showone_level=[];

(function (){
    let showTitleArr = routes.filter(item=>{
        return item.meta?.title
    })
    for (const item of showTitleArr){
        if (item.one_level){
            // @ts-ignore
            for(const keyChildren of item.children){
                showone_level.push(keyChildren)
            }
        }else {
            showone_level.push(item)
        }
    }
})()

export default showone_level
