export default interface user {
    token: string | null,
    user: {
        email: string,
        level?: string,
        nickname: string,
        phone: string,
        token: string,
    } | string,
    clientWidth: number | undefined;
}
