import axios from "axios";

import { getActivePinia } from "pinia";
import { url } from "@/utils/env";

const apiClient = axios.create({
  baseURL: url,
})

// Request interceptor
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => Promise.reject(error));

// Response interceptor
apiClient.interceptors.response.use(
  response => response,
  async error => {
    return Promise.reject(error);
  }
);

export default apiClient;