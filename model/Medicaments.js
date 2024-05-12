const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');

const Medicament = sequelize.define('medicament', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  nom:{
    type: DataTypes.STRING,
    allowNull:false,
  },
  type:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  form:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  IDConsultation:{
    type:DataTypes.INTEGER,
    allowNull:false,
  },


},{
    freezeTableName: true,
    timestamps: false,
});

module.exports = Medicament;