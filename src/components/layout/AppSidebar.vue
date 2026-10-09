<template>
  <el-icon @click="drawer = true" class="lg:hidden! cursor-pointer hover:opacity-75 transition-opacity duration-150">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="fill-current">
      <path
        d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
    </svg>
  </el-icon>
  <el-drawer v-model="drawer" direction="ltr" size="240px">
    <el-scrollbar>
      <div class="flex items-center px-5 py-4 gap-3 bg-gray-50 border-b">
        <lang-select></lang-select>
      </div>
      <el-menu :default-active="activeIndex" mode="vertical" class="border-none! app-sidebar" :ellipsis="false">
        <el-menu-item index="/" @click="drawer = false; $router.push('/')">
          {{ t('home') }}
        </el-menu-item>
        <el-menu-item index="/course" @click="drawer = false; $router.push('/course')">
          {{ t('course') }}
        </el-menu-item>
        <el-menu-item index="/blog" @click="drawer = false; $router.push('/blog')">
          {{ t('blog') }}
        </el-menu-item>
        <el-sub-menu index="page">
          <template #title>{{ t('page') }}</template>
          <el-menu-item index="/contact" @click="drawer = false; $router.push('/contact')">{{
            t('contact') }}</el-menu-item>
          <el-menu-item index="/faqs" @click="drawer = false; $router.push('/faqs')">{{
            t('faqs')
          }}</el-menu-item>
          <el-menu-item index="/error" @click="drawer = false; $router.push('/error')">{{
            t('error')
          }}</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/aboutteachers" @click="drawer = false; $router.push('/aboutteachers')">
          {{ t('about') }}
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </el-drawer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import LangSelect from '../ui/LangSelect.vue';
import { useSettingsStore } from '@/stores/settings'

const route = useRoute()
const settingsStore = useSettingsStore()
const drawer = ref(false)

const activeIndex = computed(() => route.path)
const t = (key) => settingsStore.t(key)
</script>
