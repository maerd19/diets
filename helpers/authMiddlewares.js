exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.redirect('/login');
}

// exports.isAuth = (req, res, next) => (req.isAuthenticated()) ? next() : res.redirect('/login');

exports.restrictAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect('/profile');
  }

  return next();
}

// exports.restrictAuth = (req, res, next) => (req.isAuthenticated()) ? res.redirect('/profile') : next();