const express = require('express');
const router  = express.Router();
const Foods = require('../models/Food');

const { isAuth, objectivesFilled } = require("../helpers/authMiddlewares");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/home", isAuth, (req, res) => {
  res.render('home');
});

router.get("/profile", isAuth, objectivesFilled, (req, res) => {
  console.log(req.user);  
  const { user } = req;
  Foods.find({ diet:user.diet })
    .then(foods => {
      res.render("profile", { user, foods });
    });
});

module.exports = router;
