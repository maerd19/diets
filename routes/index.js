const express = require('express');
const router  = express.Router();
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
  Auction.find({ author: user._id }).then(auctions => {
    res.render("profile", { user, auctions });
  });
 res.render('profile');
});

module.exports = router;
