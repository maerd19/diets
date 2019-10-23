const express = require("express");
const menuController = require('../controllers/menu');

const router = express.Router();

router
  .route('/')
  .get(menuController.getAllMenus)
  .post(menuController.createMenu)

router
  .route('/form')
  .get(menuController.createMenuForm)


router
  .route('/delete/:id')
  .get(menuController.deleteMenu);

  router
  .route('/:id')
  .get(menuController.getMenu)
  .patch(menuController.updateMenu)


module.exports = router;
