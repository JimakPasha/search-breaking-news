import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://newsapi.org/v2/',
	timeout: 5000,
});

export default axiosInstance;
