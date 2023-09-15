const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
   OwnerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users' // This references the 'users' collection
   },
   ResidentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users' // This references the 'users' collection
   },
   ResidenceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'residences' // This references the 'residences' collection
   },
    ResidenceName: String,
    Resident: String,
    ResidentPhone: String,
    Type: String,
    Price: Number,
    PriceType: String,
    Date: Date,
    Status: String
});

module.exports = mongoose.model('Booking', bookingSchema);
