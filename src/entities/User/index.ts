import {User, UserState} from "./model/types/UserState";
import {userActions, userReducer} from "./model/slice/userSlice";
import {getUserData} from "./model/selectors/getUserData";
import {getUserInitialized} from "./model/selectors/getUserInitialized";

export type {
    User,
    UserState
}

export {
    userActions,
    userReducer,
    getUserData,
    getUserInitialized
}