<template>
    <div class="px-10 lg:px-28 pt-10 sm:w-full lg:w-1/3">
        <div class="w-full h-auto">
          <FiltersGroup></FiltersGroup>
          <div class="pt-5">
            <Tab :tabs="tabArray" @tab-changed="moviesStore.setCurrentTab"></Tab>
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
import Tab from '../../_components/Utils/Tab.vue';
import FiltersGroup from '../../_components/Utils/Filters/FiltersGroup.vue';
const tabArray = ['Popular', 'Tendência'];
import { useMoviesStore } from '../../stores/movies';

const moviesStore = useMoviesStore();
</script>