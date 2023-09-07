const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const JWT_SECRET = "jwt_token";

//Route 1:  Create a User using: POST "/api/auth/register" No login required
router.post("/register",
  
  async (req, res) => {
    let success = false;

    // Validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: success, errors: errors.array() });
    }

    try {
      // Check if the user with the email already exists
      let user = await User.findOne({ Email: req.body.Email });
      if (user) {
        return res.status(400).json({ success: success, error: "User with this email already exists" });
      }

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.Password, salt);

      // Create a new user in the database
      user = await User.create({
        FName: req.body.FName,
        LName: req.body.LName,
        Email: req.body.Email,
        Password: secPass,
        DOB: req.body.DOB,
        Gender: req.body.Gender,
        UserType: req.body.UserType,
        CNIC: req.body.CNIC,
        Phoneno: req.body.Phoneno,
        Address: req.body.Address,
        ProfilePic: req.body.ProfilePic,
        TermsAndConditions: req.body.TermsAndConditions,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      // Json web token for authentication
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;

      res.json({ success, authtoken });

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


//Route 2:  Authenticator a User using: POST "/api/auth/login" No login required
router.post("/login",
  [
    //Validations
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password can not be blank").exists(),
  ],
  //Validation errors
  async (req, res) => {
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success: success, errors: errors.array() });
    }

    //get email and password from request body
    const { email, password } = req.body;

    try {
      //Find user in database
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({success:success, error: "Please enter correct credentials" });
      }

      //Compare user's password with password stored on database
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res
          .status(400)
          .json({success: success, error: "Please enter correct credentials" });
      }
      //if user exists in database return user data
      const data = {
        user: {
          id: user.id,
        },
      };

      //Json web token for authentication
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Route 3: Get logged in User details using: POST "/api/auth/login". Login required
router.post("/getuser", fetchuser,
  async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findById(userId).select("-password");

      res.send(user)
      
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;