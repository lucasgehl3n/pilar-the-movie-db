import { useRuntimeConfig } from '#app';

const config = useRuntimeConfig();

export default {
    API_MOVIES_LIST: `${config.public.BASE_URL_BACKEND}/api/getMovies`,
    API_MOVIES_SEARCH: `${config.public.BASE_URL_BACKEND}/api/searchMovies`,
    API_MOVIE_DETAIL: `${config.public.BASE_URL_BACKEND}/api/detail`,
    URL_IMAGE_PATH: 'https://image.tmdb.org/t/p/',
}