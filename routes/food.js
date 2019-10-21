const express = require("express");
const foodController = require('../controllers/food');

const router = express.Router();

router
  .route('/')
  .get(foodController.getAllMenus)
  .post(foodController.createMenu)

router
  .route('/:id')
  .get(foodController.getMenu)
  .patch(foodController.updateMenu)
  .delete(foodController.deleteMenu);

module.exports = router;
