import {createAsyncThunk} from "@reduxjs/toolkit";
import {getRegisterForm} from "../selectors/getRegisterForm";
import {registerActions} from "../slice/registerSlice";
import {validateRegisterForm} from "./validateRegisterForm";
import {ThunkConfig} from "app/providers/StoreProvider";
import {User, userActions} from "entities/User";
import {handleThunkError} from "shared/api/hundleThunkError";

export const register = createAsyncThunk<
    User,
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
            console.log(errors)
            return rejectWithValue(['Validation error']);
        }

        try {
            const response = await extra.api.post<User>('/registration', form)

            dispatch(userActions.setUserData(response.data))

            return response.data;
        } catch (e) {
            return rejectWithValue(handleThunkError(e));
        }
    },
);
