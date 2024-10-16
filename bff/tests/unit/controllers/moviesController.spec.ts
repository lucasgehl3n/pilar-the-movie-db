import { describe, it, expect, vi, Mock, beforeEach } from 'vitest';
import { Request, Response, NextFunction } from 'express';
import MoviesController from '../../../controllers/moviesController';
import listViewGateway from '../../../gateways/listViewGateway';
import { Category } from '../../../../Structures/Enums/Category';


vi.mock("../../../gateways/listViewGateway", async (importOriginal) => {
    const mod = await importOriginal<typeof import('../../../gateways/listViewGateway')>()
    return {
        default:{
            ...mod,
            getListView: vi.fn().mockResolvedValue({ data: [{ id: 1, title: 'Test Movie' }] }),
            searchMovie: vi.fn().mockResolvedValue({ data: [{ id: 2, title: 'Search Movie' }] }),
            detailMovie: vi.fn().mockResolvedValue({ data: { id: 3, title: 'Detail Movie' } }),
            actorsMovie: vi.fn().mockResolvedValue({ data: [{ id: 1, name: 'Actor 1' }] }),
        }
    }
})


describe('When testing moviesController', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: NextFunction;

    beforeEach(() => {
        req = {
            query: {},
        };
        res = {
            send: vi.fn(),
        };
        next = vi.fn();
        vi.clearAllMocks();
    });

    describe('And method getMoviesList has been called', () => {
        it('Then return movie list based on filters', async () => {
            req.query = { query: 'test', category: Category.Popular };
            const spy = vi.spyOn(listViewGateway, 'getListView');

            await MoviesController.getMoviesList(req as Request, res as Response, next);

            expect(spy).toHaveBeenCalledWith({
                query: 'test',
                category: Category.Popular,
            });
            expect(res.send).toHaveBeenCalledWith([{ id: 1, title: 'Test Movie' }]);
        });
    });

    describe('And method searchMovie has been called', () => {
        beforeEach(() => {
            vi.clearAllMocks();
        });

        it('Then return search results for movies', async () => {
            req.query = { query: 'search' };
            const spy = vi.spyOn(listViewGateway, 'searchMovie');

            await MoviesController.searchMovie(req as Request, res as Response, next);

            expect(spy).toHaveBeenCalledWith({
                query: 'search',
                category: Category.Popular,
            });
            expect(res.send).toHaveBeenCalledWith([{ id: 2, title: 'Search Movie' }]);
        });
    });

    describe('And detailMovie method was called', () => {
        beforeEach(() => {
            req.query = { id: '3' };
        });

        it('Then call detailMovie with correct id', async () => {
            const spyDetailMovie = vi.spyOn(listViewGateway, 'detailMovie');
            await MoviesController.detailMovie(req as Request, res as Response, next);
            expect(spyDetailMovie).toHaveBeenCalledWith("3");
        });
    
        it('Then call actorsMovie with correct id', async () => {
            const spyActorsMovie = vi.spyOn(listViewGateway, 'actorsMovie');
            await MoviesController.detailMovie(req as Request, res as Response, next);
            expect(spyActorsMovie).toHaveBeenCalledWith("3");
        });
    
        it('Then return movie details and actors', async () => {
            await MoviesController.detailMovie(req as Request, res as Response, next);
            expect(res.send).toHaveBeenCalledWith({
                movie: { id: 3, title: 'Detail Movie' },
                actors: [{ id: 1, name: 'Actor 1' }],
            });
        });
    });
});