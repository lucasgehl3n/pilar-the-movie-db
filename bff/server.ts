import express, { Application } from 'express';
import bodyParser from 'body-parser';
import publicRoutes from './routes/publicRoutes';
import dotenv from 'dotenv';
import cors from 'cors';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';

dotenv.config();

const app: Application = express();

// Adicione o middleware CORS antes das rotas
app.use(cors());

app.use(bodyParser.json());

app.use('/api', publicRoutes);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});