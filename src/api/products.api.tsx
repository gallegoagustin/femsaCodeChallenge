import { axiosDataInstance } from '.';

export default {
    getProductsList: async () => {
        try {
            const response = await axiosDataInstance.get('/products');
            if (response) {
                return response.data;
            }
        } catch (err) {
            console.log('There was an error getting the products list', err);
            return null;
        }
    },
};
