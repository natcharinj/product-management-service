export default (sequelize, DataTypes) => {
	return sequelize.define("product", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false
		},
		price: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		}
	});
};
