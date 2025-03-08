import {UserState} from "entities/User";
import {RegisterState} from "features/Register";
import {LoginState} from "features/Login";
import {AxiosInstance} from "axios";

export interface RootState {
    register: RegisterState
    login: LoginState
    user: UserState
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: RootState;
}