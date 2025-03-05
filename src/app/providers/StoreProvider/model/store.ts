import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {RootState} from "./RootState";
import {registerReducer} from "features/Register";
import {userReducer} from "entities/User";

export function createReduxStore(initialState?: RootState) {
    const rootReducers: ReducersMapObject<RootState> = {
        register: registerReducer,
        user: userReducer,
    }

    return configureStore({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
