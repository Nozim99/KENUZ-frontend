import { cache } from 'react';
import axios from 'axios';
import { BASE_URL } from '@/utils/constants';

export const cacheFetch = cache(async (path: string) => {
    const res_data = await axios.get(BASE_URL + path);
    return res_data.data;
});