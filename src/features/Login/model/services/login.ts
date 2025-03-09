import {createAsyncThunk} from '@reduxjs/toolkit';
import {loginActions} from '../slice/loginSlice';
import {validateLoginForm} from './validateLoginForm';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {Token, User, userActions} from 'entities/User';
import {getLoginForm} from '../selectors/getLoginForm';
import {handleThunkError} from 'shared/api/hundleThunkError';

interface LoginResponse {
    userData: User;
    tokenData: Token;
}

export const login = createAsyncThunk<
    LoginResponse,
    undefined,
    ThunkConfig<string[]>
>(
    'auth/login',
    async (_, thunkApi) => {
        const {extra, rejectWithValue, dispatch, getState} = thunkApi;

        const form = getLoginForm(getState())
        const errors = validateLoginForm(form)

        if (errors.length) {
            dispatch(loginActions.setValidateErrors(errors))
            return rejectWithValue(['Validation error']);
        }

        try {
            const response = await extra.api.post<LoginResponse>('/login', form)

            dispatch(userActions.setUserData(response.data.userData))
            dispatch(userActions.setTokenData(response.data.tokenData))

            return response.data;
        } catch (e) {
            return rejectWithValue(handleThunkError(e));
        }
    },
);
