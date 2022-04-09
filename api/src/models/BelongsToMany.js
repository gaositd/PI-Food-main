const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('belongsToMany', {},{ timestamps: false });
};