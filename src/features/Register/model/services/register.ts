import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getRegisterForm} from "../selectors/getRegisterForm";
import {registerActions} from "../slice/registerSlice";
import {validateRegisterForm} from "./validateRegisterForm";
import {ThunkConfig} from "app/providers/StoreProvider";

interface UserData {
    name: string
    username: string
    password: string
    tokens: {
        access_token: string
        refresh_token: string
    }
}

export const register = createAsyncThunk<
    UserData,
    undefined,
    ThunkConfig<string[]>
>(
    'auth/register',
    async (_, thunkApi) => {
        const {rejectWithValue, dispatch, getState} = thunkApi;

        const form = getRegisterForm(getState())
        const errors = validateRegisterForm(form)

        if (errors.length) {
            dispatch(registerActions.setValidateErrors(errors))
            console.log(errors)
            return rejectWithValue(['Validation error']);
        }

        try {
            const response = await axios.post<UserData>('http://localhost:8000/api/registration', form)

            //TODO: have to set User here
            console.log(response)

            return response.data;
        } catch (e) {
            console.error(e);

            //TODO: have to handle server error here
            return rejectWithValue(['Server Error.']);
        }
    },
);
