const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('dietType', {
    ID:{
      type:DataTypes.STRING,
      primaryKey:true
    },
    name:{
      type: DataTypes.STRING,
    }
  },{ timestamps: false });
}