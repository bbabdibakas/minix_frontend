import {RegisterState} from "../types/RegisterState";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: RegisterState = {
    name: '',
    username: '',
    password: '',
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
});

export const {actions: registerActions} = registerSlice;
export const {reducer: registerReducer} = registerSlice;