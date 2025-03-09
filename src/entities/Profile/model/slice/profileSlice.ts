import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProfileState} from '../types/ProfileState';
import {fetchProfileByUsername} from '../services/fetchProfileByUsername';
import {User} from 'entities/User';

const initialState: ProfileState = {
    isLoading: false,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileByUsername.pending, (state) => {
                state.serverErrors = undefined;
                state.isLoading = true
            })
            .addCase(fetchProfileByUsername.rejected, (state, action) => {
                state.serverErrors = action.payload;
                state.isLoading = false
            })
            .addCase(fetchProfileByUsername.fulfilled, (state, action: PayloadAction<User>) => {
                state.serverErrors = undefined;
                state.isLoading = false
                state.profileData = action.payload
            })
    }
})

export const {actions: profileActions} = profileSlice;
export const {reducer: profileReducer} = profileSlice;