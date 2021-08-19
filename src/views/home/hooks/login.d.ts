
// 抽屉的样式
interface drawerSty {
    margin: number,
    padding: number,
    width: string,
    height: string,
}

// 注册表单
interface regusterFrom{
    nickname:number|string|null,
    email:string,
    password:string,
    twoPassword:string,
    phone:string,
    phoneCode:string
}

// 登录表单
interface logonFrom{
    email:string,
    password:string,
}

export {
    drawerSty,
    regusterFrom,
    logonFrom
}
