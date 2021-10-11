'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fruit = sequelize.define('Fruit', {
    Name: DataTypes.STRING,
    img: DataTypes.TEXT,
    
  }, {
    tableName: 'Fruit',
    timestamps: false


  });
  Fruit.associate = function(models) {
    // associations can be defined here
  };
  return Fruit;
};