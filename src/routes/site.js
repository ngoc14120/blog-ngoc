const express = require("express");
const router = express.Router();
const siteControllers = require("../app/controllers/SiteController");

//dịnh nghĩa đường dẫn (route) cho trang home và search
router.use("/search", siteControllers.search);
router.use("/", siteControllers.home);

module.exports = router;
