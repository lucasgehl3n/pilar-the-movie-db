<template>
  <div class="w-full">
    <label for="default-search" class="mb-2 text-sm font-medium sr-only text-white">Search</label>
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <SearchIcon :class="'text-white'"></SearchIcon>
      </div>

      <input type="search" id="default-search" :value="content" @input="$emit('update:content', $event.target.value)"
        class="block w-full p-4 ps-10 text-sm border rounded-lg focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500"
        :placeholder="placeholder" />

      <button type="submit" @click="onSearch"
        class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {{ buttonSearchText }}
      </button>
    </div>
  </div>
</template>

<script setup>
import SearchIcon from '../Icons/SearchIcon.vue';
const props = defineProps({
  placeholder: String,
  content: String,
  buttonSearchText: String,
  onSearch: Function,
});
</script>