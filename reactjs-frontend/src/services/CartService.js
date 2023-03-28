import axios from 'axios';
import { API_BASE_URL } from '~/constants/api';

class CartService {
    async addCart(values, accessToken, tokenType) {
        try {
            const res = await axios.post(API_BASE_URL + '/cart/add', JSON.stringify(values), {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: tokenType + ' ' + accessToken
                }
            });
            return res;
        } catch (e) {
            console.log(e);
        }
    }

    async getCart(accessToken, tokenType) {
        try {
            const res = await axios.get(API_BASE_URL + '/cart/get', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: tokenType + ' ' + accessToken
                }
            });
            console.log(res);
            return res;
        } catch (e) {
            console.log(e);
        }
    }
}

export default new CartService();
