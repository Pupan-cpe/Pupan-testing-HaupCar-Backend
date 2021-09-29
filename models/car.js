'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    licensePate: DataTypes.STRING,
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    annotation: DataTypes.STRING
  }, {
    tableName: 'Car'

  });
  Car.associate = function(models) {
    // associations can be defined here
  };
  return Car;
};