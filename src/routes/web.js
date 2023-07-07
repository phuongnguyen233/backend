const express = require("express");
const {
  getHomepage,
  getAbc,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");
const router = express.Router();
router.get("/", getHomepage);
router.get("/phuong", getAbc);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);
module.exports = router;
