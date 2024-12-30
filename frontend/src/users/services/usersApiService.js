import axios from "axios";

const API_URL = "http://localhost:3000/users";

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        const data = response.data
        return data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data);
        }
        else throw new Error(error.message);
    }
}

export const signup = async (normalizedCredentials) => {
    try {
        const response = await axios.post(`${API_URL}/`, normalizedCredentials);
        const data = response.data;
        return data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data);
        }
        else throw new Error(error.message);
    }
}

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/`);
        const data = response.data;
        return data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data);
        }
        else throw new Error(error.message);
    }
};