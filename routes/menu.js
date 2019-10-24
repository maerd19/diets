const express = require("express");
const menuController = require('../controllers/menu');
const { isAuth } = require('../helpers/authMiddlewares');

const router = express.Router();

router
  .route('/')
  .get(isAuth, menuController.getAllMenus)
  .post(isAuth, menuController.createMenu)

router
  .route('/form')
  .get(menuController.createMenuForm)


router
  .route('/delete/:id')
  .get(isAuth, menuController.deleteMenu);

  router
  .route('/:id')
  .get(isAuth, menuController.getMenu)
  .patch(isAuth, menuController.updateMenu)


module.exports = router;
