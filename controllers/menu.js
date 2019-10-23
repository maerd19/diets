const Menu = require("../models/Menus");
const { isAuth } = require("../helpers/authMiddlewares");

exports.getAllMenus = (req, res) => {
  Menu.find()
    .then(allTheMenusFromDB => {
      console.log(allTheMenusFromDB);
      res.render('menus', { menus: allTheMenusFromDB });
      // res.status(200).json({ allTheMenusFromDB });
    })
    .catch(error => {
      console.log('Error while getting the menus from the DB: ', error);
    })
};

exports.createMenuForm = (req, res) => {
  res.render('menu-form');
}

exports.getMenu = (req, res) => {
  const { id } = req.params;
  Menu.findOne({'_id': id})
    .then(theMenu => {
      // res.render('menu-details', { menu: theMenu });
      res.status(200).json({ theMenu });
    })
    .catch(error => {
      console.log('Error while retrieving menu details: ', error);
    })
};

exports.createMenu = (req, res) => {
  const { name, ranking } = req.body;
  Menu.create({ name, ranking }) 
    .then(menu => {
      // res.status(200).json({ menu });
      res.redirect('/menus');
    })
    .catch(error => {
      console.log('Error while inserting menu. Details: ', error);
    })
};

exports.updateMenu = (req, res) => {
  const { id } = req.params;
  const { name, ranking } = req.body;
  // Menu.findByIdAndUpdate(id, { $set: auction }, { new: true })
  Menu.findByIdAndUpdate(id, { $set: { name, ranking }}, { new: true })
  .then(menu => {
    res.status(200).json({ menu });
    // res.redirect('/foods');
  })
  .catch((error) => {
    console.log(error);
  })
};

exports.deleteMenu = (req, res) => {
  const { id } = req.params;
  Menu.findByIdAndDelete(id).then(() => {
    res.status(200).json({ 
      "message" : "The register has been deleted"
     });
    // res.redirect("/foods");
  });
};
