import { defineStore } from "pinia";
import { api } from "./api";
import { ref } from "vue";

export const useApiStore = defineStore('apiStore', () => {

  const get = async (url, params) => {
    try {
      const res = await api.get(url, params);
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const post = async (url, data) => {
    try {
      const res = await api.post(url, data);
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const put = async (url, data) => {
    try {
      const res = await api.put(url, data);
      console.log(res);

      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const del = async (url) => {
    try {
      const res = await api.del(url);
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { get, post, put, del };
});