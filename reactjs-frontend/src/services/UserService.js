import axios from 'axios';
import { API_BASE_URL } from '~/constants/api';

class UserService {
    getUser() {
        return axios.get(API_BASE_URL + '/home');
    }

    async createUser(user) {
        // console.log('payload', JSON.stringify(user));
        try {
            const response = await axios.post(API_BASE_URL + '/register', user, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log('Thêm tài khoản không thành công' + error);
        }
    }

    async deleteUser(userId) {
        try {
            const response = await axios.delete(API_BASE_URL + '/delete/' + userId);
            // console.log(response.status);
            // console.log(response);
            return response;
        } catch (error) {
            console.log('Xóa tài khoản không thành công' + error);
        }
    }

    async login(acc) {
        try {
            const response = await axios.post(API_BASE_URL + '/login', JSON.stringify(acc), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            localStorage.setItem('jwt', response.data.accessToken);
            localStorage.setItem('accName', acc.username);
            console.log(localStorage.getItem('jwt'));
            return response;
        } catch (error) {
            console.log('Đăng nhập thất bại');
        }
    }

    getUserById(userId) {
        return axios.get(API_BASE_URL + '/get/' + userId);
    }
}

export default new UserService();
