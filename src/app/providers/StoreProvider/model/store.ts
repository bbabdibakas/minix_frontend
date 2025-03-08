import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {RootState, ThunkExtraArg} from "./RootState";
import {registerReducer} from "features/Register";
import {loginReducer} from "features/Login";
import {userReducer} from "entities/User";
import {profileReducer} from "entities/Profile";
import {api} from "shared/api/api";

export function createReduxStore(initialState?: RootState) {
    const rootReducers: ReducersMapObject<RootState> = {
        register: registerReducer,
        login: loginReducer,
        user: userReducer,
        profile: profileReducer,
    }

    const extraArg: ThunkExtraArg = {
        api: api,
    };

    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            }
        })
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
