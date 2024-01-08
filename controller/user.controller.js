const User = require("../model/user.model");

/**
 * Handles the retrieval of all users from the database.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.status(200).json(allDbUsers);
}

/**
 * Handles the retrieval of a user by their ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ msg: "User not found" });
  return res.json(user);
}

/**
 * Handles the update of a user by their ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
  return res.status(201).json({ status: "success" });
}

/**
 * Handles the deletion of a user by their ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.status(200).json({ msg: "success" });
}

/**
 * Handles the creation of a new user.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function handleCreateAllUser(req, res) {
  const body = req.body;

  // Validate required fields
  if (
    !body ||
    !body.first_name ||
    !body.email ||
    !body.last_name ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  return res.status(201).json({ msg: "success", id: result._id });
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateAllUser,
};
