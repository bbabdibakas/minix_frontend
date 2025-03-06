import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {loginActions} from "../slice/loginSlice";
import {validateLoginForm} from "./validateLoginForm";
import {ThunkConfig} from "app/providers/StoreProvider";
import {User, userActions} from "entities/User";
import {getLoginForm} from "../selectors/getLoginForm";

export const login = createAsyncThunk<
    User,
    undefined,
    ThunkConfig<string[]>
>(
    'auth/login',
    async (_, thunkApi) => {
        const {rejectWithValue, dispatch, getState} = thunkApi;

        const form = getLoginForm(getState())
        const errors = validateLoginForm(form)

        if (errors.length) {
            dispatch(loginActions.setValidateErrors(errors))
            console.log(errors)
            return rejectWithValue(['Validation error']);
        }

        try {
            const response = await axios.post<User>('http://localhost:8000/api/login', form)

            dispatch(userActions.setUserData(response.data))

            return response.data;
        } catch (e) {
            console.error(e);

            //TODO: have to handle server error here
            return rejectWithValue(['Server Error.']);
        }
    },
);
