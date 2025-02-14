'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Stage.hasMany(models.Set, {foreignKey: 'stage'})
    }
  }
  Stage.init({
    location: DataTypes.STRING,
    seatsAvailable: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stage',
  });
  return Stage;
};