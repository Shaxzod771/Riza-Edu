<template>
  <div class="bg-gray-50">

    <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">

      <!-- Top Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

        <!-- Contact Info -->
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Need A Direct Line?</h2>
          <p class="text-gray-600 mb-10 text-lg leading-relaxed">
            Cras massa et odio donec faucibus in. Vitae pretium<br />
            massa dolor ullamcorper lectus elit quam.
          </p>

          <div class="space-y-8">
            <div class="flex items-start">
              <div
                class="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-orange-100 text-[#ea580c]">
                <el-icon :size="24">
                  <PhoneFilled />
                </el-icon>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-500">Phone</p>
                <p class="text-lg font-bold text-gray-900 mt-1">(123) 456 7890</p>
              </div>
            </div>

            <div class="flex items-start">
              <div
                class="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-orange-100 text-[#ea580c]">
                <el-icon :size="24">
                  <Message />
                </el-icon>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-500">Email</p>
                <p class="text-lg font-bold text-gray-900 mt-1">contact@thimpress.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Map -->
        <div class="rounded-3xl overflow-hidden shadow-sm h-[400px] relative bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0587187570954!2d69.18349277552859!3d41.28582650228943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89ade0861433%3A0xa6470d048143a930!2sIT%20HOUSE%20Akademiyasi!5e0!3m2!1sen!2s!4v1774788139442!5m2!1sen!2s"
            width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="rounded-3xl p-0">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p class="text-gray-500 mb-8">Your email address will not be published. Required fields are marked *</p>

        <el-form :model="form" :rules="rules" ref="contactFormRef" label-position="top" class="contact-form">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <el-form-item prop="name">
              <el-input v-model="form.name" placeholder="Name*" size="large" class="!rounded-lg" />
            </el-form-item>

            <el-form-item prop="email">
              <el-input v-model="form.email" placeholder="Email*" size="large" />
            </el-form-item>
          </div>

          <el-form-item prop="comment" class="mt-6">
            <el-input v-model="form.comment" type="textarea" :rows="6" placeholder="Comment" />
          </el-form-item>

          <el-form-item class="mt-4">
            <el-checkbox v-model="form.saveInfo">
              Save my name, email in this browser for the next time I comment
            </el-checkbox>
          </el-form-item>

          <el-form-item class="mt-8">
            <el-button type="primary" @click="submitForm(contactFormRef)"
              class="!bg-[#ea580c] !border-[#ea580c] hover:!bg-[#c2410c] !rounded-full !px-8 !py-6 !font-semibold text-white">
              Post Comment
            </el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { PhoneFilled, Message } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const contactFormRef = ref(null)

const form = reactive({
  name: '',
  email: '',
  comment: '',
  saveInfo: false
})

const rules = reactive({
  name: [
    { required: true, message: 'Please input your name', trigger: 'blur' }
  ],
  email: [
    { required: true, message: 'Please input your email address', trigger: 'blur' },
    { type: 'email', message: 'Please input a valid email address', trigger: ['blur', 'change'] }
  ]
})

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      ElMessage({
        message: 'Your message has been sent successfully!',
        type: 'success',
      })
      // Reset form or handle actual submission logic here
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style scoped>
/* Custom overrides for element plus inputs to match the design */
:deep(.el-input__wrapper),
:deep(.el-textarea__inner) {
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  padding-top: 12px;
  padding-bottom: 12px;
}

:deep(.el-textarea__inner) {
  padding-top: 16px;
}

:deep(.el-input__wrapper.is-focus),
:deep(.el-textarea__inner:focus) {
  box-shadow: 0 0 0 1px #ea580c !important;
}
</style>
