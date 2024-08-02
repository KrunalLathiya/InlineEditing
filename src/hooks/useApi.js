// src/hooks/useApi.js

import { useState, useEffect } from 'react';
import { fetchUsers, updateUser } from '../services/api';

export const useApi = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const users = await fetchUsers();
            setData(users);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const updateData = async (id, updatedData) => {
        try {
            await updateUser(id, updatedData);
            setData(prevData => prevData.map(item => item.id === id ? { ...item, ...updatedData } : item));
        } catch (err) {
            setError(err);
        }
    };

    return { data, loading, error, updateData };
};