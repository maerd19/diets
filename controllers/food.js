const Food = require("../models/Food");
// const { isAuth } = require("../helpers/authMiddlewares");

exports.getAllFood = (req, res) => {
  Food.find()
    .then(allTheFoodFromDB => {
      console.log(allTheFoodFromDB);      
      res.render('foods', { foods: allTheFoodFromDB });
      // res.status(200).json({ allTheFoodFromDB });
    })
    .catch(error => {
      console.log('Error while getting the food from the DB: ', error);
    })
};

exports.createFoodForm = (req, res) => {
  const { id } = req.params;
  res.render('food-form');
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
  const { name, day, ingredientes, schedule, diet } = req.body;
  Food.create({ name, day, ingredientes, schedule, diet }) 
    .then(food => {
    res.status(200).json({ food });
    // res.redirect('/foods');
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
