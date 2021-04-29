import express from 'express';

import courseRouter from './courses';

const apiV1Router = express.Router();

apiV1Router.use('/course', courseRouter);

export default apiV1Router;
