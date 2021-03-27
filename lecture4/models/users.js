const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

const createUser = (user) => {
  // const newUser = new User(user);
  // return newUser.save()
  return new User(user).save();
};

const getUsers = () => {
  return User.find();
};

const getOneUser = (id) => {
  return User.findById(id);
};

const deleteUser = (_id) => {
  return User.deleteOne({ _id });
};

const editUser = (_id, editedUser) => {
  return User.updateOne({ _id }, editedUser);
};

module.exports = {
  createUser,
  getUsers,
  getOneUser,
  editUser,
  deleteUser,
};
