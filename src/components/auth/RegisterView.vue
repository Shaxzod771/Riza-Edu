<template>
  <div class="form-container">
    <h1 class="text-4xl font-medium mb-8 text-gray-800">Sign Up</h1>
    <el-form @submit.prevent="handleRegister" label-position="top" size="large">
      <el-form-item label="Username" class="mb-2">
        <el-input v-model="registerForm.username" placeholder="Enter your username" clearable type="text" required />
      </el-form-item>

      <el-form-item label="Email" class="mb-2">
        <el-input v-model="registerForm.email" placeholder="Enter your email" clearable type="email" required />
      </el-form-item>

      <el-form-item label="Password" class="mb-2">
        <el-input v-model="registerForm.password" placeholder="Password" clearable type="password" required show-password />
      </el-form-item>

      <div class="flex items-start py-2">
        <el-checkbox class="text-xs text-gray-600 cursor-pointer" required  >
          I agree to the
          <el-link @click="$router.push('terms')" type="primary">Terms & Conditions</el-link>
        </el-checkbox>
      </div>

      <el-form-item class="mt-4">
        <el-button :loading="loading" type="primary" native-type="submit" class="w-full">
          SIGN UP
        </el-button>
      </el-form-item>

      <div class="mt-10">
        <el-divider>OR REGISTER USING </el-divider>
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
import { reactive } from "vue";
import { ElMessage } from "element-plus";
import { useAuthStore } from "@/stores/auth/useAuthStore";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { loading } = storeToRefs(authStore);

const registerForm = reactive({
  username: "",
  email: "",
  password: "",
});

const handleRegister = async () => {
  if (registerForm.password == "") {
    ElMessage.error("Parol kiriting!");
    return;
  }

  try {
    await authStore.signUp({ ...registerForm });
    ElMessage.success("Saytga muvaffaqiyatli ro'yxatdan o'tdingiz!");
  } catch (error) {
    ElMessage.error("Ro'yxatdan o'tish amalga oshmadi!");
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
