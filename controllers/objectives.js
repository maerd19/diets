const Objectives = require('../models/Objectives');
const User = require('../models/User');
const Menus = require('../models/Menus');

exports.displayRegisterObjectives = (req, res) => {
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
  
  let { gender, age, weight, height, exercise, objectives } = req.body;
  const { user: { _id: user } } = req;

  console.log('user info', req.user);


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
    objectives,
    user
  }

  let diet = '';
  // woman
  if (gender == 'woman' && exercise == false && objectives == 'slim') diet = 'low_carbs';
  if (gender == 'woman' && exercise == true  && objectives == 'slim') diet = 'vegan';
  if (gender == 'woman' && exercise == false && objectives == 'muscle') diet = 'keto';
  if (gender == 'woman' && exercise == true && objectives == 'muscle') diet = 'macros';
  // man
  if (gender == 'man' && exercise == false && objectives == 'slim') diet = 'low_carbs';
  if (gender == 'man' && exercise == true  && objectives == 'slim') diet = 'vegan';
  if (gender == 'man' && exercise == false && objectives == 'muscle') diet = 'keto';
  if (gender == 'man' && exercise == true && objectives == 'muscle') diet = 'basal';

  Menus.findOne({'name': diet})
    .then(theMenu => {
      res.status(200).json({ theMenu });
    })
    .catch(error => {
      console.log('Error while retrieving menu details: ', error);
    })

  Objectives.create(objectives)
    .then(objective => {
      User.findByIdAndUpdate(user, { $set: { objetivos_verificados: true }}, {new: true} )
        .then(user=>console.log('el user act',user))
        .catch(err=>console.log('error',err));  
      
      res.redirect("/profile");
      // res.status(200).json({ objective });
    })
    .catch(errorMessage => {
      res.render('objectives', { title: 'Objectives', errorMessage });
    })
}