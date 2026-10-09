<template>
  <div class="sticky top-0 z-50 bg-white border-b transition-colors duration-300">
    <div class="container mx-auto flex justify-between gap-4 items-center h-15 px-4">
      <app-sidebar></app-sidebar>
      <router-link to="/" class="mr-auto lg:mr-0">
        <img src="/rizalogo.png" class="w-32 lg:w-41.75" alt="Brand Logo" />
      </router-link>

      <el-menu :default-active="activeIndex" mode="horizontal"
        class="border-none! app-menu lg:flex! hidden! bg-transparent!" :ellipsis="false">
        <el-menu-item index="/" @click="$router.push('/')">
          {{ t('home') }}
        </el-menu-item>
        <el-menu-item index="/course" @click="$router.push('/course')">{{ t('course') }}</el-menu-item>
        <el-menu-item index="/blog" @click="$router.push('/blog')">{{ t('blog') }}</el-menu-item>
        <el-sub-menu index="page">
          <template #title>{{ t('page') }}</template>
          <el-menu-item index="/contact" @click="$router.push('/contact')">{{ t('contact') }}</el-menu-item>
          <el-menu-item index="/faqs" @click="$router.push('/faqs')">{{ t('faqs') }}</el-menu-item>
          <el-menu-item index="/error" @click="$router.push('/error')">{{ t('error') }}</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/aboutteachers" @click="$router.push('/aboutteachers')">{{ t('about') }}</el-menu-item>
      </el-menu>

      <div class="flex items-center gap-3 sm:gap-5">

        <lang-select></lang-select>

        <!-- Search Toggle -->
        <div @click="showSearch = !showSearch"
          class="cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          :class="{ 'text-orange-500': showSearch }">
          <el-icon :size="20">
            <Search />
          </el-icon>
        </div>

        <div class="flex items-center gap-4 border-l pl-5">
          <!-- LOGIN -->
          <router-link v-if="!isAuth" to="/auth/signin">
            <button
              class="px-6 py-1 bg-orange-500 text-white rounded-[20px] cursor-pointer hover:bg-orange-600 transition-colors whitespace-nowrap shadow-sm active:scale-95 transition-transform">
              {{ t('signin') }}
            </button>
          </router-link>

          <!-- USER -->
          <div v-else class="flex items-center gap-3">
            <el-dropdown trigger="click">
              <span
                class="el-dropdown-link cursor-pointer flex items-center gap-1 text-gray-700 hover:text-orange-500 transition-colors font-medium">
                <el-icon :size="20">
                  <UserFilled />
                </el-icon>
                <span class="hidden sm:inline">{{ user?.name || user?.username || 'Profile' }}</span>
                <el-icon class="el-icon--right">
                  <ArrowDown />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="$router.push('/profile')">
                    <el-icon>
                      <User />
                    </el-icon> {{ t('profile') }}
                  </el-dropdown-item>
                  <el-dropdown-item divided @click="handleLogout" class="text-red-500!">
                    <el-icon>
                      <SwitchButton />
                    </el-icon> {{ t('exit') }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>

    <!-- Dropdown Search -->
    <Transition name="search-slide">
      <div v-if="showSearch" class="absolute top-15 left-0 w-full bg-white border-b shadow-lg px-4 py-6 z-40">
        <div class="container mx-auto relative">
          <el-input v-model="searchQuery" :placeholder="t('searchPlaceholder')" class="search-input"
            @keyup.enter="handleSearch" ref="searchInputRef">
            <template #prefix>
              <el-icon>
                <Search />
              </el-icon>
            </template>
            <template #append>
              <el-button @click="handleSearch" type="primary">{{ t('search') }}</el-button>
            </template>
          </el-input>
          <div @click="showSearch = false"
            class="absolute -right-2 -top-2 cursor-pointer text-gray-400 hover:text-gray-600">
            <el-icon :size="20">
              <Close />
            </el-icon>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { UserFilled, User, SwitchButton, Search, ArrowDown, Close } from '@element-plus/icons-vue'

import AppSidebar from './AppSidebar.vue'
import LangSelect from '../ui/LangSelect.vue'
import { useAuthStore } from '@/stores/auth/useAuthStore'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const settingsStore = useSettingsStore();

const { user, isAuth } = storeToRefs(authStore);
const showSearch = ref(false);
const searchQuery = ref('');
const searchInputRef = ref(null);

const t = (key) => settingsStore.t(key);

onMounted(async () => {
  await authStore.verify();
})

const handleLogout = () => {
  authStore.logout();
}

// Active Menu Item based on Route
const activeIndex = computed(() => route.path);

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/course', query: { q: searchQuery.value } });
    showSearch.value = false;
    searchQuery.value = '';
  }
}

// Focus input when shown
watch(showSearch, (val) => {
  if (val) {
    setTimeout(() => {
      // Small timeout to wait for transition
      const input = document.querySelector('.search-input input');
      if (input) input.focus();
    }, 300);
  }
})
</script>

<style scoped>
.app-menu :deep(.el-menu-item) {
  height: 60px;
  line-height: 60px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.app-menu :deep(.el-menu-item.is-active) {
  position: relative;
  color: #E6A23C !important;
}

.app-menu :deep(.el-menu-item.is-active::after) {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #E6A23C;
}

.el-dropdown-link:focus {
  outline: none;
}

/* Transitions */
.search-slide-enter-active,
.search-slide-leave-active {
  transition: all 0.3s ease-out;
}

.search-slide-enter-from,
.search-slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
