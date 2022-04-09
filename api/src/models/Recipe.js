const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    ID:{
      type:DataTypes.STRING,
      allowNull:false,
      primaryKey:true
    },
    name: {//dato que ya estaba
      type: DataTypes.STRING,
      allowNull: false,
    },
    plateResume:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    points:{
      type: DataTypes.INTEGER,
    },
    healthyLevel:{
      type: DataTypes.INTEGER,
    },
    stepByStep:{
      type: DataTypes.STRING,
    }
  },{ timestamps: false });
};
