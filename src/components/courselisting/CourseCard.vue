<template>
  <!-- GRID CARD -->
  <div v-if="viewType === 'grid'"
    class="bg-white rounded-xl shadow border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition duration-300">
    <img :src="image" :alt="title" class="w-full h-50 object-cover mb-3 img-grid transition-all duration-300" />

    <div class="p-3 transition-colors duration-300">
      <div class="text-sm text-gray-500 mb-1">
        By <span class="text-gray-900 font-medium">{{ author }}</span>
      </div>

      <h2 class="font-bold text-lg mb-2 text-gray-900">
        {{ title }}
      </h2>

      <div class="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
        <span><i class="fa fa-clock"></i> {{ duration }}</span>
        <span><i class="fa fa-users"></i> {{ students }}</span>
      </div>

      <div class="line my-5"></div>

      <div class="flex justify-between items-center mt-2">
        <div>
          <span v-if="oldPrice" class="text-gray-400 line-through text-sm mr-1">
            ${{ oldPrice }}
          </span>
          <span class="text-green-500 font-bold">
            {{ price === "Free" || price === 0 ? settings.t('free') : "$" + price }}
          </span>
        </div>

        <el-button plain @click="drawerVisible = true"
          class="text-sm font-semibold hover:text-orange-500 cursor-pointer">
          View →
        </el-button>
      </div>
    </div>
  </div>

  <!-- LIST CARD -->
  <div v-else
    class="flex flex-col md:flex-row bg-white rounded-xl shadow gap-2 md:gap-4 border border-gray-200 hover:shadow-lg transition duration-300">
    <img :src="image" :alt="title"
      class="w-full md:w-1/3 h-64 md:h-auto object-cover img-list transition-all duration-300" />

    <div class="flex flex-col justify-between w-full p-3 transition-colors duration-300">
      <div class="flex flex-col justify-between">
        <div class="text-sm text-gray-500 mb-1">
          By <span class="text-gray-900 font-medium">{{ author }}</span>
        </div>

        <h2 class="font-bold text-lg my-3 text-gray-900">
          {{ title }}
        </h2>

        <div class="flex flex-wrap gap-5 text-sm text-gray-500">
          <span><i class="fa fa-clock"></i> {{ duration }}</span>
          <span><i class="fa fa-users"></i> {{ students }}</span>
          <span><i class="fa fa-bar-chart"></i> {{ level }}</span>
          <span><i class="fa fa-file-text"></i> {{ lessons }} {{ settings.t('lessons') }}</span>
        </div>
      </div>

      <div class="flex justify-between items-center mt-3">
        <div>
          <span v-if="oldPrice" class="text-gray-400 line-through text-sm mr-1">
            ${{ oldPrice }}
          </span>
          <span class="text-green-500 font-bold">
            {{ price === "Free" || price === 0 ? settings.t('free') : "$" + price }}
          </span>
        </div>

        <el-button plain @click="drawerVisible = true"
          class="text-sm font-semibold hover:text-orange-500 cursor-pointer">
          View →
        </el-button>
      </div>
    </div>
  </div>
  <el-dialog v-model="drawerVisible" title="Darslik videosi" width="900px" center>
    <iframe width="100%" height="400" src="https://www.youtube.com/embed/lCPJ3peKMdQ" title="YouTube video player"
      frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

    <template #footer>
      <div class="drawer-footer flex-col">

        <p class="mb-4">
          Davomini ko'rish uchun <strong class="text-sky-500">To'liq ko'rish</strong> tugmasini bosing
        </p>
        <el-button @click="drawerVisible = false">Cancel</el-button>
        <el-button type="primary" @click="router.push('/auth/signin')">
          To'liq ko'rish
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
const settings = useSettingsStore()
import router from "@/router";
import { ref } from "vue";
const drawerVisible = ref(false);
defineProps({
  viewType: String,

  image: {
    type: String,
    default: "https://via.placeholder.com/300x200",
  },
  author: {
    type: String,
    default: "Author",
  },
  title: {
    type: String,
    default: "Course Title",
  },
  duration: {
    type: String,
    default: "2 Weeks",
  },
  students: {
    type: [Number, String],
    default: 100,
  },
  level: {
    type: String,
    default: "All levels",
  },
  lessons: {
    type: [Number, String],
    default: 20,
  },
  price: {
    type: [String, Number],
    default: "Free",
  },
  oldPrice: {
    type: [String, Number],
    default: null,
  },
});
</script>
<style scoped>
.img-list {
  border-radius: 10px 0 0 10px;
}

.img-grid {
  border-radius: 10px 10px 0 0;
}

.line {
  height: 1px;
  background-color: gray;
}

span i {
  color: orangered;
}

.modal {
  min-height: 600px;
}
</style>
