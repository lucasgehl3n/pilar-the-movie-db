import { defineStore } from 'pinia'
import MovieService from '../services/MovieService';
import MovieFilters from '../../Structures/Class/MovieFilters';
import { Category } from '../../Structures/Enums/Category';
import Movie from '../../Structures/Class/Movie';

interface MoviesState {
  movies: Movie[];
  searchContent: string;
  loading: boolean;
  error: boolean;
  lastValueSearch: string;
  selectedCategory: Category;
}

export const useMoviesStore = defineStore<'movies', MoviesState>({
  id: 'movies',
  state: (): MoviesState => ({
    movies: [],
    searchContent: '',
    loading: false,
    error: false,
    lastValueSearch: '',
    selectedCategory: Category.Popular,
  }),
  actions: {
    async fetchMovies() {
      this.setLastValueSearch(this.searchContent);
      if (this.searchContent) {
        const filters: MovieFilters = {
          query: this.searchContent,
          category: this.selectedCategory
        }
        return this.searchMovies(filters);
      }
      this.getMovieList();
    },
    async searchMovies(filters: MovieFilters) {
      this.loading = true;
      const request = await MovieService.searchMovies(filters);
      this.loading = false;

      if (request.error) {
        this.error = true;
        this.movies = [];
        return;
      }

      this.movies = request.results;
    },
    async getMovieList() {
      this.loading = true;
      const filters: MovieFilters = {
        category: this.selectedCategory,
        query: ''
      }
      const request = await MovieService.getMovies(filters);
      this.loading = false;

      if (request.error) {
        this.error = true;
        this.movies = [];
        return;
      }

      this.movies = request.results;
    },
    setLastValueSearch(content: string) {
      this.lastValueSearch = content;
    },
    setCurrentTab(index: number) {
      switch (index) {
        case 1:
          this.selectedCategory = Category.Trending;
          break;
        default:
          this.selectedCategory = Category.Popular;
          break;
      }

      this.fetchMovies();
    },
    clearSearch() {
      this.searchContent = '';
      this.fetchMovies();
    }
  },
});