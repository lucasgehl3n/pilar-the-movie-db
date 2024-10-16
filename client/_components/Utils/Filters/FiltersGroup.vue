<template>
    <InputSearch :button-search-text="'Pesquisar'" v-model:content="moviesStore.searchContent"
        :onSearch="moviesStore.fetchMovies" :placeholder="'Pesquise pelo nome do filme'">
    </InputSearch>

    <div class="w-full flex">
        <div class="w-3/5">
            <ResultShow v-if="moviesStore.lastValueSearch" :content="moviesStore.lastValueSearch"></ResultShow>
        </div>
        <div class="w-2/5 text-right py-2">
            <ClearFilters v-if="moviesStore.lastValueSearch" :onClearFilters="moviesStore.clearSearch"></ClearFilters>
        </div>
    </div>
</template>

<script setup>
import { useMoviesStore } from '../../../stores/movies';
import InputSearch from './InputSearch.vue';
import ResultShow from './ResultShow.vue';
import ClearFilters from './ClearFilters.vue';

const moviesStore = useMoviesStore();
</script>