'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('egp_titles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      methodId: {
        type: Sequelize.STRING
      },
      typeCase: {
        type: Sequelize.STRING
      },
      goodsId: {
        type: Sequelize.STRING
      },
      projectGovStatus: {
        type: Sequelize.STRING
      },
      planId: {
        type: Sequelize.STRING
      },
      budgetYear: {
        type: Sequelize.STRING
      },
      oldIdFrom: {
        type: Sequelize.STRING
      },
      projectName: {
        type: Sequelize.STRING
      },
      sourceBudget: {
        type: Sequelize.STRING
      },
      sourceBudgetIncome: {
        type: Sequelize.STRING
      },
      sourceNonbudget: {
        type: Sequelize.STRING
      },
      sourceNonbudgetIncome: {
        type: Sequelize.STRING
      },
      consider_method: {
        type: Sequelize.STRING
      },
      method_paid: {
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
    await queryInterface.dropTable('egp_titles');
  }
};