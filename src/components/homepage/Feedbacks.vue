<template lang="html">
    <div class="container mx-auto my-20 px-5">
        <div class="feedback-header text-center mb-10">
            <h1 class="font-bold text-3xl mb-3">Student Feedback</h1>
            <p class="text-gray-600">What Students Say About Academy LMS</p>
        </div>

        <div class="feedback-cards mx-auto grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
            <div v-for="feedback in feedbacks" :key="feedback.id" class="card p-10 border-2 rounded-xl h-auto">
                <div class="flex gap-2 mb-3 ms-2">
                    <p class="bg-gray-300 w-2 h-10 md:w-2 md:h-8 rotate-20"></p>
                    <p class="bg-gray-300 w-2 h-10 md:w-2 md:h-8 rotate-20"></p>
                </div>
                <p class="mb-5">{{ feedback.text }}</p>
                <h2 class="font-bold mb-2">{{ feedback.name }}</h2>
                <p class="text-gray-500">{{ feedback.role }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Feedbacks',
  data() {
    return {
      feedbacks: [
        {
          id: 1,
          text: 'I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound',
          name: 'Roe Smith',
          role: 'Designer'
        },
        {
          id: 2,
          text: 'I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound',
          name: 'Roe Smith',
          role: 'Designer'
        },
        {
          id: 3,
          text: 'I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound',
          name: 'Roe Smith',
          role: 'Designer'
        },
        {
          id: 4,
          text: 'I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound',
          name: 'Roe Smith',
          role: 'Designer'
        }
      ]
    };
  }
};
</script>