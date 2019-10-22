const passport = require('../helpers/passport');
const User = require('../models/User');
const zxcvbn = require('zxcvbn');
// const { send } = require('../helpers/mailer');

exports.login = (req, res) => {
  passport.authenticate('local', (err, user, info = {}) => {
    const { message: errorMessage } = info;
    if (errorMessage) {
      return res.render('login', { errorMessage });
    }

    console.log(req.login);
    req.login(user, err => {
      res.redirect('/profile');
    });
  })(req, res);
};

exports.signup = (req, res) => {
  let { username, password, email } = req.body;
  let { score, feedback } = zxcvbn(password);
  
  // console.log(zxcvbn(password));
  if (score == 0) {
    let errorMessage = `${feedback.warning}. ${feedback.suggestions.reduce( (acc, cur) => acc + cur, '')}`;
    return res.render('register', { title: 'Sign Up', errorMessage });
  }

  if (password !== req.body['confirm-pass']) {
    let errorMessage = 'Make sure to enter the same password';
    return res.render('register', { title: 'Sign Up', errorMessage });
  }

  if (!username || !password || !email) {
    let errorMessage = 'Username, e-mail and password are required';
    return res.render('register', { title: 'Sign Up', errorMessage });
  }

  User.register({ username, email }, password)
    .then(usr => {
      res.render('objectives')
      // const options = {
      //   filename: "register",
      //   email: usr.email,
      //   message: "Valida tu correo",
      //   subject: "Confirma correo"
      // };
      send(options);
      req.login(usr, errorMessage => {
        if (errorMessage)
          return res.render("register", { title: "Sign Up", errorMessage });
        res.redirect("/home");
      });
    })
    // .then(usr => {
    //   req.login(usr, err => {
    //     res.redirect("/objectives");
    //   });
    // })
    .catch(errorMessage => {
      res.render('register', { title: 'Sign Up', errorMessage })
    });
}