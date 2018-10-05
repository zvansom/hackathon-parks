const mongoose = require('mongoose');

exports.getLocalReps = async (req, res) => {
  // const reps = await fetch('')
  res.render('localReps', { title: 'Home' })
}
