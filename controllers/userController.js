const { User } = require("../models");
// const db = require("../../db/db");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      console.log("Fetching users from the database...");
      const users = await User.findAll();
      console.log("Users fetched:", users);
      res.status(200).json(users);
    } catch (error) {
      console.error("Error in getAllUsers:", error);
      res.status(500).json({ message: error.message });
    }
  },

  createUser: async (req, res) => {
    try {
      const { username, email, password, profil } = req.body;
      const user = await User.create({ username, email, password, profil });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
