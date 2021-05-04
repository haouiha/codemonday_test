import express from 'express';

import * as controller from '../controllers/teacher.controller';

const router = express.Router();

router.route('/get_all').get(controller.getAllTeachers);
router.route('/create').post(controller.createTeacher);

export default router;
