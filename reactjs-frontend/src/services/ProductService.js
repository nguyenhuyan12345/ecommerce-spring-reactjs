import axios from 'axios';
import { data } from 'jquery';
import { API_BASE_URL } from '~/constants/api';

class ProductService {
    async upLoadProduct(values, accessToken, tokenType) {
        const data = new FormData();
        console.log(values);
        const { category, title, price, discount, description, fileMainImage, brand, multiFileImage, poductColorList } =
            values;

        const newProductColorList = poductColorList.map((productColor) => {
            const { colorName, inventory } = productColor;
            return {
                colorName,
                inventory
            };
        });

        const imageProductColors = poductColorList.map((productColor) => {
            const { file } = productColor;
            return file;
        });

        const newValues = {
            category,
            title,
            price,
            discount,
            description,
            brand,
            newProductColorList
        };

        const json = JSON.stringify(newValues);
        data.append('json', json);
        data.append('fileMainImage', fileMainImage);

        multiFileImage.forEach((imgFlie) => {
            data.append('multiFileImage', imgFlie);
        });

        imageProductColors.forEach((imgFlie) => {
            data.append('imageProductColors', imgFlie);
        });

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

    async getProduct() {
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

    // Home Page Call API
    async getTopNewProducts() {
        try {
            const res = await axios.get(API_BASE_URL + '/products/list/top-new', {
                params: {
                    page: 0,
                    perPage: 5
                }
            });
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    async getTopOrderProducts() {
        try {
            const res = await axios.get(API_BASE_URL + '/products/list/top-order', {
                params: {
                    page: 0,
                    perPage: 5
                }
            });
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    async getTopCoatProducts() {
        try {
            const res = await axios.get(API_BASE_URL + '/products/list/top-coat', {
                params: {
                    page: 0,
                    perPage: 5
                }
            });
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    // New Product Page Call API
    async getNewProducts() {
        try {
            const res = await axios.get(API_BASE_URL + '/products/list/new-products', {
                params: {
                    page: 0,
                    perPage: 20
                }
            });
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    // Product Page Call API
    async getProducts() {
        try {
            const res = await axios.get(API_BASE_URL + '/products/list/products', {
                params: {
                    page: 0,
                    perPage: 20
                }
            });
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    // Top Selling Page Call API
    async getTopSellingProducts() {
        try {
            const res = await axios.get(API_BASE_URL + '/products/list/top-selling', {
                params: {
                    page: 0,
                    perPage: 20
                }
            });
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }
}

export default new ProductService();
