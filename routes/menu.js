const express = require("express");
const menuController = require('../controllers/menu');

const router = express.Router();

router
  .route('/')
  .get(menuController.getAllFood)
  .post(menuController.createFood)

router
  .route('/:id')
  .get(menuController.getFood)
  .patch(menuController.updateFood)
  .delete(menuController.deleteFood);

module.exports = router;
