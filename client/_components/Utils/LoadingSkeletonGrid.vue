<template>
    <div class="w-full h-full flex flex-col">
        <div class="w-full flex h-full mb-2">
            <LoadingSkeleton></LoadingSkeleton>
            <LoadingSkeleton v-if="isTablet"></LoadingSkeleton>
            <LoadingSkeleton v-if="isDesktop"></LoadingSkeleton>
        </div>
        <div class="w-full flex h-full">
            <LoadingSkeleton></LoadingSkeleton>
            <LoadingSkeleton v-if="isTablet"></LoadingSkeleton>
            <LoadingSkeleton v-if="isDesktop"></LoadingSkeleton>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import LoadingSkeleton from './LoadingSkeleton.vue';

const isDesktop = computed(() => window.innerWidth >= 1024);
const isTablet = computed(() => window.innerWidth >= 400);

window.addEventListener('resize', () => {
    isDesktop.value = window.innerWidth >= 1024;
});
</script>