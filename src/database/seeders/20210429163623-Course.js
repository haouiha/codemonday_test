'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Courses',
			[
				{
					id: 0,
					course_name: 'Math',
					course_description: '1+1',
					onwer_id: 0,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Courses', null, {});
	},
};
