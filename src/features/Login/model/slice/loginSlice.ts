import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginState, ValidateLoginFormError} from "../types/LoginState";
import {login} from "../services/login";

const initialState: LoginState = {
    form: {
        username: '',
        password: '',
    },
    isLoading: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.form.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.form.password = action.payload;
        },
        setValidateErrors: (state, action: PayloadAction<ValidateLoginFormError[]>) => {
            state.validateErrors = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.serverErrors = undefined;
                state.validateErrors = undefined;
                state.isLoading = true
            })
            .addCase(login.rejected, (state, action) => {
                state.serverErrors = action.payload;
                state.isLoading = false
            })
            .addCase(login.fulfilled, (state) => {
                state.serverErrors = undefined;
                state.validateErrors = undefined;
                state.isLoading = false
            })
    }
});

export const {actions: loginActions} = loginSlice;
export const {reducer: loginReducer} = loginSlice;