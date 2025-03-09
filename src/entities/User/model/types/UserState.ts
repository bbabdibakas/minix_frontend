export interface User {
    id: number;
    name: string
    username: string
    bio: string
    createdAt: Date
}

export interface Token {
    accessToken: string
    refreshToken: string
}

export interface UserState {
    userData?: User
    tokenData?: Token
    isInitialized: boolean
}