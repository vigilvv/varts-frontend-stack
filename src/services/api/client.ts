// Axios configuration
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true; // Include cookies with requests
axios.defaults.headers.common["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (config) => {
    // Modify request config (e.g., add auth token)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

export default axios;
