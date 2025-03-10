import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {EditProfileState, ValidateEditProfileFormError} from '../types/EditProfileState'
import {User} from 'entities/User';
import {updateProfileById} from '../services/updateProfileById';

const initialState: EditProfileState = {
    isLoading: false
}

export const editProfileSlice = createSlice({
    name: 'editProfileSlice',
    initialState,
    reducers: {
        initEditProfileForm: (state, action: PayloadAction<User>) => {
            state.form = action.payload;
            state.serverError = undefined
            state.validateErrors = undefined
        },
        setEditProfileForm: (state, action: PayloadAction<User>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            }
        },
        setValidateErrors: (state, action: PayloadAction<ValidateEditProfileFormError[]>) => {
            state.validateErrors = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateProfileById.pending, (state) => {
                state.serverError = undefined;
                state.isLoading = true
            })
            .addCase(updateProfileById.rejected, (state, action) => {
                state.serverError = action.payload;
                state.isLoading = false
            })
            .addCase(updateProfileById.fulfilled, (state) => {
                state.serverError = undefined;
                state.isLoading = false
            })
    }
})

export const {actions: editProfileActions} = editProfileSlice;
export const {reducer: editProfileReducer} = editProfileSlice;