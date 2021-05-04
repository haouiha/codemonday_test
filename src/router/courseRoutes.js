import express from 'express';

import * as controller from '../controllers/course.controller';

const router = express.Router();

router.route('/get_all').get(controller.getAllCourses);
router.route('/create').post(controller.createCourse);

export default router;
