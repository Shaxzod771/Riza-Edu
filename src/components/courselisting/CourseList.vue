<template>
  <div>
    <!-- Top Bar -->
    <div class="flex flex-col md:flex-row justify-between items-center mb-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-4 md:mb-0">All Courses</h2>

      <div class="flex items-center gap-4 w-full md:w-auto">
        <div class="relative w-full md:w-64">
          <input v-model="searchQuery" type="text" placeholder="Search"
            class="w-full pl-4 pr-10 py-2 border-b-2 border-gray-400 focus:outline-none focus:border-orange-500 bg-transparent" />
          <el-icon class="absolute right-3 top-3 text-gray-400">
            <Search />
          </el-icon>
        </div>
        <div class="text-sm text-gray-500 whitespace-nowrap hidden sm:block">
          {{ filteredCourses.length }} {{ settings.t('results') }}
        </div>

        <div class="flex gap-2">
          <button @click="viewType = 'grid'" :class="viewType === 'grid' ? 'text-orange-500' : 'text-gray-400'"
            class="p-2 cursor-pointer">
            <i class="fa fa-th-large"></i>
          </button>
          <button @click="viewType = 'list'" :class="viewType === 'list' ? 'text-orange-500' : 'text-gray-400'"
            class="p-2 cursor-pointer">
            <i class="fa fa-list"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Course List -->
    <div :class="viewType === 'grid'
      ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
      : 'flex flex-col gap-4'
      ">
      <CourseCard v-for="(course, index) in courses" :key="index" v-bind="course" :viewType="viewType" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Search } from '@element-plus/icons-vue'
import { useSettingsStore } from '@/stores/settings'
import CourseCard from "./CourseCard.vue";
import allCourses from "@/stores/darslar.js/courses";

const settings = useSettingsStore();
const route = useRoute();
const viewType = ref("grid");
const searchQuery = ref(route.query.q || "");

const filteredCourses = computed(() => {
  if (!searchQuery.value) return allCourses;
  const q = searchQuery.value.toLowerCase();
  return allCourses.filter(c =>
    c.title.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.teacher.toLowerCase().includes(q)
  );
});

// Update searchQuery if URL changes (from header search)
watch(() => route.query.q, (newQ) => {
  searchQuery.value = newQ || "";
});

// Keep local search in sync with URL optionally or just use local
const courses = computed(() => filteredCourses.value.slice(0, 12)); // Display more now that it's dynamic
</script>
