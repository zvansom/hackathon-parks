const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categories = ['Needs Repair', 'Safety Hazard', 'Accessibility',
'Vandalism'];

// confirm category matches possible list
const validateCat = (cat) => categories.includes(cat) ? true : false;

// TODO determine if cat should be hardcoded arr of options
const issueSchema = new Schema({
  title: String,
  park: String,
  pic: String,
  txt: String,
  cat: {
    type: String,
    validate: [validateCat, 'That is not a valid category'],
  },
  sub: { type: Schema.Types.ObjectId, ref: 'User' },
  vote: {
    type: Number,
    default: 0,
  }
});

module.exports = mongoose.model('Issue', issueSchema);
