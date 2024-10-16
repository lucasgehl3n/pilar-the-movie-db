import { Request, Response, NextFunction } from 'express';
import listViewGateway from '../gateways/listViewGateway';
import MovieFilters from '../../Structures/Class/MovieFilters';
import { Category } from '../../Structures/Enums/Category';

class MoviesController {
    async getMoviesList(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const filters: MovieFilters = {
                query: req.query.query as string,
                category: req.query.category as Category,
            }
            const result = await listViewGateway.getListView(filters);
            res.send(result.data);
        } catch (error) {
            next(error);
        }
    }
    async searchMovie(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const filters: MovieFilters = {
                query: req.query.query as string,
                category: Category.Popular,
            }
            const result = await listViewGateway.searchMovie(filters);
            res.send(result.data);
        } catch (error) {
            next(error);
        }
    }

    async detailMovie(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = req.query.id as unknown as number;
            const movie = await listViewGateway.detailMovie(id);
            const actors = await listViewGateway.actorsMovie(id)
            const result = {
                movie: movie.data,
                actors: actors.data,
            };
            res.send(result);
        } catch (error) {
            next(error);
        }
    }
}

export default new MoviesController();