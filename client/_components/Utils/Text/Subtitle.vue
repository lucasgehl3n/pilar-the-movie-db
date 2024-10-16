<template>
        <p class="ms-2 text-sm font-bold">{{ text }}</p>
</template>

<script setup lang="ts">
const props = defineProps({
    text: String
});
</script>