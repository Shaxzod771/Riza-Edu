<template lang="html">
    <div class="container px-5 mx-auto">
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
            <div v-for="stat in stats" :key="stat.id" class="card rounded-lg flex flex-col justify-center items-center p-5 min-h-50 text-center bg-gray-200">
                <h1 class="text-3xl font-bold mb-4 text-orange-500">{{ stat.value }}</h1>
                <p class="font-semibold">{{ stat.label }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stats: [
                { id: 1, value: '25K+', label: 'Active Student' },
                { id: 2, value: '899', label: 'Total courses' },
                { id: 3, value: '158', label: 'Instructor' },
                { id: 4, value: '100%', label: 'Satisfaction Rate' }
            ]
        }
    },
}
</script>
