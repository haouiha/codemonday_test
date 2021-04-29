'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Teacher extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Teacher.hasMany(models.Course, {
				foreignKey: 'id',
				as: 'courses',
				onDelete: 'CASCADE',
			});
		}
	}
	Teacher.init(
		{
			first_name: DataTypes.STRING,
			last_name: DataTypes.STRING,
			date_of_birth: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: 'Teacher',
		}
	);
	return Teacher;
};
