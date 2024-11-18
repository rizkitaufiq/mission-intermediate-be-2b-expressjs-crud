"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
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
          username: "Taufiq Rizki R",
          email: "taufiq@example.com",
          password: await bcrypt.hash("rizki123", 10),
          profil: "https://example.com/images/john.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
