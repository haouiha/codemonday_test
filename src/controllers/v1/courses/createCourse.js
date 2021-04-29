import { Course, Teacher } from '../../../database/models';

const createCourse = async (req, res) => {
	const { course_name, course_description, onwer_id } = req.body;
	try {
		const courseTeacher = await Teacher.findOne({ where: { id: onwer_id } });
		if (!courseTeacher) throw new Error('invalid teacher_id');
		// console.log(`courseTeacher`, courseTeacher);

		const newCourse = await Course.create({
			course_name,
			course_description,
			onwer_id,
		});

		// console.log(`newCourse`, newCourse);
		res.send(newCourse);
	} catch (error) {
		console.log(`error`, error);
		res.status(500).send({ error: error.message || error });
	}
};

export default createCourse;
