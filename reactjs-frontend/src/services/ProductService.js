import axios from 'axios';
import { API_BASE_URL } from '~/constants/api';

class ProductService {
    async upLoadProduct(values, saveState, setSaveState) {
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
                        'Content-Type': 'multipart/form-data'
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
}

export default new ProductService();
