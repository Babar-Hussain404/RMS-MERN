const mongoose = require('mongoose');

const facilitySchema = new mongoose.Schema({
  Name: String,
  Icon: String,
});

module.exports = mongoose.model('Facility', facilitySchema);

