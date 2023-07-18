const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");
const User = require("../models/user");
const getHomepage = async (req, res) => {
  let results = await User.find({});
  return res.render("home.ejs", { listUsers: results });
};
const getAbc = (req, res) => {
  res.render("sample.ejs");
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await User.findById(userId);

  res.render("edit.ejs", { userEdit: user });
};
const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await User.findById(userId);
  res.render("delete.ejs", { userDelete: user });
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  await User.create({
    email: email,
    name: name,
    city: city,
  });

  res.redirect("/");
};
const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  let userId = req.body.userId;
  await User.updateOne(
    { _id: userId },
    { email: email, name: name, city: city }
  );
  // res.send("Updated user succeed!");
  res.redirect("/");
};
const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  await User.deleteOne({ __id: id });
  res.redirect("/");
};

module.exports = {
  getHomepage,
  getAbc,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  updateUserById,
  postDeleteUser,
  postHandleRemoveUser,
  deleteUserById,
};
