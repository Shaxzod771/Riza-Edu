<template>
  <div class="w-full bg-white">
    <!-- Categories -->
    <div class="mb-8">
      <h3 class="text-lg font-bold text-gray-900 mb-4 border-l-4 border-orange-500 pl-3">Course Category</h3>
      <div class="flex flex-col gap-2">
        <label v-for="(count, name) in categories" :key="name" class="flex items-center justify-between group cursor-pointer text-gray-600 hover:text-orange-500">
          <div class="flex items-center gap-2">
            <input type="checkbox" class="rounded border-gray-300 text-orange-500 focus:ring-orange-500">
            <span>{{ name }}</span>
          </div>
          <span class="text-sm text-gray-400 group-hover:text-orange-500">{{ count }}</span>
        </label>
      </div>
    </div>

    <!-- Instructors -->
    <div class="mb-8">
      <h3 class="text-lg font-bold text-gray-900 mb-4 border-l-4 border-orange-500 pl-3">Instructors</h3>
      <div class="flex flex-col gap-2">
        <label v-for="(count, name) in instructors" :key="name" class="flex items-center justify-between group cursor-pointer text-gray-600 hover:text-orange-500">
          <div class="flex items-center gap-2">
            <input type="checkbox" class="rounded border-gray-300 text-orange-500 focus:ring-orange-500">
            <span>{{ name }}</span>
          </div>
          <span class="text-sm text-gray-400 group-hover:text-orange-500">{{ count }}</span>
        </label>
      </div>
    </div>

    <!-- Price -->
    <div class="mb-8">
      <h3 class="text-lg font-bold text-gray-900 mb-4 border-l-4 border-orange-500 pl-3">Price</h3>
      <div class="flex flex-col gap-2">
        <label v-for="(count, name) in prices" :key="name" class="flex items-center justify-between group cursor-pointer text-gray-600 hover:text-orange-500">
          <div class="flex items-center gap-2">
            <input type="checkbox" class="rounded border-gray-300 text-orange-500 focus:ring-orange-500">
            <span>{{ name }}</span>
          </div>
          <span class="text-sm text-gray-400 group-hover:text-orange-500">{{ count }}</span>
        </label>
      </div>
    </div>

    <!-- Review -->
    <div class="mb-8">
      <h3 class="text-lg font-bold text-gray-900 mb-4 border-l-4 border-orange-500 pl-3">Review</h3>
      <div class="flex flex-col gap-2">
        <label v-for="(count, stars) in reviews" :key="stars" class="flex items-center justify-between group cursor-pointer text-gray-600 hover:text-orange-500">
          <div class="flex items-center gap-2">
            <input type="checkbox" class="rounded border-gray-300 text-orange-500 focus:ring-orange-500">
            <div class="flex text-yellow-400 text-sm">
                <i v-for="n in 5" :key="n" :class="n <= stars ? 'fa fa-star' : 'fa fa-star-o'"></i>
            </div>
          </div>
          <span class="text-sm text-gray-400 group-hover:text-orange-500">{{ count }}</span>
        </label>
      </div>
    </div>

     <!-- Level -->
     <div class="mb-8">
      <h3 class="text-lg font-bold text-gray-900 mb-4 border-l-4 border-orange-500 pl-3">Level</h3>
      <div class="flex flex-col gap-2">
        <label v-for="(count, name) in levels" :key="name" class="flex items-center justify-between group cursor-pointer text-gray-600 hover:text-orange-500">
          <div class="flex items-center gap-2">
            <input type="checkbox" class="rounded border-gray-300 text-orange-500 focus:ring-orange-500">
            <span>{{ name }}</span>
          </div>
          <span class="text-sm text-gray-400 group-hover:text-orange-500">{{ count }}</span>
        </label>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const categories = ref({
  'Commercial': 15,
  'Office': 15,
  'Shop': 15,
  'Educate': 15,
  'Academy': 15,
  'Single Family Home': 15,
  'Studio': 15,
  'University': 15
});

const instructors = ref({
  'Kenny White': 15,
  'John Doe': 15
});

const prices = ref({
  'All': 15,
  'Free': 15,
  'Paid': 15
});

const reviews = ref({
  5: 1025,
  4: 1025,
  3: 1025,
  2: 1025,
  1: 1025
});

const levels = ref({
  'All levels': 15,
  'Beginner': 15,
  'Intermediate': 15,
  'Expert': 15
});
</script>
