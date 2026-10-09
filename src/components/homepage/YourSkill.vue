<template>
  <div class="container mx-auto px-5 py-22.5">
    <div class="grid lg:grid-cols-2 grid-cols-1 xl:gap-40 gap-15 items-center">
      <div class="skill-image">
        <img src="/yourskill/image.png" alt="skill-image" class="w-full order-1" />
      </div>

      <div class="skill-content">
        <h1 class="font-bold text-3xl lg:text-4xl leading-tight mb-4">
          Grow Your Skill With LearnPress LMS
        </h1>
        <p class="mt-6 mb-6 text-gray-500">
          We denounce with righteous indignation and dislike men who are so beguiled and demoralized that
          cannot trouble.
        </p>

        <div v-for="(item, idx) in features" :key="idx" class="check flex items-center mb-3">
          <el-icon class="text-yellow-600">
            <Check />
          </el-icon>
          <h5 class="ml-2 text-sm font-medium">{{ item }}</h5>
        </div>

        <router-link to="/courses">
          <el-button type="warning" round size="large" class="mt-6">
            Explore Courses
          </el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Check } from '@element-plus/icons-vue'

const features = ref([
  'Certification',
  'Expert Instructors',
  'Flexible Schedule',
  'Lifetime Access'
])
</script>
