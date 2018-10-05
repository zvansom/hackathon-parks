const mongoose = require('mongoose');
const Issue = mongoose.model('Issue');

// returns all issues, ordered by decreasing vote count
exports.viewAllIssues = async(req, res) => {
  const issues = await Issue.find({}).sort({ votes: 'desc' });
  res.render('issues', { issues });
};

// TODO form for creating a new issue
exports.openNewIssue = (req, res) => {
  res.render('issue');
};

// handle form input for creating a new issue
exports.submitNewIssue = (req, res) => {
  // add park, pic, txt, cat
  const data = req.body;
  // TODO syntax check, where is user info?
  const user = req.body.user;
  // add sub
  data.sub = user._id;
  Issue.create(data)
    .then( () => {
      req.flash('success', 'Successfully submitted issue');
      res.redirect('/issues');
    })
    .catch(err => {
      console.log('err submitting issue:', err);
      req.flash('error', 'Error submitting issue');
      res.redirect('/issues/new');
    });
};

// TODO get details for a specific issue
// should this just be a fetch that then fills in a section of a list?
// or should it be a new page?
exports.getIssueDetails = (req, res) => {
  res.send('reached route for issue details');
};
