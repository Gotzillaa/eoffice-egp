'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Egp_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Egp_title.hasMany(models.Egp_item, {
        as: 'goodsDetail',
        foreignKey: 'egp_title_id', //fk's egp_item table
        sourceKey: 'id' //pk's egp_titel table
      })
    }
  };
  Egp_item.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    qty: DataTypes.STRING,
    pack: DataTypes.STRING,
    addition_info: DataTypes.STRING,
    price: DataTypes.STRING,
    price_estimate: DataTypes.STRING,
    source: DataTypes.STRING,
    egp_title_id: DataTypes.STRING
  }, {
    tableName: 'egp_item',
    timestamps : false,
    sequelize,
    modelName: 'Egp_item',
  });
  return Egp_item;
};