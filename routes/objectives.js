const express = require('express');
const objectivesControllers = require('./../controllers/objectives');
const { isAuth } = require('../helpers/authMiddlewares');

const router = express.Router();

router
  .route('/')
  .get(isAuth, objectivesControllers.displayRegisterObjectives)
  .post(isAuth, objectivesControllers.registerObjectivesInfo)

router
  .route('/view')
  .get(isAuth, objectivesControllers.renderView);

  // router
  // .route('/:id')
  // .get(objectivesControllers.displayRegisterObjectives);
  

module.exports = router;
