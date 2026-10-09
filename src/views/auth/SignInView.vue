<template lang="html">
  <div class="login w-full min-h-screen">
    <div class="grid grid-cols-1 md:grid-cols-3 min-h-screen">
      <!-- left image -->
      <div class="image-section bg-blue-50 flex items-center justify-center p-8">
        <div class="relative w-full max-w-md">
          <img src="/login/left-image.png" alt="Login image" class="w-full h-auto" />
        </div>
      </div>
      <!-- right content -->
      <div class="flex flex-col justify-center items-center p-8 bg-white md:col-span-2 relative">
        <!-- Back to Home Button -->
        <el-button type="primary" @click="$router.push('/')" class="absolute! top-5 right-5">
          <el-icon :size="18">
            <ArrowLeft />
          </el-icon>
          <span class="hidden sm:inline ml-2">Bosh sahifaga qaytish</span>
        </el-button>

        <div class="w-full max-w-md mx-auto">
          <!-- Toggle Buttons -->
          <div class="flex items-center justify-center gap-4 mb-8 bg-gray-100 p-1 rounded-lg">
            <button @click="isLogin = true"
              :class="isLogin ? 'bg-white text-sky-500 shadow-sm' : 'text-gray-500 hover:text-gray-700'"
              class="flex-1 py-2 px-4 rounded-md transition-all duration-300 font-medium">
              Sign In
            </button>
            <button @click="isLogin = false"
              :class="!isLogin ? 'bg-white text-sky-500 shadow-sm' : 'text-gray-500 hover:text-gray-700'"
              class="flex-1 py-2 px-4 rounded-md transition-all duration-300 font-medium">
              Register
            </button>
          </div>

          <!-- Component Render -->
          <Transition name="fade" mode="out-in">
            <component :is="isLogin ? Login : Register" />
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ArrowLeft } from "@element-plus/icons-vue";
import Login from "@/components/auth/LoginView.vue";
import Register from "@/components/auth/RegisterView.vue";

const isLogin = ref(true);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1024px) {
  .image-section {
    display: none;
  }
}
</style>
