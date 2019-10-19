const express = require("express");
const router = express.Router();

router.get("/days", (req, res) => {
  res.render("days");
});

module.exports = router;
