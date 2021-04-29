import { Course } from '../../../database/models';

const createCourse = async (req, res) => {
	try {
		const allCourses = await Course.findAll({ include: 'onwer' });
		console.log(`allCourses`, allCourses);
		res.send(allCourses);
	} catch (error) {
		console.log(`error`, error);
		res.status(500).send({ error: 'error' });
	}
};

export default createCourse;
