"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("clicks", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      campaigns_id: {
        type: DataTypes.UUID,
        references: {
          model: "accounts",
          key: "id",
        },
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable("clicks");
  },
};
