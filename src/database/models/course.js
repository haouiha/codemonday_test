'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Course extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
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
