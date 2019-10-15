const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth');
const { restrictAuth } = require('../helpers/authMiddlewares');

// Login
router.get('/login', restrictAuth, (req, res) => {
  res.render('login', {title: 'Login' });
});

router.post('/login', restrictAuth, authControllers.login);

// Singup
router.get('/signup', restrictAuth, (req, res) => {
  res.render('register', { title: 'Signup' });
});

router.post('/signup', restrictAuth, authControllers.signup);

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
})

module.exports = router;