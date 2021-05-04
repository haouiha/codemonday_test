import { Course, Teacher } from '../database/models';

export const getAllTeachers = async (req, res) => {
	try {
		const allTeachers = await Teacher.findAll({ include: 'courses' });
		res.send(allTeachers);
	} catch (error) {
		res.status(500).send({ error: 'error' });
	}
};

export const createTeacher = async (req, res) => {
	const { first_name, last_name, date_of_birth } = req.body;
	try {
		const newCourse = await Teacher.create({
			first_name,
			last_name,
			date_of_birth,
		});

		res.send(newCourse);
	} catch (error) {
		res.status(500).send({ error: error.message || error });
	}
};
