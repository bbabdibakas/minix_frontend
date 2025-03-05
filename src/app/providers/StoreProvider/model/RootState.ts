import {RegisterState} from "features/Register";
import {UserState} from "entities/User";

export interface RootState {
    register: RegisterState
    user: UserState
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: RootState;
}