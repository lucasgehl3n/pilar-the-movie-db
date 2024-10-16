<template>
    <transition name="fade">
        <template v-if="moviesStore.loading">
            <LoadingSkeletonGrid></LoadingSkeletonGrid>
        </template>
        <template v-else-if="moviesStore.error">
            <ErrorScreen></ErrorScreen>
        </template>
        <template v-else>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:px-28 lg:py-10">
                <div v-for="(movie, i) in moviesStore.movies"
                    class="h-full w-full flex sticky items-stretch p-8 sm:p-3">
                    <CardMovie :movie="movie"></CardMovie>
                </div>
            </div>
        </template>
    </transition>
</template>

<script setup lang="ts">
import ErrorScreen from '../../_components/ErrorScreen.vue';
import CardMovie from '../../_components/Utils/Card/CardMovie.vue'
import LoadingSkeletonGrid from '../../_components/Utils/LoadingSkeletonGrid.vue';
import { useMoviesStore } from '../../stores/movies';
import { onMounted } from 'vue';

const moviesStore = useMoviesStore();
onMounted(async () => {
    await moviesStore.fetchMovies();
});
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}
</style>