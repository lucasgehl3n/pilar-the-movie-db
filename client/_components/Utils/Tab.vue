<template>
  <ul class="flex flex-wrap text-sm font-medium text-center text-gray-400">
    <li v-for="(tab, index) in tabs" :key="index" class="me-2">
      <a href="#" class="inline-block px-4 py-3 rounded-lg" :class="{
        'text-white bg-blue-600 active': selectedTab === index,
        'hover:bg-gray-800 hover:text-white': selectedTab !== index
      }" @click.prevent="selectTab(index)" :aria-current="selectedTab === index ? 'page' : undefined">
        {{ tab }}
      </a>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  tabs: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['tab-changed']);

const selectedTab = ref(0);

const selectTab = (index) => {
  selectedTab.value = index;
  emit('tab-changed', index);
};

onMounted(() => {
  emit('tab-changed', 0);
});
</script>