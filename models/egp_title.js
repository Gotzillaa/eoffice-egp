'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Egp_title extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Egp_title.init({
    methodId: DataTypes.STRING,
    typeCase: DataTypes.STRING,
    goodsId: DataTypes.STRING,
    projectGovStatus: DataTypes.STRING,
    planId: DataTypes.STRING,
    budgetYear: DataTypes.STRING,
    oldIdFrom: DataTypes.STRING,
    projectName: DataTypes.STRING,
    sourceBudget: DataTypes.STRING,
    sourceBudgetIncome: DataTypes.STRING,
    sourceNonbudget: DataTypes.STRING,
    sourceNonbudgetIncome: DataTypes.STRING,
    consider_method: DataTypes.STRING,
    method_paid: DataTypes.STRING
  }, {
    tableName: 'egp_title',
    timestamps : false,
    sequelize,
    modelName: 'Egp_title',
  });
  return Egp_title;
};