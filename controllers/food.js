const Food = require("../models/Food");
const { isAuth } = require("../helpers/authMiddlewares");

exports.getAllFood = (req, res) => {
  Food.find()
    .then(allTheFoodFromDB => {
      res.render('foods', { menus: allTheFoodFromDB });
    })
    .catch(error => {
      console.log('Error while getting the food from the DB: ', error);
    })
};

exports.getFood = (req, res) => {
  const { id } = req.params;
  Menu.findOne({'_id': id})
    .then(theMenu => {
      res.render('food-details', { menu: theMenu });
    })
    .catch(error => {
      console.log('Error while retrieving food details: ', error);
    })
};

exports.createFood = (req, res) => {
  const { name, day, ingredientes, schedule, diet } = req.body;
  Menu.create({ name, day, ingredientes, schedule, diet }) 
    .then(food => {
    // res.status(200).json({ food });
    res.redirect('/foods');
    })
};

exports.updateFood = (req, res) => {
  const { id } = req.params;
  const { name, day, ingredientes, schedule, diet } = req.body;  
  // Menu.findByIdAndUpdate(id, { $set: auction }, { new: true })
  Menu.findByIdAndUpdate(id, { $set: { name, day, ingredientes, schedule, diet }})
  .then(food => {
    // res.status(200).json({ menu });
    res.redirect('/foods');
  })
  .catch((error) => {
    console.log(error);
  })
};

exports.deleteFood = (req, res) => {
  const { id } = req.params;
  Menu.findByIdAndDelete(id).then(() => {
    res.redirect("/foods");
  });
};
