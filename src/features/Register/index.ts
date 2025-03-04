import {registerReducer} from "./model/slice/registerSlice";
import {RegisterState} from "./model/types/RegisterState";
import RegisterForm from './ui/RegisterForm'

export type {
    RegisterState
}

export {
    registerReducer,
    RegisterForm
}