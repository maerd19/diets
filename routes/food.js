const express = require("express");
const foodController = require('./../controllers/food');
const { isAuth } = require('../helpers/authMiddlewares');
const uploader = require("../helpers/multer");

const router = express.Router();

// router.get('/login', restrictAuth, (req, res) => {


router
  .route('/')
  .get(isAuth, foodController.getAllFood)  

router
  .route('/form/:id')
  .get(isAuth, foodController.createFoodForm)
  .post(isAuth, uploader.array("images"), foodController.createFood)


router
  .route('/:id')
  .get(isAuth, foodController.getFood)
  .patch(isAuth, foodController.updateFood)
  .delete(isAuth, foodController.deleteFood);

module.exports = router;
