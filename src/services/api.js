// src/services/api.js

import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const fetchUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
};

export const updateUser = async (id, userData) => {
    const response = await axios.put(`${BASE_URL}/users/${id}`, userData);
    return response.data;
};