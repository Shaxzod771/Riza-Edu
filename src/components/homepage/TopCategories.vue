<template>
  <section class="container px-5 py-8 mx-auto transition-colors duration-300">
    <div class="categories-header flex justify-between items-center">
      <div>
        <h2 class="font-bold text-3xl mb-2 text-gray-900">Top Categories</h2>
        <p class="text-gray-600">Explore our popular categories</p>
      </div>

      <router-link to="/allcategories" aria-label="View all categories">
        <el-button type="warning" round size="large">{{ settings.t('exploreBtn') }}</el-button>
      </router-link>
    </div>

    <div class="categories-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-8">
      <router-link v-for="(cat, idx) in categories" :key="idx" :to="cat.path"
        class="group block rounded-xl border border-orange-300 min-h-56 bg-white py-10 px-10 text-center transition-all duration-300 transform hover:-translate-y-3 hover:shadow-xl hover:text-orange-500!"
        :aria-label="cat.title">
        <el-icon class="mb-4 text-orange-500!" :size="40">
          <component :is="cat.icon" />
        </el-icon>

        <h3 class="mb-1 font-semibold text-lg text-gray-900 group-hover:text-orange-500 transition-colors">
          {{ cat.title }}</h3>
        <p class="text-sm text-gray-500">{{ cat.count }} Courses</p>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { ElButton, ElIcon } from 'element-plus'
import { useSettingsStore } from '@/stores/settings'
const settings = useSettingsStore()
import {
  EditPen,
  ElementPlus,
  Share,
  Film,
  Camera,
  Money,
  Tickets,
  OfficeBuilding,
  Cpu,
  Comment
} from '@element-plus/icons-vue'

const categories = ref([
  {
    title: 'Art & Design',
    path: '/art-design',
    count: 20,
    icon: EditPen
  },
  {
    title: 'Development',
    path: '/development',
    count: 28,
    icon: ElementPlus
  },
  {
    title: 'Communication',
    path: '/communication',
    count: 12,
    icon: Share
  },
  {
    title: 'Videography',
    path: '/videography',
    count: 38,
    icon: Film
  },
  {
    title: 'Photography',
    path: '/photography',
    count: 35,
    icon: Camera
  },
  {
    title: 'Marketing',
    path: '/marketing',
    count: 24,
    icon: Money
  },
  {
    title: 'Content Writing',
    path: '/content-writing',
    count: 16,
    icon: Tickets
  },
  {
    title: 'Finance',
    path: '/finance',
    count: 34,
    icon: OfficeBuilding
  },
  {
    title: 'Science',
    path: '/science',
    count: 30,
    icon: Cpu
  },
  {
    title: 'Networking',
    path: '/networking',
    count: 40,
    icon: Comment
  }
])
</script>
