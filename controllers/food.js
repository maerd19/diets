const Food = require("../models/Food");
// const { isAuth } = require("../helpers/authMiddlewares");

exports.getAllFood = (req, res) => {
  const { user } = req;

  Food.find().populate('diet')
    .then(allTheFoodFromDB => {
      console.log(allTheFoodFromDB)     
      res.render('foods', { user, foods: allTheFoodFromDB });
      // res.status(200).json({ allTheFoodFromDB });
    })
    .catch(error => {
      console.log('Error while getting the food from the DB: ', error);
    })
};

exports.createFoodForm = (req, res) => {
  const { id } = req.params;
  const { user } = req;

  res.render('food-form',{ user, id });
}

exports.getFood = (req, res) => {
  const { id } = req.params;
  Food.findOne({'_id': id})
    .then(theFood => {
      // res.render('food-details', { food: theFood });
      res.status(200).json({ theFood });
    })
    .catch(error => {
      console.log('Error while retrieving food details: ', error);
    })
};

exports.createFood = (req, res) => {
  let comidita = req.body
  const { id } = req.params;
  let diet = id;
  const images = req.files.map(file => file.secure_url);
  
  comidita_Id = { ...comidita, diet, images }
  console.log(comidita_Id);

  Food.create(comidita_Id) 
    .then(food => {
      // res.status(200).json({ food });
      res.redirect('/foods');
    })
};

exports.updateFood = (req, res) => {
  const { id } = req.params;
  const { name, day, ingredientes, schedule, diet } = req.body;
  Food.findByIdAndUpdate(id, { $set: { name, day, ingredientes, schedule, diet }}, { new: true  })
  .then(food => {
    res.status(200).json({ food });
    // res.redirect('/foods');
  })
  .catch((error) => {
    console.log(error);
  })
};

exports.deleteFood = (req, res) => {
  const { id } = req.params;
  Food.findByIdAndDelete(id).then(() => {
    // res.redirect("/foods");
    res.status(200).json({ 
      "message" : "The register has been deleted"
     });
  });
};
