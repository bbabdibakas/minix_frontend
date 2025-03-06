import {UserState} from "entities/User";
import {RegisterState} from "features/Register";
import {LoginState} from "features/Login";

export interface RootState {
    register: RegisterState
    login: LoginState
    user: UserState
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: RootState;
}