const mongoose = require('mongoose');
const axios = require('axios');

exports.getLocalReps = async (req, res) => {
  res.render('localReps', { title: "Local Reps" });
}
