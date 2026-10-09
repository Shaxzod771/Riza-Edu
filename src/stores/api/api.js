import apiClient from "./apiClient";

export const api = {
  get: async (url, params) => apiClient.get(url, { params }),
  post: async (url, data) => apiClient.post(url, data),
  put: async (url, data) => apiClient.put(url, data),
  del: async (url) => apiClient.delete(url),
};