import axios from "axios";

const API_URL = 'http://localhost:3000/categories';

export const getCategories = async () => {
    try {
        const response = await axios.get(API_URL);
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getCategory = async (categoryId) => {
    try {
        const response = await axios.get(`${API_URL}/${categoryId}`);
        const data = response.data;
        return data;
    }
    catch (error) {
        throw new Error(error.message);
    }
};

export const createCategory = async (category) => {
    try {
        const { data } = await axios.post(API_URL, { name: category });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const updateCategory = async (categoryId, category) => {
    try {
        const { data } = await axios.put(`${API_URL}/${categoryId}`, category);
        return data;
    }
    catch (error) {
        throw new Error(error.message);
    }
};

export const deleteCategory = async (categoryId) => {
    try {
        const { data } = await axios.delete(`${API_URL}/${categoryId}`);
        return data;
    }
    catch (error) {
        throw new Error(error.message);
    }
};