const Objectives = require('../models/Objectives');

exports.displayRegisterObjectives = (req, res) => {
  // res.render('objectives');
  // const { id } = req.params;
  Objectives.find().populate('diet')
    .then(allTheFoodFromDB => {
      // res.render('foods', { foods: allTheFoodFromDB });
      console.log(allTheFoodFromDB)
      res.status(200).json({ allTheFoodFromDB });
    })
    .catch(error => {
      console.log('Error while getting the food from the DB: ', error);
    })
}

exports.renderView = (req, res) => {
  res.render('objectives');
}

exports.registerObjectivesInfo = (req, res) => {
  // console.log(req.body);
  
  let { gender, age, weight, height, exercise, objectives } = req.body;
  // const { gender, age, weight, height, exercise, objectives, user } = req.body;
  // const { user: { _id: user } } = req;

  if (!gender || !age || !weight || !height || !exercise || !objectives) {
    let errorMessage = 'All fields are required to be filled';
    return res.render('objectives', { title: 'Objectives', errorMessage });
  }

  exercise = (exercise == 'Si') ? true : false;

  objectives = {
    gender,
    age, 
    weight, 
    height, 
    exercise, 
    objectives/*,
    user*/
  }

  console.log(objectives);

  Objectives.create(objectives)
    .then(objective => {
      res.redirect("/profile");
      // res.status(200).json({ objective });
    })
    .catch(errorMessage => {
      res.render('objectives', { title: 'Objectives', errorMessage });
    })
}