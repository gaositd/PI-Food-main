const { DataTypes } = require('sequelize');
const uuid = require('uuid');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("recipe", {
    id:{
      // type:DataTypes.UUID,
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      // default:DataTypes.UUIDV4,
      autoIncrement:true,
    },
    name: {//dato que ya estaba
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image:{
      type:DataTypes.TEXT,
      allowNull: false,
      default:'https://images.vexels.com/media/users/3/249295/isolated/lists/6b84c3546f5ab87ecf81c577245c13ae-ramen-svg-2-1.png',
      comment:'https://www.freepng.es/png-vft0iv/download.html'
    },
    healthyLevel:{
      type: DataTypes.INTEGER,
      default:0.00,
    },
    summary:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthScore:{
      type: DataTypes.INTEGER,
      default:0.00,
    },
    steps:{
      type: DataTypes.TEXT,
    },
    diets:{
      type: DataTypes.TEXT,
    },
    dishType:{
      type:DataTypes.TEXT,
    },
    createInDb:{
      type: DataTypes.BOOLEAN,
      default:true,
      comment: 'Create in internal DB',
    }
  },{ timestamps: false });
};
