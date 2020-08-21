'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('egp_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.STRING
      },
      pack: {
        type: Sequelize.STRING
      },
      addition_info: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      price_estimate: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      egp_title_id: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('egp_items');
  }
};