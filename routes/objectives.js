const express = require('express');
const objectivesControllers = require('./../controllers/objectives');

const router = express.Router();
// const { isAuth } = require('../helpers/authMiddlewares');

router
  .route('/')
  // .get(isAuth, objectivesControllers.displayRegisterObjectives)
  // .post(isAuth, objectivesControllers.registerObjectivesInfo);
  .get(objectivesControllers.displayRegisterObjectives)
  .post(objectivesControllers.registerObjectivesInfo)

router
  .route('/view/')
  .get(objectivesControllers.renderView);

  // router
  // .route('/:id')
  // .get(objectivesControllers.displayRegisterObjectives);
  

module.exports = router;
