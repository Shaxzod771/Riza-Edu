<template>
    <div class="bg-white">
        <div class="max-w-300 mx-auto px-4 sm:px-6 lg:px-8 py-16">

            <h2 class="text-4xl font-bold text-gray-900 mb-12">FAQs</h2>

            <!-- FAQ Accordions -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">

                <!-- Column 1 -->
                <div class="space-y-4 pr-0 lg:pr-4">
                    <el-collapse v-model="activeNamesCol1" accordion class="custom-collapse border-none">
                        <el-collapse-item title="What Does Royalty Free Mean?" name="1">
                            <div class="text-gray-500 leading-relaxed pt-2 pb-4 px-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis
                                faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis
                                egestas volutpat. Quisque nec non amet quis. Varius nullus justo odio
                                parturient mauris curabitur lorem in.
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="What Does Royalty Free Mean?" name="2">
                            <div class="text-gray-500 leading-relaxed pt-2 pb-4 px-2">
                                Answer content goes here.
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="What Does Royalty Free Mean?" name="3">
                            <div class="text-gray-500 leading-relaxed pt-2 pb-4 px-2">
                                Answer content goes here.
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="What Does Royalty Free Mean?" name="4">
                            <div class="text-gray-500 leading-relaxed pt-2 pb-4 px-2">
                                Answer content goes here.
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="What Does Royalty Free Mean?" name="5">
                            <div class="text-gray-500 leading-relaxed pt-2 pb-4 px-2">
                                Answer content goes here.
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>

                <!-- Column 2 -->
                <div class="space-y-4 pl-0 lg:pl-4">
                    <el-collapse v-model="activeNamesCol1" accordion class="custom-collapse border-none">
                        <el-collapse-item title="What Does Royalty Free Mean?" name="6">
                            <div class="text-gray-500 leading-relaxed pt-2 pb-4 px-2">
                                Answer content goes here.
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="What Does Royalty Free Mean?" name="7">
                            <div class="text-gray-500 leading-relaxed pt-2 pb-4 px-2">
                                Answer content goes here.
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="What Does Royalty Free Mean?" name="8">
                            <div class="text-gray-500 leading-relaxed pt-2 pb-4 px-2">
                                Answer content goes here.
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="What Does Royalty Free Mean?" name="9">
                            <div class="text-gray-500 leading-relaxed pt-2 pb-4 px-2">
                                Answer content goes here.
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="What Does Royalty Free Mean?" name="10">
                            <div class="text-gray-500 leading-relaxed pt-2 pb-4 px-2">
                                Answer content goes here.
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>

            <!-- Illustration Area -->
            <div class="mt-16 flex justify-center items-center">
                <div class="text-center">
                    <img src="/page/Faqs.png" alt="FAQ Illustration" class="max-w-full h-auto object-contain" />
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeNamesCol1 = ref(['1'])
</script>

<style scoped>
.custom-collapse {
    border-top: none !important;
    border-bottom: none !important;
}

:deep(.el-collapse-item) {
    margin-bottom: 16px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
    background-color: #f9fafb;
}

:deep(.el-collapse-item__header) {
    background-color: #f9fafb;
    border-bottom: none;
    font-weight: 600;
    font-size: 16px;
    color: #111827;
    padding: 24px;
    height: auto;
    line-height: 1.5;
    transition: all 0.3s ease;
    border-radius: 8px;
}

:deep(.el-collapse-item.is-active .el-collapse-item__header) {
    background-color: #fff;
}

:deep(.el-collapse-item__wrap) {
    border-bottom: none;
    background-color: #fff;
    padding: 0 16px;
}

:deep(.el-collapse-item__content) {
    padding-bottom: 8px;
}

:deep(.el-collapse-item__arrow) {
    color: #005eff;
    font-weight: bold;
}
</style>
