"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("accounts", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: "",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable("accounts");
  },
};
