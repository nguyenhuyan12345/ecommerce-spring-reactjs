import axios from 'axios';
import { API_BASE_URL } from '~/constants/api';

class FileService {
    async upLoadFile(file) {
        const data = new FormData();
        data.append('file', file);
        try {
            const res = await axios
                .post(API_BASE_URL + '/public/save-file', data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    return response.data;
                });
            return res;
        } catch (e) {
            console.log(e);
        }
    }

    async upLoadMultiFile(files) {
        const data = new FormData();
        files.forEach((file) => {
            data.append('multiFiles', file);
        });
        try {
            const res = await axios
                .post(API_BASE_URL + '/public/save-multi-file', data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    return response.data;
                });
            return res;
        } catch (e) {
            console.log(e);
        }
    }
}

export default new FileService();
