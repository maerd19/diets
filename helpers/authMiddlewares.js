const Objectives = require('../models/Objectives');

// If user is not logged it's redirected to login
exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/login');
}
// exports.isAuth = (req, res, next) => (req.isAuthenticated()) ? next() : res.redirect('/login');

// If user is logged it's redirected to profile
exports.restrictAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect('/profile');
  }
  return next();
}

// If user hasn't already filled objectives form it will be redirected to it
exports.objectivesFilled = (req, res, next) => {
  if (Objectives.findOne({'user': req.user})) {
    return next();
  }
  return res.redirect('/objectives');
}
// exports.objectivesFilled = (req, res, next) => (Objectives.findOne({'user': req.user})) ? next() : res.redirect('/objectives');
