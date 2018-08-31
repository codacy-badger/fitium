import express from 'express';
import { loggerStream } from './utilities/logger';

const app = express();

app.use(require('morgan')(':method :url :status :res[content-length] - :response-time ms', { stream: loggerStream }));

export default app;
