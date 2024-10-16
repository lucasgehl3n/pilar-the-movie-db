<template>
    <div class="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-90 text-white p-4 rounded-b-lg">
        <a href="#" class="text-md font-semibold hover:underline">
            {{ movie.title }}
        </a>
        <div class="flex items-center mt-2">
            <Stars :quantity="stars"></Stars>&nbsp;
            <Subtitle :text="subtitle"></Subtitle>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Stars from '../Stars.vue';
import Subtitle from '../Text/Subtitle.vue';

const props = defineProps({
    movie: Object
});

const calculateStars = (vote_average: number): number => {
    return Math.round(vote_average / 2);
};

const stars = computed(() => {
    return calculateStars(props.movie.vote_average);
});

const subtitle = computed(() => {
    return `(${props.movie.vote_count} votos)`;
});
</script>