'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Course extends Model {
		static associate(models) {
			Course.belongsTo(models.Teacher, {
				foreignKey: 'onwer_id',
				as: 'onwer',
				onDelete: 'CASCADE',
			});
		}
	}
	Course.init(
		{
			course_name: DataTypes.STRING,
			course_description: DataTypes.STRING,
			onwer_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Course',
		}
	);
	return Course;
};
