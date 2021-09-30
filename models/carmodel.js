'use strict';
module.exports = (sequelize, DataTypes) => {
  const CarModel = sequelize.define('CarModel', {
    year: DataTypes.NUMBER,
    make: DataTypes.STRING(50),
    model: DataTypes.STRING(50)
  }, {

    tableName:'VehicleModelYear',
    timestamps: false
  });
  CarModel.associate = function(models) {
    // associations can be defined here
  };
  return CarModel;
};

