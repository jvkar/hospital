const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');

const Consultation = sequelize.define('consultation', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  IDMedeccin:{
    type: DataTypes.INTEGER,
    allowNull:false,
  },
  date:{
    type:DataTypes.DATE,
    allowNull:false,
  },
  observation:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  IDbebe:{
    type:DataTypes.INTEGER,
    allowNull:false,
  }

},{
    freezeTableName: true,
    timestamps: false,
});

module.exports = Consultation;