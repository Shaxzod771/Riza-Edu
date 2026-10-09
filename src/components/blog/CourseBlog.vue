<template>
  <div class="mx-auto">
    <div class="bg-black">
      <div class="container px-5 mx-auto text-white py-10">
        <p><span class="text-gray-400">by</span>Determined-Politras</p>
        <h1 class="text-3xl font-bold max-w-2xl">
          The Ultimate Guide to the best WordPress LMS Plugin
        </h1>

        <div class="flex flex-wrap gap-5 mt-5">
          <p><i class="fa-solid fa-clock mr-2"></i> 2 Weeks</p>
          <p><i class="fa-solid fa-graduation-cap mr-2"></i> 1.2K views</p>
          <p><i class="fa-solid fa-signal mr-2"></i> All levels</p>
          <p><i class="fa-solid fa-circle-question mr-2"></i> 3 Quizzes</p>
        </div>
      </div>
    </div>

    <div class="container mx-auto my-20 px-5">
      <div class="max-w-4xl">
        <!-- CARD -->
        <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <!-- TABS -->
          <div class="flex border-b border-b-gray-200">
            <button v-for="tab in tabs" :key="tab" @click="activeTab = tab" :class="[
              'flex-1 py-3 text-lg font-bold border border-gray-200 transition',
              activeTab === tab
                ? 'text-orange-500 bg-gray-100'
                : 'text-gray-700 hover:bg-gray-100',
            ]">
              {{ tab }}
            </button>
          </div>

          <!-- CONTENT -->
          <div class="p-6 bg-gray-100 text-gray-700 text-sm leading-7">
            <p>{{ blogStore[activeTab] }}</p>
          </div>
        </div>

        <!-- Comment Section -->
        <div class="mt-8">
          <h2 class="text-lg font-semibold mb-2">Leave A Comment</h2>
          <p class="text-sm text-gray-500 mb-4">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <div class="flex flex-col gap-4">
            <div class="flex gap-4">
              <el-input placeholder="Name*" size="large"/>
              <el-input placeholder="Email*" size="large" />
            </div>

            <el-input type="textarea" rows="4" placeholder="Comment" />

            <el-checkbox> Save my name, email in this browser </el-checkbox>

            <div>
              <el-button class="rounded-full! bg-orange-500! text-white! px-7! py-5!">
                Post Comment
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const tabs = ["Overview", "Curriculum", "Instructor", "FAQs", "Reviews"];
const activeTab = ref("Overview");

const blogStore = {
  Overview:
    "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required. LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to empower its core system.How to use WPML Add-on for LearnPress? No comments yet! You be the first to comment. Curriculum The curriculum is carefully structured to ensure gradual learning. It starts from the basics and moves towards advanced topics. Each section includes lessons, practical exercises, and real projects to strengthen your understanding and skills. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!",
  Curriculum: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!",
  Instructor:
    "Our instructor, John Doe, is a seasoned web developer with over 10 years of experience in the industry. He has a passion for teaching and has helped thousands of students achieve their goals in web development. John's teaching style is engaging and easy to follow, making complex concepts accessible to learners of all levels. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!",
  FAQs: "Q: Do I need prior coding experience to take this course? A: No, this course is designed for beginners with no prior coding experience. We will start from the basics and guide you through every step of the way. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!",
  Reviews:
    "This course exceeded my expectations! The instructor was clear and engaging, and the curriculum was well-structured. I learned so much and feel confident in my web development skills now. Highly recommend! lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!",
};
</script>
<style scoped>
i {
  color: orangered;
  font-size: 20px;
}

p {
  display: flex;
  align-items: center;
}

.buttons {
  transition: all 0.3s ease;
  border-radius: 10px 10px 0 0;
  border: 1px solid gray;
}
</style>
