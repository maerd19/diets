const express = require("express");
const menuController = require('../controllers/menu');

const router = express.Router();

router
  .route('/')
  .get(menuController.getAllMenus)
  .post(menuController.createMenu)

router
  .route('/:id')
  .get(menuController.getMenu)
  .patch(menuController.updateMenu)
  .delete(menuController.deleteMenu);

router
  .route('/form')
  .get(menuController.createMenuForm)

module.exports = router;
