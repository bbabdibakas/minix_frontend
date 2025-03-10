import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {handleThunkError} from 'shared/api/hundleThunkError';
import {User} from 'entities/User';
import {getEditProfileForm} from '../selectors/getEditProfileForm';
import {validateEditProfileForm} from './validateEditProfileForm';
import {editProfileActions} from '../slice/editProfileSlice';
import {profileActions} from 'entities/Profile';

export const updateProfileById = createAsyncThunk<
    User,
    undefined,
    ThunkConfig<string[]>
>(
    'editProfile/updateProfileById',
    async (_, thunkApi) => {
        const {extra, dispatch, rejectWithValue, getState} = thunkApi;

        const form = getEditProfileForm(getState())
        const errors = validateEditProfileForm(form)
        if (errors.length) {
            dispatch(editProfileActions.setValidateErrors(errors))
            return rejectWithValue(['Validation error']);
        }

        try {
            const response = await extra.api.put<User>(`/profiles/${String(form?.id)}`, form)

            dispatch(profileActions.setProfileData(response.data))

            return response.data;
        } catch (e) {
            return rejectWithValue(handleThunkError(e));
        }
    },
);
