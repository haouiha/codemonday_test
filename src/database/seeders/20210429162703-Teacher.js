'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Teachers',
			[
				{
					id: 0,
					first_name: 'John',
					last_name: 'Doe',
					date_of_birth: new Date(),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Teachers', null, {});
	},
};
