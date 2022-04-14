const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('dietType', {
    ID:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull: false,
      autoIncrement: true,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary:{
      type: DataTypes.TEXT,
      comment:"Summary of diet",
    }
  },{ timestamps: false });
}