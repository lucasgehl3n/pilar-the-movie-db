<template>
  <div class="px-4 mx-auto max-w-6xl lg:py-16 text-white h-full" v-if="movie">
    <div @click="goToHome" class="cursor-pointer mb-4 pt-5 sm:pt-0">
      <IconBack></IconBack>
    </div>
    <h2 class="mb-2 text-xl font-semibold leading-none md:text-4xl">{{ movie.title }}</h2>
    <div class="w-full pt-5">
      <div class="w-full flex flex-col lg:flex-row">
        <div class="w-full max-w-80">
          <img :src="getMoviePath" :alt="movie.title" loading="lazy" class="h-96 w-full rounded-lg">
        </div>
        <div class="flex flex-col pl-0 lg:pl-5 mt-5">
          <dl>
            <template v-if="movie.overview">
              <ListItemTitle content="Sinopse"></ListItemTitle>
              <ListItemContent :content="movie.overview"></ListItemContent>
            </template>

            <dt class="mb-2 font-semibold leading-none text-white">Classificação</dt>
            <dd class="mb-4 text-gray-200 sm:mb-5">
              <Stars :quantity="stars" v-if="stars > 0"></Stars>
              <p v-else-if="movie.vote_count > 0">Abaixo de uma estrela</p>
              <p v-else>Não avaliado</p>
            </dd>

            <ListItemTitle content="Número de votos"></ListItemTitle>
            <ListItemContent :content="movie.vote_count"></ListItemContent>

            <ListItemTitle content="Lançamento"></ListItemTitle>
            <ListItemContent :content="movie.release_date"></ListItemContent>

            <ListItemTitle content="Status"></ListItemTitle>
            <ListItemContent :content="movie.status"></ListItemContent>
          </dl>
        </div>
      </div>

      <dt class="mt-2 font-semibold leading-none text-white">Elenco</dt>
      <HorizontalImageList :resumed-actors="resumedActors"></HorizontalImageList>
      <button v-if="buttonShowAllActors" class="mt-2 p-3 bg-blue-700 rounded-lg" @click="showAllActors">Ver
        mais</button>
    </div>
  </div>
  <div v-else class="p-36">
    <LoadingSkeleton></LoadingSkeleton>
  </div>
</template>

<script setup lang="ts">
import Stars from '../../_components/Utils/Stars.vue';
import LoadingSkeleton from '../../_components/Utils/LoadingSkeleton.vue';
import IconBack from '../../_components/Utils/Icons/IconBack.vue';
import ListItemTitle from '../../_components/Utils/Text/ListItemTitle.vue';
import ListItemContent from '../../_components/Utils/Text/ListItemContent.vue';
import HorizontalImageList from '../../_components/Utils/Image/HorizontalImageList.vue';
import Movie from '../../../Structures/Class/Movie';
import Actor from '../../../Structures/Class/Actor';
import MovieService from '../../services/MovieService';
import URLConstants from '../../_constants/URLConstants';
import { useRouter, useRoute } from 'vue-router';
import { ref, computed, onMounted } from 'vue';

// Reactive references
const movie = ref<Movie | null>(null);
const resumedActors = ref<Actor[]>([]);
const completedActors = ref<Actor[]>([]);

// Routing
const route = useRoute();
const router = useRouter();

// Computed properties
const getMoviePath = computed((): string => {
  return movie.value ? `${URLConstants.URL_IMAGE_PATH}/w500${movie.value.poster_path}` : '';
});

const buttonShowAllActors = computed((): boolean => {
  return (resumedActors.value || []).length <= 8;
});

const stars = computed((): number => {
  return movie.value ? calculateStars(movie.value.vote_average) : 0;
});

// Helper functions
const calculateStars = (vote_average: number): number => {
  return Math.round(vote_average / 2);
};

const showAllActors = (): void => {
  resumedActors.value = completedActors.value;
};

const goToHome = (): void => {
  router.push('/');
};

// Lifecycle hook
onMounted(async () => {
  const id = parseInt(route.params.id as string, 10);
  const request = await MovieService.detailMovie(id);
  movie.value = request.movie;
  if (request.actors && request.actors.cast) {
    resumedActors.value = request.actors.cast.slice(0, 8);
    completedActors.value = request.actors.cast;
  }
});
</script>