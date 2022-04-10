const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    ID:{
      type:DataTypes.STRING,
      allowNull:false,
      primaryKey:true,
    },
    name: {//dato que ya estaba
      type: DataTypes.STRING,
      allowNull: false,
    },
    plateResume:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type:DataTypes.STRING,
      allowNull: false,
      default:'https://images.vexels.com/media/users/3/249295/isolated/lists/6b84c3546f5ab87ecf81c577245c13ae-ramen-svg-2-1.png',
      comment:'https://www.freepng.es/png-vft0iv/download.html'
    },
    points:{
      type: DataTypes.INTEGER,
    },
    healthyLevel:{
      type: DataTypes.INTEGER,
    },
    stepByStep:{
      type: DataTypes.STRING,
    },
    creteInDb:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default:true,
      comment: 'Create in internal DB',
    }
  },{ timestamps: false });
};
