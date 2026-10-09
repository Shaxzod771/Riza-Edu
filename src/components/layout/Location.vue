<template>
    <div v-if="breadcrumbs.length > 0"
        class="location w-full bg-[#F6F7FA] py-4 border-b border-gray-100 transition-colors duration-300">
        <div class="container mx-auto px-5">
            <nav class="flex items-center space-x-2 text-sm">
                <router-link to="/" class="text-gray-500 hover:text-orange-500 transition-colors font-medium">
                    {{ settings.t('home') }}
                </router-link>
                <template v-for="(crumb, index) in breadcrumbs" :key="index">
                    <span class="text-gray-400">
                        <el-icon :size="10">
                            <ArrowRight />
                        </el-icon>
                    </span>
                    <router-link :to="crumb.path" class="transition-colors font-medium capitalize"
                        :class="index === breadcrumbs.length - 1 ? 'text-gray-400 cursor-default' : 'text-gray-500 hover:text-orange-500'"
                        @click.prevent="index === breadcrumbs.length - 1 ? null : $router.push(crumb.path)">
                        {{ crumb.name }}
                    </router-link>
                </template>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSettingsStore } from '@/stores/settings'
const settings = useSettingsStore()
import { ArrowRight } from '@element-plus/icons-vue'

const route = useRoute()

const breadcrumbs = computed(() => {
    // Filter out the 'Home' and 'MainLayout' routes to avoid showing them in the list
    const matched = route.matched.filter(r => r.name && r.name !== 'Home' && r.name !== 'MainLayout' && r.name !== 'SignIn')

    return matched.map(r => ({
        name: r.name ? r.name.toLowerCase() : 'page',
        path: r.path || '/'
    }))
})
</script>

<style scoped>
.location {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>