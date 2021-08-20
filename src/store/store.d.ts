export default interface user {
    token: string,
    user: {
        email: string,
        level?: string,
        nickname: string,
        phone: string,
        token: string,
    },
    clientWidth:number|undefined;
}
