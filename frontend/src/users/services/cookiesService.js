import { jwtDecode } from "jwt-decode";

const TOKEN = 'token';

export const setTokenInCookies = (jwtToken) => {
    var date = new Date(); date.setFullYear(date.getFullYear() + 1);
    document.cookie = `${TOKEN}=${jwtToken};path=/;expires=${date.toUTCString()}`;
}

export const updateTokenExpiration = () => {
    const token = getTokenFromCookies();
    if (token) {
        setTokenInCookies(token);
    }
}

export const removeTokenFromCookies = () => {
    document.cookie = `${TOKEN}=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
}

export const getTokenFromCookies = () => {
    if (document.cookie) {
        const token = document.cookie.split(';').find(cookie => cookie.includes(TOKEN)).split('=');
        return token[1] ? token[1] : null;
    }
}

export const getUserFromToken = () => {
    try {
        const myToken = getTokenFromCookies();
        return jwtDecode(myToken);
    } catch (err) {
        return null;
    }
}