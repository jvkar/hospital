const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Lname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Fname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Sexe: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Etablissement: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Validation: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{
    freezeTableName: true,
    timestamps: true,
});

module.exports = User;