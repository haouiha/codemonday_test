import { Course, Teacher } from '../database/models';

export const getAllCourses = async (req, res) => {
	try {
		const allCourses = await Course.findAll({ include: 'onwer' });
		res.send(allCourses);
	} catch (error) {
		console.log(`error`, error);
		res.status(500).send({ error: 'error' });
	}
};

export const createCourse = async (req, res) => {
	const { course_name, course_description, onwer_id } = req.body;
	try {
		const courseTeacher = await Teacher.findOne({ where: { id: onwer_id } });
		console.log(`courseTeacher`, courseTeacher);
		if (!courseTeacher) throw { code: 400, error: new Error('invalid onwer_id') };

		const newCourse = await Course.create({
			course_name,
			course_description,
			onwer_id,
		});

		res.send(newCourse);
	} catch (error) {
		if (error.code) {
			return res.status(error.code).send({ error: error.error.message || error });
		}
		res.status(500).send({ error: error.message || error });
	}
};
