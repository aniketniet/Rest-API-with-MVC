const User = require("../models/users");

async function handleGetAllUsers(req, res) {
  const allUsers = await User.find({});
  return res.json(allUsers);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.json(user);
}

async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { mobile: "Hardcode No" });
  return res.json({ message: "User updated" });
}

async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ message: "User deleted successfully" });
}

async function handleCreateUser(req, res) {
  const body = req.body;
  if (!body.email || !body.mobile || !body.password) {
    return res.status(400).json({ message: "Email and Mobile is required" });
  }
  const result = await User.create(body);
  return res
    .status(201)
    .json({ message: "User created successfully", id: result._id });
}
module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
};
