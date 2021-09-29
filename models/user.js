'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false,
    },
    password: DataTypes.STRING
  }, {

    tableName: 'user'
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};