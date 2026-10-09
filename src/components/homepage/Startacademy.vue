<template lang="html">
  <div class="container mx-auto my-20 p-5">
    <div
      class="academy flex justify-between items-center px-12 py-16 lg:flex-row flex-col gap-10"
    >
      <div class="flex items-center justify-center gap-8">
        <div
          class="w-30 h-30 bg-white rounded-full flex justify-center items-center"
        >
          <i class="fa-solid fa-user-graduate text-6xl text-gray-500"></i>
        </div>
        <h1 class="font-bold text-2xl">Let’s Start With Academy LMS</h1>
      </div>
      <div class="flex gap-5">
        <router-link to="auth/signin" class="w-full">
          <el-button
            round
            size="large"
            class="outline-2! outline-yellow-500! bg-transparent! text-yellow-500! hover:text-orange-500! hover:outline-orange-500! w-full"
            >I'm A Student</el-button
          >
        </router-link>
        <router-link to="/auth/signin" class="w-full">
          <el-button
            type="warning"
            round
            size="large"
            class="transition duration-300 hover:bg-orange-500! w-full"
            >Become An Instructor</el-button
          >
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.academy {
  background-image: linear-gradient(
    to right,
    rgba(94, 145, 254, 0.4),
    rgba(240, 88, 243, 0.4)
  );
  border-radius: 15px;
}
</style>
