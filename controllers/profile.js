exports.renderView = (req, res) => {
  const { user } = req;

  res.render('profile', { user });
}