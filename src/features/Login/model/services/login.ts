import {createAsyncThunk} from "@reduxjs/toolkit";
import {loginActions} from "../slice/loginSlice";
import {validateLoginForm} from "./validateLoginForm";
import {ThunkConfig} from "app/providers/StoreProvider";
import {User, userActions} from "entities/User";
import {getLoginForm} from "../selectors/getLoginForm";
import {handleThunkError} from "shared/api/hundleThunkError";

export const login = createAsyncThunk<
    User,
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
            console.log(errors)
            return rejectWithValue(['Validation error']);
        }

        try {
            const response = await extra.api.post<User>('/login', form)

            dispatch(userActions.setUserData(response.data))

            return response.data;
        } catch (e) {
            return rejectWithValue(handleThunkError(e));
        }
    },
);
