const express = require("express");
const router = express.Router();
const newsControllers = require("../app/controllers/NewsControllers");

router.use("/", newsControllers.news);

module.exports = router;
