const mongoose = require('mongoose');
const { Schema } = mongoose;

const ResidenceSchema = new Schema({
   OwnerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users' // This references the 'users' collection
   },
   Name: {
      type: String,
      required: true
   },
   Owner: {
      type: String,
      required: true
   },
   Type: {
      type: String,
      required: true
   },
   Rooms: {
      type: Number,
      required: true,
      min: 1
   },
   Shared: {
      type: String,
      required: true
   },
   Price: {
      type: Number,
      required: true,
      min: 1
   },
   PriceType: {
      type: String,
      required: true
   },
   Location: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
   },
   Email: {
      type: String,
      required: true,
      match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
   },
   Phoneno: {
      type: String,
      match: /^[0-9]{11}$/
   },
   ResidencePic: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
   }
});

const Residence = mongoose.model('residences', ResidenceSchema);

module.exports = Residence;