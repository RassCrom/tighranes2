import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useFetchData = (url, params = {}, options = {}) => 
    useQuery({
        queryKey: [url, params],
        queryFn: async () => {
            try {
                const { data } = await axios.get(url, { params });
                return data;
            } catch (error) {
                console.error('Ошибка запроса:', error);
                throw error;
            }
        },
        ...options,
    });
