import {TOKEN_LOCALSTORAGE_KEY} from 'shared/const/localstorage';
import axios from 'axios';

//TODO: have to add httpOnly cookies
const getAccessToken = () => {
    const tokens = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);

    if (tokens) {
        const parsedTokens = JSON.parse(tokens);
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