const Objectives = require('../models/Objectives');
const User = require('../models/User');
const Menus = require('../models/Menus');
const Foods = require('../models/Food');
//foggy
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
  const { user } = req;

  res.render('objectives', { user });
}

exports.registerObjectivesInfo = (req, res) => {
  
  let { gender, weight, height, exercise, objectivesF } = req.body;
  const { user: { _id: user } } = req;

  // console.log('user info', req.user);


  if (!gender || !weight || !height || !exercise || !objectivesF) {
    let errorMessage = 'All fields are required to be filled';
    return res.render('objectives', { user, title: 'Objectives', errorMessage });
  }
  
  exercise = (exercise == 'Si') ? true : false;

  objectives = {
    gender,
    weight, 
    height, 
    exercise, 
    objectivesF,
    user
  }

  let diet = '';
  // woman
  console.log(`gender: ${gender}, exercise: ${exercise}, objectivesF: ${objectivesF}`);
  if (gender === 'woman' && exercise === false && objectivesF === 'slim') diet = 'low_carbs';
  if (gender === 'woman' && exercise === true  && objectivesF === 'slim') diet = 'vegan';
  if (gender === 'woman' && exercise === false && objectivesF === 'muscle') diet = 'keto';
  if (gender === 'woman' && exercise === true && objectivesF === 'muscle') diet = 'macros';
  // man
  if (gender === 'man' && exercise === false && objectivesF === 'slim') diet = 'low_carbs';
  if (gender === 'man' && exercise === true  && objectivesF === 'slim') {
    console.log('entraste a donde te corresponde perro!');
    diet = 'vegan';
    console.log('diet', diet);
  }
  if (gender === 'man' && exercise === false && objectivesF === 'muscle') diet = 'keto';
  if (gender === 'man' && exercise === true && objectivesF === 'muscle') diet = 'basal';
  
  console.log(diet);
  
  Menus.findOne({'name': diet})
    .then(theMenu => {
      // console.log('asdsadasdas',theMenu)
      User.findByIdAndUpdate({_id:objectives.user},{$set:{diet:theMenu._id,objetivos_verificados: true }}, {new: true} )
        .then(()=>console.log('readyUser'))
        .catch(err=>console.log('el error',err))
      Foods.find({diet:theMenu._id})
        .then(foods=>{
          // console.log('foods',foods)
          res.redirect('/profile');
        })
    })
    .catch(error => {
      console.log('Error while retrieving menu details: ', error);
    })

  Objectives.create(objectives)
    .then(objective => {
      User.findByIdAndUpdate(user, { $set: { objetivos_verificados: true }}, {new: true} )
        .then(user=>console.log('el user act',user))
        .catch(err=>console.log('error',err));
    })
    .catch(errorMessage => {
      res.render('objectives', { title: 'Objectives', errorMessage });
    })
}