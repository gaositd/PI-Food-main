const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('dietType', {
    ID:{
      type:DataTypes.INTEGER,
      primaryKey:true,
    },
    name:{
      type: DataTypes.STRING,
    },
    summary:{
      type: DataTypes.TEXT,
      comment:"Summary of diet",
    }
  },{ timestamps: false });
}