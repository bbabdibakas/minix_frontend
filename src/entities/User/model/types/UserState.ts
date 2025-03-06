export interface User {
    id: number;
    name: string
    username: string
    bio: string
    createdAt: Date
    tokens: {
        access_token: string
        refresh_token: string
    }
}

export interface UserState {
    userData?: User
}