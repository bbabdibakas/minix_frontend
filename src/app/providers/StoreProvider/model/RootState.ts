import {UserState} from 'entities/User';
import {ProfileState} from 'entities/Profile';
import {RegisterState} from 'features/Register';
import {LoginState} from 'features/Login';
import {AxiosInstance} from 'axios';
import {EditProfileState} from 'features/EditProfile';

export interface RootState {
    register: RegisterState
    login: LoginState
    user: UserState
    profile: ProfileState
    editProfile: EditProfileState
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: RootState;
}