const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  FName: {
    type: String,
    required: [true, "First name is required"],
    minlength: [3, "First name should be between 3 and 50 characters"],
    maxlength: [50, "First name should be between 3 and 50 characters"]
  },
  LName: {
    type: String,
    required: [true, "Last name is required"],
    minlength: [3, "Last name should be between 3 and 50 characters"],
    maxlength: [50, "Last name should be between 3 and 50 characters"]
  },
  Email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/\S+@\S+\.\S+/, "Invalid email address"]
  },
  Password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [5, "Password should be at least 5 characters long"],
  },
  DOB: {
    type: Date,
    required: [true, "Date of birth is required"]
  },
  Gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: ['Male', 'Female', 'Other']
  },
  UserType: {
    type: String,
    required: [true, "User Type is required"],
    enum: ['Customer', 'Owner', 'Admin']
  },
  CNIC: {
    type: String,
    required: [true, "CNIC is required"],
    validate: {
      validator: function(value) {
        return /^[0-9]{5}-[0-9]{7}-[0-9]$/.test(value);
      },
      message: "Invalid CNIC number"
    }
  },
  Phoneno: {
    type: String,
    required: [true, "Phone number is required"],
    match: [/^([0-9]{11})$/, "Phone Number must contain 11 digits."]
  },
  Address: {
    type: String,
    required: [true, "Address is required"],
    minlength: [5, "Address should be between 5 and 50 characters"],
    maxlength: [50, "Address should be between 5 and 50 characters"]
  },
  ProfilePic: String,
  TermsAndConditions: {
    type: Boolean,
    required: [true, "You must agree to the terms and conditions."]
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
