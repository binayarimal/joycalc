'use strict';
module.exports = (sequelize, DataTypes) => {
  var Score = sequelize.define('Score', {
    score: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    date: {
      type: DataTypes.DATE,
      allowNull:false
    },
    activityId:{
      type:DataTypes.INTEGER,
      allowNull:false,
    }
  }, {});
  Score.associate = function(models) {
          Score.belongsTo(models.Activity, {
            foreignKey: "activityId",
            onDelete: "CASCADE"
          });
  };
  return Score;
};
