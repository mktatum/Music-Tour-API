'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Band.hasMany(models.Set, {foreignKey: 'band'})
    }
  }
  Band.init({
    Name: DataTypes.STRING,
    Genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Band;
};