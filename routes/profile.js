const express = require('express');
const profileControllers = require('./../controllers/profile');

const router = express.Router();

router
  .route('/')
  .get(profileControllers.renderView)

module.exports = router;
