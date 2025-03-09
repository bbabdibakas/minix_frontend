import {TOKEN_LOCALSTORAGE_KEY} from 'shared/const/localstorage';
import axios from 'axios';
import {Token} from 'entities/User';

//TODO: have to add httpOnly cookies
const getAccessToken = () => {
    const tokens = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);

    if (tokens) {
        // TODO: have to create type validator
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const parsedTokens: Token = JSON.parse(tokens);
        return parsedTokens.accessToken ? `Bearer ${parsedTokens.accessToken}` : '';
    }

    return ''
}

export const api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: getAccessToken()
    },
});