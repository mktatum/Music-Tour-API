'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Set.belongsTo(models.Band, {foreignKey: {name: 'band'}})
      Set.belongsTo(models.Stage, {foreignKey: {name: 'stage'}})
    }
  }
  Set.init({
    band: DataTypes.INTEGER,
    stage: DataTypes.INTEGER,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Set',
  });
  return Set;
};