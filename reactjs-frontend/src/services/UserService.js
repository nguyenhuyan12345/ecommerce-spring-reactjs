import axios from 'axios';
import { API_BASE_URL } from '~/constants/api';

class UserService {
    getUser() {
        return axios.get(API_BASE_URL + '/home');
    }

    async createUser(user) {
        // console.log('payload', JSON.stringify(user));
        try {
            const response = await axios.post(API_BASE_URL + '/register', JSON.stringify(user), {
                headers: {
                    'Content-Type': 'application/json'
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

    async login(values) {
        try {
            const res = await axios.post(API_BASE_URL + '/login', JSON.stringify(values), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return res;
        } catch (error) {
            console.log('Đăng nhập thất bại');
        }
    }

    getUserById(userId) {
        return axios.get(API_BASE_URL + '/get/' + userId);
    }

    async getUserDetail(accessToken, tokenType) {
        try {
            const res = await axios.get(API_BASE_URL + '/user/detail', {
                headers: {
                    Authorization: tokenType + ' ' + accessToken
                }
            });
            return res;
        } catch (e) {
            console.log(e);
        }
    }

    async getUserDetail(accessToken, tokenType) {
        try {
            const res = await axios.get(API_BASE_URL + '/user/detail', {
                headers: {
                    Authorization: tokenType + ' ' + accessToken
                }
            });
            return res;
        } catch (e) {
            console.log(e);
        }
    }

    async registrationConfirm(token) {
        try {
            const res = await axios.get(API_BASE_URL + '/registrationConfirm', {
                params: {
                    token: token
                }
            });
            return res;
        } catch (e) {
            console.log(e);
        }
    }
}

export default new UserService();
