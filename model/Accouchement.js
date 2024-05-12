const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');

const Accouchement = sequelize.define('accouchement', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  DateAccouchement:{
    type: DataTypes.DATE,
    allowNull:false,
  },
  Heure:{
    type:DataTypes.TIME,
    allowNull:false,
  },
  Accoucheur:{
    type:DataTypes.INTEGER,
    allowNull:false,
  },
  Aspect:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  Anomailes:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  Placenta:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  Membranes:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  Cardon:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  ScoreApgar:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  Poids:{
    type:DataTypes.INTEGER,
    allowNull:false,
  },
  Taille:{
    type:DataTypes.INTEGER,
    allowNull:false
  },

},{
    freezeTableName: true,
    timestamps: false,
});

module.exports = Accouchement;