import express from 'express';

import createCourse from './createCourse';
import getAllCourses from './getAllCourses';

const courseRouter = express.Router();

courseRouter.post('/getall', getAllCourses);
courseRouter.post('/create', createCourse);

export default courseRouter;
