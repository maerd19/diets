const passport = require('../helpers/passport');
const User = require('../models/User');
const zxcvbn = require('zxcvbn');
// const { send } = require('../helpers/mailer');

exports.login = (req, res) => {
  const { user } = req;

  passport.authenticate('local', (err, user, info = {}) => {
    const { message: errorMessage } = info;
    if (errorMessage) {
      return res.render('login', { user, errorMessage });
    }
    
    req.login(user, err => {
      // console.log('user', user);
      if (!user.objetivos_verificados) {
        res.redirect('/objectives/view')
      } else {
        res.redirect('/profile');
      }       
      // Foods.find({diet:theMenu._id})
      //   .then(foods=>{
      //     console.log('foods',foods)
      //     res.render('/profile', { foods })
      //   })

    });
  })(req, res);
};

exports.signup = (req, res) => {
  const { user } = req;

  let { username, password, email } = req.body;
  let { score, feedback } = zxcvbn(password);
  
  // console.log(zxcvbn(password));
  if (score == 0) {
    let errorMessage = `${feedback.warning}. ${feedback.suggestions.reduce( (acc, cur) => acc + cur, '')}`;
    return res.render('register', { user, title: 'Sign Up', errorMessage });
  }

  if (password !== req.body['confirm-pass']) {
    let errorMessage = 'Make sure to enter the same password';
    return res.render('register', { user, title: 'Sign Up', errorMessage });
  }

  if (!username || !password || !email) {
    let errorMessage = 'Username, e-mail and password are required';
    return res.render('register', { user, title: 'Sign Up', errorMessage });
  }

  User.register({ username, email }, password)
    .then(usr => {
      res.render('objectives')
      send(options);
      req.login(usr, errorMessage => {
        if (errorMessage)
          return res.render("register", { user, title: "Sign Up", errorMessage });
        res.redirect("/home");
      });
    })
    .catch(errorMessage => {
      res.render('register', { user, title: 'Sign Up', errorMessage })
    });
}