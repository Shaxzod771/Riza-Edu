<template>
    <div class="container px-5 mx-auto">
        <!-- Header Section -->
        <div
            class="categories-header flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 transition-colors duration-300">
            <div>
                <h1 class="font-bold text-3xl mb-3 text-gray-900">{{ settings.t('featuredTitle') }}</h1>
                <p class="text-gray-600">Barcha kurslar bepul</p>
            </div>

            <!-- Filters & Actions -->
            <div class="flex flex-wrap gap-3">

                <!-- All Courses Button -->
                <el-button type="warning" round size="large" @click="navigateToCourses">
                    {{ settings.t('exploreBtn') }}
                </el-button>
            </div>
        </div>

        <!-- Courses Grid -->
        <div v-loading="loading" class="courses-cards grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <router-link v-for="course in filteredCourses" :key="course.id" :to="`/course/${course.id}`"
                class="card group flex flex-col rounded-lg bg-white border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform overflow-hidden">
                <!-- Card Image -->
                <div class="card-header relative overflow-hidden h-64">
                    <img :src="course.image" :alt="course.title" class="w-full h-full object-cover" />

                    <!-- Badges -->
                    <div class="absolute top-4 left-4 right-4 flex justify-between items-start">
                        <!-- Category Badge -->
                        <span
                            class="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                            {{ course.category }}
                        </span>

                        <!-- New Badge -->
                        <span v-if="course.isNew"
                            class="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                            New
                        </span>
                    </div>

                    <!-- Rating -->
                    <div
                        class="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                        <el-icon class="text-yellow-400">
                            <StarFilled />
                        </el-icon>
                        <span class="text-sm font-semibold">{{ course.rating }}</span>
                        <span class="text-xs text-gray-500">({{ course.reviews }})</span>
                    </div>
                </div>

                <!-- Card Content -->
                <div class="card-content flex-1 flex flex-col p-6">

                    <!-- Title -->
                    <h2
                        class="mb-auto font-bold text-xl leading-tight transition-colors duration-300 text-gray-900 group-hover:text-orange-500 line-clamp-2">
                        {{ course.title }}
                    </h2>

                    <!-- Meta Info -->
                    <div class="flex items-center text-sm text-gray-600 my-6 gap-6">
                        <!-- Duration -->
                        <div class="flex items-center gap-2">
                            <el-icon class="text-orange-500 text-lg">
                                <Clock />
                            </el-icon>
                            <span>{{ course.duration }}</span>
                        </div>

                        <!-- Students Count -->
                        <div class="flex items-center gap-2">
                            <el-icon class="text-orange-500 text-lg">
                                <User />
                            </el-icon>
                            <span>{{ formatNumber(course.students) }}</span>
                        </div>

                        <!-- Lessons Count -->
                        <div class="flex items-center gap-2">
                            <el-icon class="text-orange-500 text-lg">
                                <Reading />
                            </el-icon>
                            <span>{{ course.lessons }} {{ settings.t('lessons') }}</span>
                        </div>
                    </div>

                    <!-- Divider -->
                    <div class="border-t border-gray-200"></div>

                    <!-- Footer -->
                    <div class="flex justify-between items-center mt-4">
                        <!-- Price -->
                        <div class="flex items-center gap-2">
                            <p v-if="course.oldPrice" class="line-through text-gray-400 text-sm">
                                ${{ course.oldPrice }}
                            </p>
                            <span :class="getPriceClass(course.price)" class="font-bold text-xl">
                                {{ formatPrice(course.price) }}
                            </span>
                            <span v-if="getDiscount(course.oldPrice, course.price) > 0"
                                class="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-semibold">
                                -{{ getDiscount(course.oldPrice, course.price) }}%
                            </span>
                        </div>

                        <!-- View More Button -->
                        <el-button type="text"
                            class="text-orange-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                            {{ settings.t('viewMore') }}
                            <el-icon>
                                <ArrowRight />
                            </el-icon>
                        </el-button>
                    </div>
                </div>
            </router-link>
        </div>

        <!-- Empty State -->
        <el-empty v-if="!loading && filteredCourses.length === 0" description="No courses found" class="my-20">
            <el-button type="primary" @click="resetFilters">Reset Filters</el-button>
        </el-empty>
    </div>
</template>

<script setup>
// ==========================================
// 1. IMPORTS
// ==========================================
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElNotification } from 'element-plus'
import { useSettingsStore } from '@/stores/settings'
const settings = useSettingsStore()

import {
    Clock,
    User,
    ArrowRight,
    StarFilled,
    Reading
} from '@element-plus/icons-vue'

// 2. ROUTER
const router = useRouter()

// Loading holati
const loading = ref(false)

// Search va Filter
const searchQuery = ref('')
const selectedCategory = ref('')
const sortBy = ref('latest')

// Pagination
const currentPage = ref(1)


// Wishlist
const wishlist = ref([])

// Kurslar ro'yxati
const courses = ref([
    {
        id: 1,
        title: 'Web dasturlash kurslari',
        image: '/featurecatigories/learnpress.jpg',
        category: 'Web Development',
        duration: '2 Weeks',
        students: 156,
        lessons: 24,
        rating: 4.8,
        reviews: 89,
        oldPrice: 29.0,
        price: 0,
        isNew: true,
        createdAt: '2024-01-15'
    },
    {
        id: 2,
        title: 'Design A Website With ThimPress',
        image: '/featurecatigories/thimpress.jpg',
        category: 'Design',
        duration: '3 Weeks',
        students: 203,
        lessons: 32,
        rating: 4.9,
        reviews: 124,
        oldPrice: 59.0,
        price: 49.0,
        isNew: false,
        createdAt: '2024-01-10'
    },
    {
        id: 3,
        title: 'Angular',
        image: '/featurecatigories/angularcourse.jpg',
        category: 'Framework',
        duration: '4 Weeks',
        students: 342,
        lessons: 45,
        rating: 4.7,
        reviews: 201,
        oldPrice: 79.0,
        price: 0,
        isNew: true,
        createdAt: '2024-01-12'
    },
    {
        id: 4,
        title: 'Kengaytirilgan JavaScript kursi',
        image: '/featurecatigories/js-img.png',
        category: 'Web Development',
        duration: '5 Weeks',
        students: 189,
        lessons: 38,
        rating: 4.6,
        reviews: 156,
        oldPrice: 89.0,
        price: 69.0,
        isNew: false,
        createdAt: '2024-01-08'
    },
    {
        id: 5,
        title: 'React.Js & Vue.Js farqlari',
        image: '/featurecatigories/react-vue.webp',
        category: 'Framework',
        duration: '6 Weeks',
        students: 421,
        lessons: 52,
        rating: 4.9,
        reviews: 287,
        oldPrice: 99.0,
        price: 79.0,
        isNew: true,
        createdAt: '2024-01-14'
    },
    {
        id: 6,
        title: 'UI/UX dizayn boshlang\'ich darslar',
        image: '/featurecatigories/ux-ui.avif',
        category: 'Design',
        duration: '3 Weeks',
        students: 267,
        lessons: 28,
        rating: 4.8,
        reviews: 178,
        oldPrice: 49.0,
        price: 0,
        isNew: false,
        createdAt: '2024-01-05'
    }
])
/**
 * filteredCourses - Filter va search qilingan kurslar
 * Bu computed property avtomatik yangilanadi
 */
const filteredCourses = computed(() => {
    let result = [...courses.value]


    return result
})
/**
 * formatPrice - Narxni formatlash
 * @param {number} price - Kurs narxi
 * @returns {string} - "Free" yoki "$49.0"
 */
const formatPrice = (price) => {
    return price === 0 ? settings.t('free') : `$${price.toFixed(1)}`
}

/**
 * getPriceClass - Narx rangini aniqlash
 * @param {number} price - Kurs narxi
 * @returns {string} - CSS class
 */
const getPriceClass = (price) => {
    return price === 0 ? 'text-green-500' : 'text-orange-500'
}

/**
 * formatNumber - Raqamni formatlash (1,234)
 * @param {number} num - Raqam
 * @returns {string} - Formatlangan raqam
 */
const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num)
}

/**
  getDiscount - Chegirma foizini hisoblash
 * @param {number} oldPrice - Eski narx
 * @param {number} newPrice - Yangi narx
 * @returns {number} - Chegirma foizi
 */
const getDiscount = (oldPrice, newPrice) => {
    if (!oldPrice || newPrice === 0) return 0
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100)
}

// navigateToCourses - All Courses sahifasiga o'tish
const navigateToCourses = () => {
    router.push('/course')
}

/**
 * handlePageChange - Sahifa o'zgarganda
 * @param {number} page - Yangi sahifa raqami
 */
const handlePageChange = (page) => {
    console.log('Page changed to:', page)
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>