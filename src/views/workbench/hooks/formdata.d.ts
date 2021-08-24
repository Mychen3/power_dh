interface formData{
    title:string,
    imgurl:string,
    content:string,
    git_hub:string,
    home:string,
    cardType:null|number
}

interface validateType {
         validate:Function
}


export {
    formData,
    validateType
}
