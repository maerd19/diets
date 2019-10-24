const Objectives = require('../models/Objectives');
const User = require('../models/User');
const Menus = require('../models/Menus');
const Foods = require('../models/Food');

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
  
  let { gender, age, weight, height, exercise, objectives } = req.body;
  const { user: { _id: user } } = req;

  console.log('user info', req.user);


  if (!gender || !age || !weight || !height || !exercise || !objectives) {
    let errorMessage = 'All fields are required to be filled';
    return res.render('objectives', { user, title: 'Objectives', errorMessage });
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
  // if (gender == 'woman' && exercise == false && objectives == 'slim') diet = 'low_carbs';
  // if (gender == 'woman' && exercise == true  && objectives == 'slim') diet = 'vegan';
  // if (gender == 'woman' && exercise == false && objectives == 'muscle') diet = 'keto';
  // if (gender == 'woman' && exercise == true && objectives == 'muscle') diet = 'macros';
  // // man
  // if (gender == 'man' && exercise == false && objectives == 'slim') diet = 'low_carbs';
  // if (gender == 'man' && exercise == true  && objectives == 'slim') diet = 'vegan';
  // if (gender == 'man' && exercise == false && objectives == 'muscle') diet = 'keto';
  if (gender == 'woman' && exercise == false && objectives == 'slim') diet = 'basal';
  if (gender == 'woman' && exercise == true  && objectives == 'slim') diet = 'basal';
  if (gender == 'woman' && exercise == false && objectives == 'muscle') diet = 'basal';
  if (gender == 'woman' && exercise == true && objectives == 'muscle') diet = 'basal';
  // man
  if (gender == 'man' && exercise == false && objectives == 'slim') diet = 'basal';
  if (gender == 'man' && exercise == true  && objectives == 'slim') diet = 'basal';
  if (gender == 'man' && exercise == false && objectives == 'muscle') diet = 'basal';
  if (gender == 'man' && exercise == true && objectives == 'muscle') diet = 'basal';
  console.log('asds111111111adasdas',diet)
  Menus.findOne({'name': 'basal'})
    .then(theMenu => {
      console.log('asdsadasdas',theMenu)
      User.findByIdAndUpdate({_id:objectives.user},{$set:{diet:theMenu._id,objetivos_verificados: true }}, {new: true} ).then(()=>console.log('readyUser')).catch(err=>console.log('el error',err))
      Foods.find({diet:theMenu._id}).then(food=>{
        console.log('foods',food)
        res.redirect('/profile')
      })
    })
    .catch(error => {
      console.log('Error while retrieving menu details: ', error);
    })

  // Objectives.create(objectives)
  //   .then(objective => {
  //     User.findByIdAndUpdate(user, { $set: { objetivos_verificados: true }}, {new: true} )
  //       .then(user=>console.log('el user act',user))
  //       .catch(err=>console.log('error',err));

      
      
  //     res.redirect("/profile");
  //     // res.status(200).json({ objective });
  //   })
  //   .catch(errorMessage => {
  //     res.render('objectives', { title: 'Objectives', errorMessage });
  //   })
}