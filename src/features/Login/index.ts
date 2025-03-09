import {loginReducer} from './model/slice/loginSlice';
import {LoginState} from './model/types/LoginState';
import LoginModal from './ui/LoginModal/LoginModal';

export type {
    LoginState
}

export {
    loginReducer,
    LoginModal
}