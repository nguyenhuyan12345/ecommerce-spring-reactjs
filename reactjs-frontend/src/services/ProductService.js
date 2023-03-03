import axios from 'axios';
import { API_BASE_URL } from '~/constants/api';

class ProductService {
    async upLoadProduct(values, accessToken, tokenType) {
        const data = new FormData();

        for (var key in values) {
            if (Array.isArray(values[key])) {
                switch (key) {
                    case 'multiFileImage':
                        values[key].forEach((imgFlie) => {
                            data.append('multiFileImage', imgFlie);
                        });
                }
            } else {
                data.append(key, values[key]);
            }
        }

        try {
            const responseData = await axios
                .post(API_BASE_URL + '/products/add', data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: tokenType + ' ' + accessToken
                    }
                })
                .then((response) => {
                    console.log(response);
                    return response.data;
                });
            return responseData;
        } catch (error) {
            console.log('error', error);
        }
    }

    async getAllProduct() {
        try {
            const productsResponse = await axios.get(API_BASE_URL + '/products/list');
            return productsResponse;
        } catch (e) {
            console.log(e); // Log exception
        }
    }

    async getProduct(pagination) {
        try {
            const res = await axios.get(API_BASE_URL + `/products/list/page`, {
                params: {
                    page: 0,
                    perPage: 10
                }
            });
            return res;
        } catch (e) {
            console.log(e);
        }
    }

    async getNewProducts() {
        try {
            const res = await axios.get(API_BASE_URL + '/products/list/new-products', {
                params: {
                    page: 0,
                    perPage: 12
                }
            });
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    async getTopSellingProducts() {
        try {
            const res = await axios.get(API_BASE_URL + '/products/list/top-selling', {
                params: {
                    page: 0,
                    perPage: 12
                }
            });
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }
}

export default new ProductService();
