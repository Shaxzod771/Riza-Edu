<template>
    <div class="h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div class="text-center max-w-lg mx-auto">
            <!-- Error Icon / Illustration -->
            <div class="mb-4 flex justify-center">
                <img src="/page/Error.png" alt="404 Error"
                    class="max-w-full h-auto object-contain mix-blend-multiply max-h-75" />
            </div>

            <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 class="text-3xl font-semibold text-gray-800 mb-4 mt-2">Oops! Page Not Found</h2>

            <p class="text-gray-500 mb-8 text-lg">
                Sahifani yuklashda xatolik yuz berdi!😟
                Qaytadan urinib ko'ring yoki bosh sahifaga o'ting.
            </p>

            <router-link to="/">
                <el-button type="primary" size="large"
                    class="bg-[#ea580c]! border-[#ea580c]! hover:bg-[#c2410c]! rounded-full! px-10! py-6! font-semibold! text-lg! text-white">
                    Go Back Home
                </el-button>
            </router-link>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped></style>
