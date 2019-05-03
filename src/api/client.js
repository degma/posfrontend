import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:3001/api/v1/',
    timeout: 1000
});

module.exports = axiosInstance;