import { describe, it, expect, vi, beforeEach, afterAll } from 'vitest';
import { Request, Response, NextFunction } from 'express';
import errorHandlerMiddleware from '../../../middlewares/errorHandlerMiddleware';

describe('When Error Handler Middleware is called', () => {
    let req: Request;
    let res: Response;
    let next: NextFunction;
    let error: Error;
    let consoleSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
        req = {
            method: 'GET',
            url: '/test',
        } as Request;

        res = {
            status: vi.fn().mockReturnThis(),
            send: vi.fn(),
        } as unknown as Response;

        next = vi.fn() as NextFunction;
        error = new Error('Test error');

        consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterAll(() => {
        consoleSpy.mockRestore();
    });

    it('Then had logs the error with the correct message', () => {
        errorHandlerMiddleware(error, req, res, next);

        const now = new Date();
        const formattedTime = `${now.toLocaleDateString()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

        expect(consoleSpy).toHaveBeenCalledWith(`[${formattedTime}][${req.method}] ${req.url} - Error:`, error);
    });

    it('Then returns a 500 status', () => {
        errorHandlerMiddleware(error, req, res, next);

        expect(res.status).toHaveBeenCalledWith(500);
    });

    it('Then returns the correct error message', () => {
        errorHandlerMiddleware(error, req, res, next);

        expect(res.send).toHaveBeenCalledWith({
            message: 'An error occurred while processing your request.',
            error: true,
        });
    });
});