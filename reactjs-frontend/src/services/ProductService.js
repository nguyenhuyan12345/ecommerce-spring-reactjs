import axios from 'axios';
import { API_BASE_URL } from '~/constants/api';

class ProductService {
    async upLoadProduct(values, accessToken, tokenType) {
        try {
            const responseData = await axios
                .post(API_BASE_URL + '/products/add', JSON.stringify(values), {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: tokenType + ' ' + accessToken
                    }
                })
                .then((response) => {
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

    async getProduct(data) {
        try {
            const res = await axios.get(API_BASE_URL + `/products/list/page`, {
                params: {
                    page: data.page,
                    perPage: data.perPage
                }
            });
            return res;
        } catch (e) {
            console.log(e);
        }
    }

    // Home Page Call API
    async getTopNewProducts(data) {
        try {
            const res = await axios.get(API_BASE_URL + '/products/list/top-new', {
                params: {
                    page: data.page,
                    perPage: data.perPage
                }
            });
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    async getTopOrderProducts(data) {
        try {
            const res = await axios.get(API_BASE_URL + '/products/list/top-order', {
                params: {
                    page: data.page,
                    perPage: data.perPage
                }
            });
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    async getTopCoatProducts(data) {
        try {
            const res = await axios.get(API_BASE_URL + '/products/list/top-coat', {
                params: {
                    page: data.page,
                    perPage: data.perPage
                }
            });
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    // New Product Page Call API
    async getNewProducts(data) {
        try {
            const res = await axios.get(API_BASE_URL + '/products/list/top-new', {
                params: {
                    page: data.page,
                    perPage: data.perPage
                }
            });
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    // Product Page Call API
    async getProducts(data) {
        try {
            const res = await axios.get(API_BASE_URL + '/products/list', {
                params: {
                    page: data.page,
                    perPage: data.perPage
                }
            });
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    // Top Selling Page Call API
    async getTopSellingProducts(data) {
        try {
            const res = await axios.get(API_BASE_URL + '/products/list/top-order', {
                params: {
                    page: data.page,
                    perPage: data.perPage
                }
            });
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    // Top Sale Page Call API
    async getTopSaleProduct(data) {
        try {
            const res = await axios.get(API_BASE_URL + '/products/list/top-sale', {
                params: {
                    page: data.page,
                    perPage: data.perPage
                }
            });
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }
}

export default new ProductService();
