const express = require("express");
const { getHomepage, getAbc } = require("../controllers/homeController");
const router = express.Router();
router.get("/", getHomepage);
router.get("/phuong", getAbc);
module.exports = router;
