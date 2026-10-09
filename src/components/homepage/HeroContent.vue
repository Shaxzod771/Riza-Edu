<template>
  <div class="relative overflow-hidden transition-colors duration-300">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-[url(/hero/hero-bg.png)] bg-no-repeat bg-cover bg-center transition-opacity duration-300">
    </div>

    <div class="py-20 sm:p-0 relative">
      <img src="/hero/bag.png" alt="Bag Image"
        class="absolute hidden xl:block w-64 2xl:w-auto top-10 left-5 2xl:left-20" />
      <img src="/hero/pencil.png" alt="Pencil Image" class="absolute bottom-6 right-0" />
      <div class="container mx-auto px-5 flex justify-center sm:justify-between items-center relative z-0">
        <img src="/hero/text-effect.png" alt="Text-effect Image"
          class="absolute w-xs md:w-sm lg:w-lg xl:w-2xl 2xl:w-244.25 xl:top-[calc(50%-160px)] 2xl:top-[calc(50%-209.5px)] right-[calc(50%-160px)] sm:right-0 -z-10" />
        <div class="flex flex-col items-center sm:items-start gap-4 lg:gap-6 w-130 transition-colors duration-300">
          <h1 class="font-semibold text-2xl md:text-4xl lg:text-[50px] text-center sm:text-left text-gray-900">
            {{ settings.t('heroTitle') }}</h1>
          <p class="text-sm md:text-base lg:text-lg text-gray-600 text-center sm:text-left">
            {{ settings.t('heroDesc') }}
          </p>
          <el-button @click="$router.push('contact')" size="large"
            class="rounded-[50px]! hover:bg-orange-400! bg-orange-500! text-white! border-0!">
            {{ settings.t('heroBtn') }}
          </el-button>
        </div>
        <img src="/hero/hero-student.png" alt="Hero Image"
          class="hidden sm:block w-xs md:w-sm lg:w-md xl:w-lg 2xl:w-auto" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
const settings = useSettingsStore()
</script>

<style scoped>
img[src="/hero/pencil.png"] {
  display: none;
}

@media (min-width: 1840px) {
  img[src="/hero/pencil.png"] {
    display: block;
  }
}
</style>