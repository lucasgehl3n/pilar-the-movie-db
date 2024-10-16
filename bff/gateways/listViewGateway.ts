import axiosClient from '../config/axiosClient';
import MovieFilters from '../../Structures/Class/MovieFilters';
import { Category } from '../../Structures/Enums/Category';

const getHeaders = () => ({
    headers: {
        Authorization: 'Bearer ' + process.env.THE_MOVIE_DB_BEARER_AUTH,
    },
});

const getLanguage = () => 'pt-BR';

const getUrlListView = (filters: MovieFilters) => {
    const baseUrl = `${process.env.THE_MOVIE_DB_BASE_URL as string}3/`;
    if(filters.category == Category.Popular){
        return `${baseUrl}movie/popular`;
    }
    return `${baseUrl}trending/movie/day`;
};

const getListView = async (filters: MovieFilters) => {
    try {
        const url = getUrlListView(filters);
        const response = await axiosClient.get(url, {
            ...getHeaders(),
            params: {
                language: getLanguage(),
                page: 1,
            }
        });
        return response;
    } catch (error) {
        console.error('Error making request:', error);
        throw error;
    }
};

const searchMovie = async (filters: MovieFilters) => {
    try {
        const url = `${process.env.THE_MOVIE_DB_BASE_URL as string}3/search/movie`;
        const response = await axiosClient.get(url, {
            ...getHeaders(),
            params: {
                language: getLanguage(),
                page: 1,
                query: filters.query,
            }
        });
        return response;
    } catch (error) {
        console.error('Error making request:', error);
        throw error;
    }
};

const detailMovie = async (id: number) => {
    try {
        const url = `${process.env.THE_MOVIE_DB_BASE_URL as string}3/movie/${id}`;
        const response = await axiosClient.get(url, {
            ...getHeaders(),
            params: {
                language: getLanguage(),
            }
        });
        return response;
    } catch (error) {
        console.error('Error making request details:', error);
        throw error;
    }
};

const actorsMovie = async (id: number) => {
    try {
        const url = `${process.env.THE_MOVIE_DB_BASE_URL as string}3/movie/${id}/credits`;
        const response = await axiosClient.get(url, {
            ...getHeaders(),
            params: {
                language: getLanguage(),
            }
        });
        return response;
    } catch (error) {
        console.error('Error making request details:', error);
        throw error;
    }
};

export default { getListView, searchMovie, detailMovie, actorsMovie };