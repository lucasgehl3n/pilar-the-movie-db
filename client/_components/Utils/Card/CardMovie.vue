<template>
    <div class="grid gap-4 w-full h-full" @click="goToDetailMovie">
        <div class="rounded-lg shadow-sm border-gray-700 dark:bg-gray-800">
            <div class="relative h-full w-full">
                <img :src="getMoviePath" class="w-full rounded-lg h-auto" loading="lazy">
                <FooterCard :movie="movie"></FooterCard>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import FooterCard from './FooterCard.vue';
import URLConstants from '../../../_constants/URLConstants'
import { useRouter } from 'vue-router';

const props = defineProps({
    movie: Object
});

const getMoviePath = computed(() => {
    return `${URLConstants.URL_IMAGE_PATH}/w300${props.movie.poster_path}`;
});

const router = useRouter();

const goToDetailMovie = () => {
    router.push(`/details/${props.movie.id}`);
}
</script>

