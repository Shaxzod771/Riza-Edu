<template>
  <div class="container px-5 my-20 mx-auto">
    <div class="latest">
      <div class="categories-header flex justify-between items-center">
        <div>
          <h1 class="font-bold text-3xl mb-4">HR ga tayyorlov kurslari</h1>
          <p>Ishga kirish uchun tekin tayyorlov kurslari</p>
        </div>
        <router-link to="allcategories">
          <el-button type="warning" round size="large">
            Kursni ko'rish
          </el-button>
        </router-link>
      </div>
      <div class="latest-content py-14 flex gap-8 lg:flex-row flex-col">
        <router-link v-for="article in articles" :key="article.id" :to="article.link"
          class="card group flex flex-col rounded-xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-5 transition duration-300 transform">
          <div class="card-header">
            <img :src="article.image" :alt="article.title" class="w-full h-64 object-cover rounded-t-lg" />
          </div>
          <div class="card-content p-6">
            <h2 class="text-pretty mb-4 font-bold text-xl transition-colors duration-300 group-hover:text-orange-500">
              {{ article.title }}
            </h2>
            <div class="flex items-center gap-2 mb-4">
              <el-icon class="icon-calendar text-orange-500!" :size="35">
                <Calendar />
              </el-icon>
              <p>{{ article.date }}</p>
            </div>
            <p class="text-pretty text-gray-500">{{ article.description }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Calendar } from '@element-plus/icons-vue'

export default {
  components: {
    Calendar
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          image: '/latest/Rectangle_141.svg',
          title: 'Best LearnPress WordPress Theme Collection for 2023',
          date: 'Jan 24, 2023',
          description: 'Looking for an amazing & well-functional LearnPress WordPress Theme?...',
          link: '/latest'
        },
        {
          id: 1,
          image: '/latest/HR.png',
          title: 'Best LearnPress WordPress Theme Collection for 2023',
          date: 'Jan 24, 2023',
          description: 'Looking for an amazing & well-functional LearnPress WordPress Theme?...',
          link: '/latest'
        },
        {
          id: 1,
          image: '/latest/Rectangle_139.svg',
          title: 'Best LearnPress WordPress Theme Collection for 2023',
          date: 'Jan 24, 2023',
          description: 'Looking for an amazing & well-functional LearnPress WordPress Theme?...',
          link: '/latest'
        },
      ]
    }
  }
}
</script>

<style scoped>
</style>