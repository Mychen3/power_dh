

interface drawerSty {
    margin: number,
    padding: number,
    width: string,
    height: string,
}

interface regusterFrom{
    nickname:number|string|null,
    email:string,
    password:string,
    twoPassword:string,
    phone:string,
    phoneCode:string
}


interface logonFrom{
    email:string,
    password:string,
}



export {
    drawerSty,
    regusterFrom,
    logonFrom
}
