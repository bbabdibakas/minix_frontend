import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Token, User, UserState} from '../types/UserState';
import {TOKEN_LOCALSTORAGE_KEY, USER_LOCALSTORAGE_KEY} from 'shared/const/localstorage';

const initialState: UserState = {
    isInitialized: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.userData = action.payload;
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(state.userData));
        },
        setTokenData: (state, action: PayloadAction<Token>) => {
            state.tokenData = action.payload;
            localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, JSON.stringify(state.tokenData));
        },
        initUserData: (state) => {
            const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            const tokenData = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY)
            if (userData) {
                // TODO: have to create type validator
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                state.userData = JSON.parse(userData);
            }
            if (tokenData) {
                // TODO: have to create type validator
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                state.tokenData = JSON.parse(tokenData);
            }
            state.isInitialized = true;
        },
        removeUserData: (state) => {
            state.userData = undefined
            state.tokenData = undefined
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
            localStorage.removeItem(TOKEN_LOCALSTORAGE_KEY)
        }
    }
})

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;