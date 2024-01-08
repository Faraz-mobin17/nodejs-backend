const express = require("express");

// Import user controller functions
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateAllUser,
} = require("../controller/user.controller");

// Create an Express router
const router = express.Router();

// Route to handle GET (retrieve all users) and POST (create user) requests
router
  .route("/")
  .get(handleGetAllUsers) // Retrieve all users
  .post(handleCreateAllUser); // Create a new user

// Route to handle GET (retrieve user by ID), PATCH (update user by ID), and DELETE (delete user by ID) requests
router
  .route("/:id")
  .get(handleGetUserById) // Retrieve user by ID
  .patch(handleUpdateUserById) // Update user by ID
  .delete(handleDeleteUserById); // Delete user by ID

// Export the router for use in other modules
module.exports = router;
