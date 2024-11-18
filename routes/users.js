const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);

// router.get("/users/:id", userController.getUserById);

router.post("/", userController.createUser);

// router.put("/users/:id", userController.updateUser);

// router.delete("/users/:id", userController.deleteUser);

module.exports = router;
