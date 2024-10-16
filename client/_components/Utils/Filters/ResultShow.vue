<template>
    <div class="w-full text-white py-2">
        Exibindo resultados para: <span class="font-bold">{{ props.content }}</span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    content: String
});
</script>
