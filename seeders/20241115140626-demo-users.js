"use strict";

const bcrypt = require("bcrypt");

{
  import("sequelize-cli").Migration;
}
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "Rizki Taufiq R",
          email: "rizki@example.com",
          password: await bcrypt.hash("rizki123", 10),
          profil: "https://example.com/images/john.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          username: "Taufiq Rizki",
          email: "taufiq@example.com",
          password: await bcrypt.hash("taufiq123", 10),
          profil: "https://example.com/images/john.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
