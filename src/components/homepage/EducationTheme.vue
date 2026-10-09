<template>
  <div class="container mx-auto my-10 px-5 relative">
    <div class="content rounded-xl relative h-auto overflow-hidden">
      <!-- Left image -->
      <div class="hidden 2xl:block">
        <img
          src="/featurecatigories/react-vue.webp"
          alt="image-left"
          class="absolute left-20 top-25 lg:w-xs md:w-48 rotate-20 rounded-2xl z-10"
        />
        <img
          src="/featurecatigories/angularcourse.jpg"
          alt="image-left1"
          class="absolute -left-20 bottom-0 lg:w-xs md:w-40 rotate-20 rounded-2xl z-9"
        />
        <img
          src="/featurecatigories/thimpress.jpg"
          alt="image-left2"
          class="absolute -left-20 -top-5 lg:w-xs md:w-52 rounded-3xl rotate-20 z-9"
        />
      </div>

      <!-- center content -->
      <div
        class="text-center py-16 px-8 md:py-20 md:px-20 rounded-xl uppercase relative z-1 mx-20"
      >
        <h4 class="mb-2 font-semibold text-sm md:text-base tracking-wide">
          PROVIDING AMAZING
        </h4>
        <h1 class="mb-4 font-bold text-xl md:text-3xl lg:text-4xl">
          Education Wordpress Theme
        </h1>
        <p class="mb-6 text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
          The next level of LMS WordPress Theme. Learn anytime and anywhere.
        </p>
        <router-link to="/course">
          <el-button type="warning" round size="large" class="font-semibold">
            Explore Courses
          </el-button>
        </router-link>
      </div>

      <!-- right image -->
      <div class="hidden 2xl:block">
        <img
          src="/featurecatigories/learnpress.jpg"
          alt="image-right2"
          class="absolute right-40 top-0 lg:w-2xs md:w-48 rounded-3xl rotate-30 z-9"
        />
        <img
          src="/featurecatigories/ux-ui.avif"
          alt="image-right1"
          class="absolute -right-25 bottom-5 lg:w-2xs md:w-40 rotate-30 rounded-2xl z-9"
        />
        <img
          src="/featurecatigories/js-img.png"
          alt="image-right"
          class="absolute right-20 bottom-15 lg:w-xs md:w-48 rotate-30 rounded-2xl z-10"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  background: linear-gradient(
    to right,
    rgba(230, 28, 89, 0.4),
    rgba(72, 224, 255, 0.5)
  );
}

.content-wrapper {
  perspective: 1000px;
}
</style>
