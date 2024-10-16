<template>
    <Navbar></Navbar>
    <div class="w-full bg-zinc-900 min-h-full">
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
import Navbar from '../_components/Navbar.vue';
import { initFlowbite } from 'flowbite'

onMounted(async () => {
    initFlowbite();
});
</script>
