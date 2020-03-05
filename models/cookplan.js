'use strict';
module.exports = (sequelize, DataTypes) => {

  class CookPlan extends sequelize.Sequelize.Model {
    static associate(models) {
      CookPlan.belongsTo(models.User);
    }
  }

  CookPlan.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    goal: {
      type: DataTypes.STRING
    },
    cooking_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN
    },
    UserId: {
      type: DataTypes.INTEGER
    },
    recipe_link: {
      type: DataTypes.STRING
    },
    video_link: {
      type: DataTypes.STRING
    },
    result_link: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'CookPlan'
  })

  return CookPlan;
};