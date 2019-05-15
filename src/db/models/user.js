'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.TEXT,
      allowNull:false

    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
      isEmail: { msg: "must be a valid email" }
    }
  },
    password: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
