const mongoose = require('mongoose');
const axios = require('axios');

exports.getLocalReps = (req, res) => {
  axios.get('https://openstates.org/api/v1/legislators/?apikey=b6ae4ec4-2dc8-4c1b-8594-2f0750387565&state=WA&district=4')
    .then(result => {
      console.log('axios data:', result.data);
      res.render('localReps', { title: "Local Reps", reps: result.data });
    })
    .catch(err => {
      console.log('axios err:', err);
      req.flash('error', 'Error finding your local representatives');
      res.render('localReps', { title: "Local Reps" });
    });
};
