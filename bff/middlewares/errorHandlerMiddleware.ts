import { Request, Response, NextFunction } from 'express';

const errorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    const now = new Date();
    const formattedTime = `${now.toLocaleDateString()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    console.error(`[${formattedTime}][${req.method}] ${req.url} - Error:`, err);
    res.status(500).send({ message: 'An error occurred while processing your request.', error: true });
};

export default errorHandlerMiddleware;