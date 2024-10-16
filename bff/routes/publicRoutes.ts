import { Router, Request, Response, NextFunction } from 'express';
import moviesController from '../controllers/moviesController';

const router = Router();

router.get('/getMovies', (req: Request, res: Response, next: NextFunction) => {
    moviesController.getMoviesList(req, res, next);
});

router.get('/searchMovies', (req: Request, res: Response, next: NextFunction) => {
    moviesController.searchMovie(req, res, next);
});

router.get('/detail', (req: Request, res: Response, next: NextFunction) => {
    moviesController.detailMovie(req, res, next);
});

export default router;