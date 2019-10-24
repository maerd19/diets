const Foods = require('../models/Food');

exports.renderView = (req, res) => {
  const { user } = req;

  Foods.find({ diet:user.diet })
    .then(foods => {
      console.log('foods: ',foods)
      res.render('profile', { user, foods });
    })

  // res.render('profile', { user });
}