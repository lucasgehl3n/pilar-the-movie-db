<template>
    <dd class="mb-4 text-gray-200 sm:mb-5">
        {{ content }}
    </dd>
</template>

<script setup lang="ts">
const props = defineProps({
    content: String | Number
});
</script>