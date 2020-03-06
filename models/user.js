'use strict';
const { hashPassword } = require('../helpers/hash')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model { }
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Please input email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6],
          msg: 'Min. 6 characters'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (User, options) => {
        User.password = hashPassword(User.password)
      }
    },
    sequelize,
    modelName: 'User'
    // options
  });
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.CookPlan)
  };
  return User;
};