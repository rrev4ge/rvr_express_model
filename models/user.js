'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    

    static associate(models) {
      User.hasMany(models.Task, { foreignKey: 'userId', onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
    }
  };
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    passwordHash: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATEONLY,
    },
    gender: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'User',
    underscored: true
  });
  return User;
};