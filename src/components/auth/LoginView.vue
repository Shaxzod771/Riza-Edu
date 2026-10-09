<template>
  <div class="form-container">
    <h1 class="text-4xl font-medium mb-8 text-gray-800">Login</h1>

    <el-form ref="loginFormRef" @submit.prevent="handleSignIn" label-position="top" size="large">
      <el-form-item label="Email or Username" class="mb-3">
        <el-input v-model="loginData.name" placeholder="Enter your email or username" required clearable />
      </el-form-item>

      <el-form-item label="Password" class="mb-2">
        <el-input v-model="loginData.password" placeholder="Enter your password" clearable type="password" required show-password/>
      </el-form-item>

      <div class="flex items-center justify-between py-2">
        <el-checkbox class="text-xs text-gray-600" v-model="loginData.rememberMe">Keep me logged in</el-checkbox>
        <el-link @click="$router.push('updatepssword')" type="primary" class="text-xs">
          Forgot password?
        </el-link>
      </div>

      <el-form-item class="mt-4">
        <el-button :loading="loading" type="primary" native-type="submit" class="w-full">
          LOGIN
        </el-button>
      </el-form-item>

      <div class="mt-10">
        <el-divider>OR LOGIN USING </el-divider>
        <div class="grid grid-cols-3 gap-2">
          <el-button>
            <i class="fa-brands fa-facebook text-blue-500 text-lg"></i>
          </el-button>
          <el-button>
            <i class="fa-brands fa-google text-red-400 text-lg"></i>
          </el-button>
          <el-button>
            <i class="fa-brands fa-microsoft text-blue-500 text-lg"></i>
          </el-button>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { useAuthStore } from "@/stores/auth/useAuthStore";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { loading } = storeToRefs(authStore);
const router = useRouter();

const loginData = reactive({
  name: "",
  password: "",
  rememberMe: false,
});

const handleSignIn = async () => {
  try {
    await authStore.signIn({ ...loginData });
    ElMessage.success("Login successful!");
  } catch (error) {
    ElMessage.error("Login failed!");
  }
};
</script>

<style scoped>
.form-container {
  animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
