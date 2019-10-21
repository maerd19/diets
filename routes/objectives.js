const express = require('express');
const objectivesControllers = require('./../controllers/objectives');

const router = express.Router();
// const { isAuth } = require('../helpers/authMiddlewares');

router
  .route('/')
  // .get(isAuth, objectivesControllers.displayRegisterObjectives)
  // .post(isAuth, objectivesControllers.registerObjectivesInfo);
  .get(objectivesControllers.displayRegisterObjectives)
  .post(objectivesControllers.registerObjectivesInfo);
  

module.exports = router;
