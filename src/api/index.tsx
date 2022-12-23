import axios from 'axios';
import apiConstants from '../constants/apiConstants';
import products from './products.api';

export const getAxiosDataInstance = () => {
    const axiosInstance = axios.create({
        baseURL: apiConstants.dataUrl,
    });

    return axiosInstance;
};

export const axiosDataInstance = getAxiosDataInstance();

export default {
    products,
};
