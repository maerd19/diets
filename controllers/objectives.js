const Objectives = require('../models/Objectives');

exports.registerObjectivesInfo = (req, res) => {
  const { gender, age, weight, height, exercise, objectives } = req.body;
  const { user: { _id: user } } = req;

  if (!gender || !age || !weight || !height || !exercise || !objectives) {
    let errorMessage = 'All fields are required to be filled';
    return res.render('objectives', { title: 'Objectives', errorMessage });
  }

  objectives = {
    gender,
    age, 
    weight, 
    height, 
    exercise, 
    objectives,
    user
  }

  Objectives.create(objectives)
    .then(objective => {
      res.redirect("/profile");
    })
    .catch(errorMessage => {
      res.render('objectives', { title: 'Objectives', errorMessage });
    })
}