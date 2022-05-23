"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("campaigns", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      account_id: {
        type: DataTypes.UUID,
        references: {
          model: "accounts",
          key: "id",
        },
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: "",
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable("campaigns");
  },
};
