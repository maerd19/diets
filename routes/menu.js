const express = require("express");
const router = express.Router();
const Food = require("../models/Food");
const { isAuth } = require("../helpers/authMiddlewares");

router.get("/menu_day/:day", isAuth, (req, res) => {
  const { day } = req.params;
  console.log("days", day);
  console.log("params", req.params);
  Food.find({ day: day })
    .then(days => {
      console.log(days);
      res.render("daily_menu", { days });
    })
    .catch(error => {
      throw new Error(`Impossible to add the author. ${error}`);
    });
});

module.exports = router;
