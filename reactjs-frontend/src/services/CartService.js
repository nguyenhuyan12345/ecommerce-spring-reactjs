import axios from 'axios';
import { API_BASE_URL } from '~/constants/api';

class CartService {
    async addCart(values, accessToken, tokenType) {
        try {
            const res = await axios.post(API_BASE_URL, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: tokenType + ' ' + accessToken
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
}
