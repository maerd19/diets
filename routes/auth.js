const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth');
const { restrictAuth } = require('../helpers/authMiddlewares');

// Login
router.get('/login', restrictAuth, (req, res) => {
  res.render('login', {title: 'Login',user:req.user });
});

router.post('/login', restrictAuth, authControllers.login);

// Sign Up
router.get('/signup', restrictAuth, (req, res) => {
  res.render('register', { title: 'Sign Up' });
});

router.post('/signup', restrictAuth, authControllers.signup);

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
})

router.get('/', (req, res) => {
  res.render('home', {title: 'Login' });
})

module.exports = router;