<script setup>
import { reactive, ref } from "vue";
import { useTeacherStore } from "@/stores/teacher/teacherStore";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { CircleCloseFilled } from "@element-plus/icons-vue";

const itemLabelPosition = ref("top");
const formLabelAlign = reactive({
  email: "",
  text: "",
});

const visible = ref(false);
const selectedTeacher = ref(null);
const teachers = useTeacherStore();

function openModal(teacher) {
  selectedTeacher.value = teacher;
  visible.value = true;
}

function close() {
  visible.value = false;
}

const onSubmit = () => {
  console.log("Submit");

  formLabelAlign.email = "";
  formLabelAlign.text = "";

  close();
};
</script>

<template>
  <div class="container mx-auto px-5 py-10">
    <Swiper :modules="[Autoplay]" slides-per-view="auto" :space-between="20" loop :speed="3000" :autoplay="{
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }" class="mySwiper">
      <SwiperSlide v-for="teacher in teachers.teachers" :key="teacher.id" class="w-80!">
        <div class="bg-white rounded-2xl shadow-md overflow-hidden">
          <img :src="teacher.image" :alt="teacher.name" class="w-full h-64 object-cover rounded-t-2xl" />
          <div class="p-5 text-start">
            <div class="flex justify-between items-start border-b pb-1">
              <div>
                <h3 class="text-md font-semibold">{{ teacher.name }}</h3>
                <p class="text-sm text-gray-500 mb-2">{{ teacher.role }}</p>
              </div>
              <el-rate :model-value="teacher.rating" disabled />
            </div>
            <p class="text-sm text-gray-600 my-4">{{ teacher.desc }}</p>
            <el-button type="warning" class="rounded-full px-5 w-full" plain @click="openModal(teacher)">
              Malumotlarini ko'rish
            </el-button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  <div>
    <el-dialog v-model="visible" :show-close="false" width="700" style="height: auto">
      <div v-if="selectedTeacher">
        <div class="my-header">
          <h2 class="font-bold text-black">{{ selectedTeacher.name }}</h2>
          <el-button type="danger" @click="close">
            <el-icon>
              <CircleCloseFilled />
            </el-icon>
          </el-button>
        </div>

        <div class="flex gap-5 my-4 justify-center items-top">
          <img :src="selectedTeacher.image" class="w-auto h-55.5 object-cover" />
          <div>
            <h3 class="text-black">{{ selectedTeacher.role }}</h3>
            <p class="mt-3">{{ selectedTeacher.information }}</p>
          </div>
        </div>

        <el-form-item label="Emailingizni kiriting!" :label-position="itemLabelPosition">
          <el-input type="email" v-model="formLabelAlign.email" required="true" />
        </el-form-item>
        <el-form-item label="Savolingizni yozib qoldiring" :label-position="itemLabelPosition">
          <el-input type="textarea" v-model="formLabelAlign.text" />
        </el-form-item>

        <el-form-item>
          <el-button type="warning" @click="onSubmit">Yuborish</el-button>
        </el-form-item>
      </div>
    </el-dialog>
  </div>
  <!-- Stats Section -->
  <div class="bg-blue-50 py-16 transition-colors duration-300">
    <div class="container mx-auto px-5">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div>
          <h4 class="text-4xl font-bold text-orange-500 mb-2">10k+</h4>
          <p class="text-gray-600">Total Students</p>
        </div>
        <div>
          <h4 class="text-4xl font-bold text-orange-500 mb-2">500+</h4>
          <p class="text-gray-600">Expert Teachers</p>
        </div>
        <div>
          <h4 class="text-4xl font-bold text-orange-500 mb-2">15+</h4>
          <p class="text-gray-600">Years Experience</p>
        </div>
        <div>
          <h4 class="text-4xl font-bold text-orange-500 mb-2">99%</h4>
          <p class="text-gray-600">Satisfaction Rate</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Join Us Section -->
  <div class="container mx-auto px-5 py-20 text-center">
    <div class="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl border">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Want to Join Our Team?</h2>
      <p class="text-gray-600 mb-8 max-w-lg mx-auto">
        Share your knowledge with thousands of students worldwide. We provide the tools and platform for you to reach
        your audience.
      </p>
      <el-button type="primary" size="large" class="rounded-full px-8 h-12">Become an Instructor</el-button>
    </div>
  </div>
</template>
<style scoped>
.mySwiper {
  padding: 5px 0;
}

.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
}
</style>
