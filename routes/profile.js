const express = require('express');
const profileControllers = require('./../controllers/profile');
const { isAuth } = require('../helpers/authMiddlewares');

const router = express.Router();

router
  .route('/')
  .get(isAuth, profileControllers.renderView)

module.exports = router;
