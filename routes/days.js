const express = require("express");
const router = express.Router();
const Food = require("../models/Food");
const { isAuth } = require("../helpers/authMiddlewares");

router.get("/days/", isAuth, (req, res) => {
  res.render("days");
});

module.exports = router;
