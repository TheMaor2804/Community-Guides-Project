import axios from 'axios';
const API_URL = 'http://localhost:3000/guides';

export const getGuides = async () => {
    try {
        const response = await axios.get(API_URL);
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getGuide = async (guideId) => {
    try {
        const response = await axios.get(`${API_URL}/${guideId}`);
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getMyGuides = async () => {
    try {
        const response = await axios.get(`${API_URL}/myGuides`);
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const createGuide = async (guide) => {
    try {
        const { data } = await axios.post(API_URL, guide);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const updateGuide = async (guideId, guide) => {
    try {
        const { data } = await axios.put(`${API_URL}/${guideId}`, guide);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteGuide = async (guideId) => {
    try {
        const { data } = await axios.delete(`${API_URL}/${guideId}`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const upvoteGuide = async (guideId) => {
    try {
        const { data } = await axios.patch(`${API_URL}/${guideId}/upvote`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const downvoteGuide = async (guideId) => {
    try {
        const { data } = await axios.patch(`${API_URL}/${guideId}/downvote`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const approveGuide = async (guideId) => {
    try {
        const { data } = await axios.patch(`${API_URL}/${guideId}/approve`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const featureGuide = async (guideId) => {
    try {
        const { data } = await axios.patch(`${API_URL}/${guideId}/feature`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
