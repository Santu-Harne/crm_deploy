import axios from 'axios'

// Create an Axios instance
const api = axios.create({
  baseURL:'http://crm-made-simple-f8a83a9caed2.herokuapp.com',
  timeout:1000
});

// Request interceptor to add the JWT token to the Authorization header
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
