const express = require('express');
const router = express.Router();
const objectivesControllers = require('../controllers/objectives');
const { isAuth } = require('../helpers/authMiddlewares');

// register objectives
router.get('/objectives', isAuth, (req, res, next) => {
  res.render('objectives');
});

router.post('/objectives', isAuth, objectivesControllers.registerObjectivesInfo);

// Que pasa si se modifican los objectivos?