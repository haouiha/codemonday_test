import express from 'express';

import courseRoutes from './courseRoutes';
import teacherRoutes from './teacherRoutes';

const router = express.Router();

router.get('/status', (req, res) => {
	res.send({
		message: 'OK',
		timestamp: new Date().toISOString(),
	});
});

router.use('/course', courseRoutes);
router.use('/teacher', teacherRoutes);

export default router;
