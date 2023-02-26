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
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('tokenType', response.data.tokenType);
            console.log(localStorage.getItem('tokenType') + ' ' + localStorage.getItem('accessToken'));
            console.log('Đăng nhập thành công');
            return response;
        } catch (error) {
            console.log('Đăng nhập thất bại');
        }
    }

    // async logOut() {
    //     try {
    //         const response = await axios.post(API_BASE_URL + '/logout');
    //         console.log(response);
    //         return response;
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    async logOut() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('tokenType');
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
}

export default new UserService();
