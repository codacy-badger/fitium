import express from 'express';
import helmet from 'helmet';
import { loggerStream } from './utilities/logger';

const app = express();

/**
 * Middlewares
*/
app.use(require('morgan')(':method :url :status :res[content-length] - :response-time ms', { stream: loggerStream }));

app.use(helmet());

export default app;
