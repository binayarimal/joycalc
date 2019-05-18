'use strict';
module.exports = (sequelize, DataTypes) => {
  var Activity = sequelize.define('Activity', {
    activity:{
      type: DataTypes.TEXT,
      allowNull:false
    },
    userId:{
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {});
  Activity.associate = function(models) {

        Activity.hasMany(models.Score, {
          foreignKey: "activityId",
          onDelete: "CASCADE"
        });

      Activity.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE"
      });
  };
  return Activity;
};
