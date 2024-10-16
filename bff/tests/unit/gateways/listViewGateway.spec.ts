import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import axiosClient from '../../../config/axiosClient';
import listViewGateway from '../../../gateways/listViewGateway';
import MovieFilters from '../../../../Structures/Class/MovieFilters';
import { Category } from '../../../../Structures/Enums/Category';

process.env.THE_MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/';
process.env.THE_MOVIE_DB_BEARER_AUTH = 'your_api_key_here';

vi.mock('../../../config/axiosClient', () => ({
    default: {
        get: vi.fn().mockResolvedValue({ data: 'mockData' }),
    }
}));

describe('When calling listViewGateway', () => {
    let filters: MovieFilters;

    beforeEach(() => {
        filters = new MovieFilters(Category.Popular);
        vi.clearAllMocks();
    });

    describe('When calling getListView', () => {
        it('Then calls axiosClient.get with correct URL and params', async () => {
            filters.category = Category.Popular;
            const spy = vi.spyOn(axiosClient, 'get');
            await listViewGateway.getListView(filters);
            const url = `${process.env.THE_MOVIE_DB_BASE_URL as string}3/movie/popular`;
            expect(spy).toHaveBeenCalledWith(url, {
                headers: {
                    Authorization: `Bearer ${process.env.THE_MOVIE_DB_BEARER_AUTH}`,
                },
                params: {
                    language: 'pt-BR',
                    page: 1,
                },
            });
        });

        it('Then returns response from axiosClient.get', async () => {
            const response = await listViewGateway.getListView(filters);
            expect(response).toEqual({ data: 'mockData' });
        });

        it('Then throws error when axiosClient.get fails', async () => {
            const mockError = new Error('mockError');
            vi.spyOn(axiosClient, 'get').mockRejectedValueOnce(mockError);
            await expect(listViewGateway.getListView(filters)).rejects.toThrow(mockError);
        });
    });
    
    describe('When calling searchMovie', () => {
        it('Then calls axiosClient.get with correct URL and params', async () => {
            filters.category = Category.Popular;
            const spy = vi.spyOn(axiosClient, 'get');
            await listViewGateway.searchMovie(filters);
            const url = `${process.env.THE_MOVIE_DB_BASE_URL as string}3/search/movie`;
            expect(spy).toHaveBeenCalledWith(url, {
                headers: {
                    Authorization: `Bearer ${process.env.THE_MOVIE_DB_BEARER_AUTH}`,
                },
                params: {
                    language: 'pt-BR',
                    page: 1,
                    query: 'popular',
                },
            });
        });

        it('Then returns response from axiosClient.get', async () => {
            const response = await listViewGateway.searchMovie(filters);
            expect(response).toEqual({ data: 'mockData' });
        });

        it('Then throws error when axiosClient.get fails', async () => {
            const mockError = new Error('mockError');
            vi.spyOn(axiosClient, 'get').mockRejectedValueOnce(mockError);
            await expect(listViewGateway.searchMovie(filters)).rejects.toThrow(mockError);
        });
    });

    describe('When calling detailMovie', () => {
        it('Then calls axiosClient.get with correct URL and params', async () => {
            filters.category = Category.Popular;
            const spy = vi.spyOn(axiosClient, 'get');
            await listViewGateway.detailMovie(1);
            const url = `${process.env.THE_MOVIE_DB_BASE_URL as string}3/movie/1`;
            expect(spy).toHaveBeenCalledWith(url, {
                headers: {
                    Authorization: `Bearer ${process.env.THE_MOVIE_DB_BEARER_AUTH}`,
                },
                params: {
                    language: 'pt-BR',
                },
            });
        });

        it('Then returns response from axiosClient.get', async () => {
            const response = await listViewGateway.detailMovie(1);
            expect(response).toEqual({ data: 'mockData' });
        });

        it('Then throws error when axiosClient.get fails', async () => {
            const mockError = new Error('mockError');
            vi.spyOn(axiosClient, 'get').mockRejectedValueOnce(mockError);
            await expect(listViewGateway.detailMovie(1)).rejects.toThrow(mockError);
        });
    });

    describe('When calling actorsMovie', () => {
        it('Then calls axiosClient.get with correct URL and params', async () => {
            filters.category = Category.Popular;
            const spy = vi.spyOn(axiosClient, 'get');
            await listViewGateway.actorsMovie(1);
            const url = `${process.env.THE_MOVIE_DB_BASE_URL as string}3/movie/1/credits`;
            expect(spy).toHaveBeenCalledWith(url, {
                headers: {
                    Authorization: `Bearer ${process.env.THE_MOVIE_DB_BEARER_AUTH}`,
                },
                params: {
                    language: 'pt-BR',
                },
            });
        });

        it('Then returns response from axiosClient.get', async () => {
            const response = await listViewGateway.actorsMovie(1);
            expect(response).toEqual({ data: 'mockData' });
        });

        it('Then throws error when axiosClient.get fails', async () => {
            const mockError = new Error('mockError');
            vi.spyOn(axiosClient, 'get').mockRejectedValueOnce(mockError);
            await expect(listViewGateway.actorsMovie(1)).rejects.toThrow(mockError);
        });
    });
});