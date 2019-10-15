const express = require('express');
const router  = express.Router();
const { isAuth } = require("../helpers/authMiddlewares");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/home", isAuth, (req, res) => {
  // const { user } = req;
  // Auction.find()
  //   .populate({
  //     path: "lider",
  //     populate: {
  //       path: "author"
  //     }
  //   })
  //   .then(auctions => {
  //     res.render("home", { user, auctions });
  //   });
  res.render('home');
});

router.get("/profile", isAuth, (req, res) => {
  // const { user } = req;
  // Auction.find({ author: user._id }).then(auctions => {
  //   res.render("profile", { user, auctions });
  // });
  res.render('profile');
});

module.exports = router;
