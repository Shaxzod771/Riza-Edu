import { defineStore } from "pinia";
import { ref } from "vue";
import router from "@/router";

export const useAuthStore = defineStore('authStore', () => {
  const loading = ref(false);
  const user = ref(null);
  const isAuth = ref(false);

  const signIn = async (data) => {
    loading.value = true;
    try {
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("currentUser", data.name || data.username);

      user.value = { ...data };
      isAuth.value = true;

      setTimeout(() => {
        router.replace("/")
      }, 1500);

    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        loading.value = false
      }, 1200);
    }
  }

  const verify = async () => {
    try {
      const userData = localStorage.getItem("user");
      const isAuthenticated = localStorage.getItem("isAuth") === "true";

      if (userData && isAuthenticated) {
        user.value = JSON.parse(userData);
        isAuth.value = true;
      } else {
        user.value = null;
        isAuth.value = false;
      }
    } catch (error) {
      console.error("Verification failed:", error);
      logout();
    }
  }

  const logout = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    user.value = null;
    isAuth.value = false;
    router.replace("/auth/signin");
  }

  const signUp = async (data) => {
    loading.value = true;
    try {
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("currentUser", data.username);

      user.value = { ...data };
      isAuth.value = true;

      setTimeout(() => {
        router.replace("/")
      }, 1500);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        loading.value = false
      }, 1200);
    }
  }

  return { user, isAuth, loading, signIn, verify, signUp, logout }
})