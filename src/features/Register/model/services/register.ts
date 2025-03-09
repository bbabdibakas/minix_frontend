import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRegisterForm} from '../selectors/getRegisterForm';
import {registerActions} from '../slice/registerSlice';
import {validateRegisterForm} from './validateRegisterForm';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {Token, User, userActions} from 'entities/User';
import {handleThunkError} from 'shared/api/hundleThunkError';

interface registerResponse {
    userData: User;
    tokenData: Token;
}

export const register = createAsyncThunk<
    registerResponse,
    undefined,
    ThunkConfig<string[]>
>(
    'auth/register',
    async (_, thunkApi) => {
        const {extra, rejectWithValue, dispatch, getState} = thunkApi;

        const form = getRegisterForm(getState())
        const errors = validateRegisterForm(form)

        if (errors.length) {
            dispatch(registerActions.setValidateErrors(errors))
            return rejectWithValue(['Validation error']);
        }

        try {
            const response = await extra.api.post<registerResponse>('/registration', form)

            dispatch(userActions.setUserData(response.data.userData))
            dispatch(userActions.setTokenData(response.data.tokenData))

            return response.data;
        } catch (e) {
            return rejectWithValue(handleThunkError(e));
        }
    },
);
