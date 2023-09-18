import request from '@/utils/request';

const BASE_API = '/api/test';

export default {
    time() {
        return request({
            url: BASE_API + '/time',
            method: 'get',
        });
    },
};