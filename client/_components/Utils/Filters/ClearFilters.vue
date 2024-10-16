<template>
    <a href="#" class="font-medium text-blue-500 hover:underline" @click="onClearFilters">Limpar filtros</a>
</template>

<script setup>
const props = defineProps({
    onClearFilters: Function,
});
</script>