<template lang="html">
    <div class="container px-5 mx-auto py-10">
        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-10">

            <!-- Course List -->
            <div class="lg:col-span-3">
                <CourseList />
            </div>

            <!-- Sidebar -->
            <div class="lg:col-span-1">
                <CourseSidebar />
            </div>
        </div>
        <!-- Pagination -->
        <div class="col-span-1">
            <CoursePagination />
        </div>
    </div>
</template>

<script setup>
import CourseSidebar from '@/components/courselisting/CourseSidebar.vue';
import CourseList from '@/components/courselisting/CourseList.vue';
import CoursePagination from '@/components/courselisting/CoursePagination.vue';
</script>
