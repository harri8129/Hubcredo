// src/api.js
import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// Attach token if present
API.interceptors.request.use((config) => {
    const access = localStorage.getItem("access");
    if (access) {
        config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
});

export default API;
