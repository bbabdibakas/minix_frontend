import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {RootState} from "./RootState";
import {registerReducer} from "features/Register";

export function createReduxStore(initialState?: RootState) {
    const rootReducers: ReducersMapObject<RootState> = {
        register: registerReducer,
    }

    return configureStore({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState
    })
}