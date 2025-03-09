import {User} from 'entities/User';

export interface ProfileState {
    profileData?: User
    isLoading: boolean
    serverErrors?: string[]
}