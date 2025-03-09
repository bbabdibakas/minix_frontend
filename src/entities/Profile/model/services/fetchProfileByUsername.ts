import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {handleThunkError} from 'shared/api/hundleThunkError';
import {User} from 'entities/User';

export const fetchProfileByUsername = createAsyncThunk<
    User,
    string,
    ThunkConfig<string[]>
>(
    'profile/fetchProfileByUsername',
    async (username, thunkApi) => {
        const {extra, rejectWithValue} = thunkApi;

        try {
            const response = await extra.api.get<User>(`/profiles/${username}`)

            return response.data;
        } catch (e) {
            return rejectWithValue(handleThunkError(e));
        }
    },
);
