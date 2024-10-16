<template>
    <dt class="mb-2 font-semibold leading-none text-white">
        {{ content }}
    </dt>
</template>

<script setup lang="ts">
const props = defineProps({
    content: String
});
</script>