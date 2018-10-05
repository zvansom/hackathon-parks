const mongoose = require('mongoose');

exports.home = (req, res) => {
  res.render('home', { title: 'Home' })
}
