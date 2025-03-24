import axios from "axios";

const axiosInstance = axios.create({
	baseURL: '',  // URL base para todas as chamadas alteração para nossa
});

export default axiosInstance