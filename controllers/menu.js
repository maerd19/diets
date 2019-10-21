const Menu = require("../models/Menus");
const { isAuth } = require("../helpers/authMiddlewares");

// router.get("/menu/:id", isAuth, (req, res) => {
//   const { day } = req.params;
//   console.log("days", day);
//   console.log("params", req.params);
//   Food.find({ day: day })
//     .then(days => {
//       console.log(days);
//       res.render("daily_menu", { days });
//     })
//     .catch(error => {
//       throw new Error(`Impossible to add the author. ${error}`);
//     });
// });

exports.getAllMenus = (req, res) => {
  Menu.find()
    .then(allTheMenusFromDB => {
      res.render('menus', { menus: allTheMenusFromDB });
    })
    .catch(error => {
      console.log('Error while getting the menus from the DB: ', error);
    })
};

exports.getMenu = (req, res) => {
  const { id } = req.params;
  Menu.findOne({'_id': id})
    .then(theMenu => {
      res.render('menu-details', { menu: theMenu });
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
    res.redirect('/foods');
    })
};

exports.updateMenu = (req, res) => {
  const { id } = req.params;
  const { name, ranking } = req.body;
  // Menu.findByIdAndUpdate(id, { $set: auction }, { new: true })
  Menu.findByIdAndUpdate(id, { $set: { name, ranking }})
  .then(menu => {
    // res.status(200).json({ menu });
    res.redirect('/foods');
  })
  .catch((error) => {
    console.log(error);
  })
};

exports.deleteMenu = (req, res) => {
  const { id } = req.params;
  Menu.findByIdAndDelete(id).then(() => {
    res.redirect("/foods");
  });
};
