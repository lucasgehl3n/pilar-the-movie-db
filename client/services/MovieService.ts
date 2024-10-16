import axios from 'axios';
import URLConstants from '../_constants/URLConstants';
import MovieFilters from '../../Structures/Class/MovieFilters'

class MovieService {
    static async getMovies(filters: MovieFilters) {
        try {
            const response = await axios.get(URLConstants.API_MOVIES_LIST, {
                params: {
                    category: filters.category,
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching movies:', error);
            return {
                error: true,
            }
        }
    }
    static async searchMovies(filters: MovieFilters) {
        try {
            const response = await axios.get(URLConstants.API_MOVIES_SEARCH, {
                params: {
                    query: filters.query,
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching search movies:', error);
            return {
                error: true,
            }
        }
    }
    static async detailMovie(id: number) {
        try {
            const response = await axios.get(URLConstants.API_MOVIE_DETAIL, {
                params: {
                    id,
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching search movies:', error);
            return {
                error: true,
            }
        }
    }
}

export default MovieService;