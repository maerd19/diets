const express = require("express");
const foodController = require('./../controllers/food');

const router = express.Router();

router
  .route('/')
  .get(foodController.getAllFood)
  .post(foodController.createFood)

router
  .route('/form')
  .get(foodController.createFoodForm)

router
  .route('/:id')
  .get(foodController.getFood)
  .patch(foodController.updateFood)
  .delete(foodController.deleteFood);

module.exports = router;
