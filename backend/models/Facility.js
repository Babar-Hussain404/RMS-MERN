const mongoose = require('mongoose');

const facilitySchema = new mongoose.Schema({
  Name: String,
  Icon: String,
  IsSelected: Boolean
});

module.exports = mongoose.model('Facility', facilitySchema);

